import { inject, bindable, DOM } from 'aurelia-framework';
import * as d3 from 'd3';

@inject(d3, DOM.Element)
export class DonutChartComponent {
    @bindable public chartData: Array<any>;

    private d3;
    private element;
    private arc;
    private pie;
    private svg;
    private config;
    private path;

    constructor (d3, element) {
        this.d3 = d3;
        this.element = element;
    }

    public chartDataChanged (data = []) {
        if (!data.length) {
            return;
        }

        if (!this.svg) {
            this.config = this.getConfig(this.element);
            this.createElements(this.element, this.config);
            this.draw(this.svg, data, this.config);
            return;
        }

        this.reset(this.svg, data);
        this.draw(this.svg, data, this.config);
    }


    private getConfig (element) {
        const width = 300;
        const height = 200;
        const radius = Math.min(width, height) / 2;
        const color = d3.scaleOrdinal(d3.schemeCategory20);
        const transition = this.d3.transition()
            .duration(750)
            .ease(d3.easeElasticIn);

        return { width, height, radius, color, transition };
    }

    private createElements (element: any, config: any) {
        const { radius, width, height } = config;
        this.arc = this.d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(radius - 70);

        this.pie = this.d3.pie()
            .value((d: any) => d.count)
            .sort(null)
            .padAngle(0.05);

        this.svg = this.d3.select(element).append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform',
                `translate(${width / 2},${height / 2})`);
    }

    private draw (svg, data, config) {
        const { color } = config;

        this.path = svg.datum(data).selectAll('path')
            .data(this.pie)
            .enter()
            .append('path')
            .attr('d', this.arc)
            .attr('fill', d => color(d.data.id));

    }

    private reset (svg, data) {
        this.path.data(data)
            .exit().remove();
    }
}
