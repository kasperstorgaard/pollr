import { inject, bindable, DOM } from 'aurelia-framework';
import * as d3lib from 'd3';

@inject(d3lib, DOM.Element)
export class DonutChartComponent {
    @bindable public chartData: Array<any>;
    @bindable public color: Function;

    private d3;
    private element: HTMLElement;
    private arc: Function;
    private pie: Function;
    private svg;
    private path;
    private size: number;

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
    public chartDataChanged (data: Array<any> = []) {
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
            .value((d: any) => d.count)
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
        this.path = svg.selectAll('path')
            .data(this.pie(data))
            .enter()
            .append('path')
            .attr('d', this.arc)
            .attr('fill', d => color(d.data.id));

        this.path.transition()
            .duration(1000)
            .attrTween('d', (d) => {
                const baseArc = { endAngle: 0, startAngle: 0 };
                const interpolate = this.d3.interpolateObject(baseArc, d);
                return (t) => {
                    return this.arc(interpolate(t));
                };
            });
    }

    private getArcTween (baseArc) {
        return function () {
            const baseArc = { endAngle: 0, startAngle: 0 };
            const interpolate = this.d3.interpolateObject(baseArc, d);
            return (t) => {
                return this.arc(interpolate(t));
            };
        }
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
    private update (svg, data: Array<any>, color: Function) {
        const arcs = svg.selectAll('path')
            .data(this.pie(data));

        const exit = arcs.exit();
        const enter = arcs.enter().append('path');
        const enterUpdate = enter.merge(arcs);

        enterUpdate
            .attr('d', this.arc)
            .attr('fill', d => color(d.data.id));

        exit.transition()
            .duration(600)
            .attrTween('d', (d) => {
                const baseArc = { endAngle: 0, startAngle: 0 };
                const interpolate = this.d3.interpolateObject(baseArc, d);
                return (t) => {
                    return this.arc(interpolate(t));
                };
            })
            .remove();

        enter.transition()
            .duration(600)
            .attrTween('d', (d) => {
                const baseArc = { endAngle: 0, startAngle: 0 };
                const interpolate = this.d3.interpolateObject(baseArc, d);
                return (t) => {
                    return this.arc(interpolate(t));
                };
            });
    }
}
