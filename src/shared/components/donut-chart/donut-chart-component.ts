import { inject, bindable, DOM } from 'aurelia-framework';
import * as d3lib from 'd3';

@inject(d3lib, DOM.Element)
export class DonutChartComponent {
    @bindable public chartData: any[];
    @bindable public color: Function;
    @bindable public keyProp: string = 'id';
    @bindable public nameProp: string = 'name';
    @bindable public valueProp: string = 'value';
    @bindable public ratio: number = 0.75;

    private d3;
    private element: HTMLElement;
    private arc: Function;
    private pie: Function;
    private svg;
    private size: number;
    private arcLookup: Object = {};
    private initialized: boolean;

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

        if (this.chartData && !this.initialized) {
            this.initialize(this.chartData, this.color);
        }
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
            this.initialize(data, this.color);
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
            .innerRadius(radius * this.ratio);

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
    private initialize (data, color) {
        this.createElements(this.element, this.size);

        const { svg } = this;

        const arcs = svg.selectAll('path')
            .data(this.pie(data))
            .enter()
            .append('path')
            .attr('d', this.arc)
            .attr('fill', d => color(d.data[this.keyProp]));

        arcs.transition()
            .duration(1000)
            .attrTween('d', this.getArcTween(''))
            .on('end', () => this.saveArcs(arcs));

        this.initialized = true;
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
                const prevArc = this.arcLookup[d.data[this.keyProp]];
                const interpolate = this.d3.interpolateObject(prevArc, d);
                return t => this.arc(interpolate(t));
            })
            .on('end', () => this.saveArcs(enterUpdate));

        // exit
        exit.transition()
            .duration(600)
            .attrTween('d', this.getArcTween('midReverse'))
            .remove();

        // enter
        enter.transition()
            .duration(600)
            .attrTween('d', this.getArcTween('mid'));
    }

    /**
     * saves the arc data to the lookup by id
     * this is used to compute transitions between arc states
     * 
     * @private
     * @param {*} arcs
     * 
     * @memberOf DonutChartComponent
     */
    private saveArcs (arcs: any) {
        arcs.each((arc) => {
            this.arcLookup[arc.data[this.keyProp]] = {
                endAngle: arc.endAngle,
                startAngle: arc.startAngle
            };
        });
    }

    private getArcTween (type: string = 'start') {
        if (type === 'start') {
            return (d) => {
                const startObj = { endAngle: 0, startAngle: 0 };
                const interpolate = this.d3.interpolateObject(startObj, d);
                return t => this.arc(interpolate(t));
            };
        }

        if (type === 'mid') {
            return (d) => {
                const mid = (d.endAngle + d.startAngle) / 2;
                const midObj = { endAngle: mid, startAngle: mid };
                const interpolate = this.d3.interpolateObject(midObj, d);
                return t => this.arc(interpolate(t));
            };
        }

        if (type === 'midReverse') {
            return (d) => {
                const mid = (d.endAngle + d.startAngle) / 2;
                const midObj = { endAngle: mid, startAngle: mid };
                const interpolate = this.d3.interpolateObject(d, midObj);
                return t => this.arc(interpolate(t));
            };
        }
    }
}
