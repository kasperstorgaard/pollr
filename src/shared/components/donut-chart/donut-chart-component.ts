import { inject, bindable, DOM } from 'aurelia-framework';
import * as d3lib from 'd3';

@inject(d3lib, DOM.Element)
export class DonutChartComponent {
    @bindable public chartData: any[];
    @bindable public color: Function;
    @bindable public keyProp: string = 'key';
    @bindable public valueProp: string = 'value';

    private d3;
    private element: HTMLElement;
    private arc: Function;
    private pie: Function;
    private svg;
    private size: number;
    private arcLookup: Object = {};

    constructor (d3lib, element: HTMLElement) {
        this.d3 = d3lib;
        this.element = element;
    }

    /**
     * lifecycle callback
     * sets up the size based on the host element
     *
     * @memberOf DonutChartComponent
     */
    public attached () {
        const rect = this.element.getBoundingClientRect();
        this.size = Math.floor(rect.width);
    }

    /**
     * attribute change listener
     * initializes or updates the chart
     *
     * @param {Arra<any>} [data=[]]
     * @returns
     *
     * @memberOf DonutChartComponent
     */
    public chartDataChanged (data: any[] = []) {
        if (!this.size) {
            return;
        }

        if (!this.svg) {
            this.createElements(this.element, this.size);
            this.initialize(this.svg, data, this.color);
            return;
        }

        this.update(this.svg, data, this.color);
    }

    /**
     * initializes the reusable chart elements
     *
     * @private
     * @param {HTMLElement} element
     * @param {number} size
     *
     * @memberOf DonutChartComponent
     */
    private createElements (element: HTMLElement, size: number) {
        const radius = size / 2;
        this.arc = this.d3.arc()
            .outerRadius(radius)
            .innerRadius(radius * 0.6);

        this.pie = this.d3.pie()
            .value((d: any) => d[this.valueProp])
            .sort(null)
            .padAngle(0.05);

        this.svg = this.d3.select(element).append('svg')
            .attr('width', size)
            .attr('height', size)
            .append('g')
            .attr('transform', `translate(${radius},${radius})`);
    }

    /**
     * sets up the chart, including enter animations
     *
     * @private
     * @param {any} svg
     * @param {any} data
     * @param {any} color
     *
     * @memberOf DonutChartComponent
     */
    private initialize (svg, data, color) {
        const arcs = svg.selectAll('path')
            .data(this.pie(data))
            .enter()
            .append('path')
            .attr('d', this.arc)
            .attr('fill', d => color(d.data[this.keyProp]));

        arcs.transition()
            .duration(1000)
            .attrTween('d', this.getArcTween())
            .on('end', () => this.saveArcs(arcs));
    }

    /**
     * redraws the chart
     *
     * @private
     * @param {any} svg
     * @param {any} data
     * @param {any} color
     *
     * @memberOf DonutChartComponent
     */
    private update (svg, data: any[], color: Function) {
        const arcs = svg.selectAll('path')
            .data(this.pie(data));

        const exit = arcs.exit();
        const enter = arcs.enter().append('path');
        const enterUpdate = enter.merge(arcs);

        enterUpdate.attr('fill', d => color(d.data[this.keyProp]));

        // update
        arcs.transition()
            .duration(600)
            .attrTween('d', (d) => {
                const base = this.arcLookup[d.data[this.keyProp]];
                this.getArcTween(base)(d);
            })
            .on('end', () => this.saveArcs(enterUpdate));

        // exit
        exit.transition()
            .duration(600)
            .attrTween('d', this.getArcTween())
            .remove();

        // enter
        enter.transition()
            .duration(600)
            .attrTween('d', this.getArcTween());
    }

    private saveArcs (arcs: any) {
        arcs.each((arc) => {
            this.arcLookup[arc.data[this.keyProp]] = {
                endAngle: arc.endAngle,
                startAngle: arc.startAngle
            };
        });
    }

    private getArcTween (base: Object = { endAngle: 0, startAngle: 0 }) {
        return (d) => {
            const interpolate = this.d3.interpolateObject(base, d);
            return t => this.arc(interpolate(t));
        };
    }
}
