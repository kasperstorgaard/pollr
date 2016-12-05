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
    private path;
    private size;
    private color: Function;

    constructor (d3, element) {
        this.d3 = d3;
        this.element = element;
        this.color = d3.scaleOrdinal(d3.schemeCategory20);
    }

    // - lifecycle events - //
    public attached () {
        const rect = this.element.getBoundingClientRect();
        this.size = Math.floor(rect.width);
    }

    // - change observers - //
    public chartDataChanged (data = []) {
        if (!data.length) {
            return;
        }
        this.update(data);
    }

    // - private methods - //
    private update (data) {
        if (!this.size) {
            return;
        }

        if (!this.svg) {
            this.createElements(this.element, this.size);
            this.draw(this.svg, data, this.color);
            return;
        }

        this.reset(this.svg, data);
        this.draw(this.svg, data, this.color);
    }

    private createElements (element: any, size: any) {
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

    private draw (svg, data, color) {
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
