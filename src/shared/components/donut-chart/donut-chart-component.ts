import { inject, bindable, DOM } from 'aurelia-framework';
import * as d3 from 'd3';

@inject(d3, DOM.Element)
export class DonutChartComponent {
    @bindable public chartData: Array<any>;
    @bindable public color: Function;

    private d3;
    private element;
    private arc;
    private pie;
    private svg;
    private path;
    private size;

    constructor (d3, element) {
        this.d3 = d3;
        this.element = element;
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
            this.setup(this.svg, data, this.color);
            return;
        }

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

    private setup (svg, data, color) {
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
                const interpolate = d3.interpolateObject(baseArc, d);
                return (t) => {
                    return this.arc(interpolate(t));
                };
            });
    }

    private draw (svg, data, color) {
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
                const interpolate = d3.interpolateObject(baseArc, d);
                return (t) => {
                    return this.arc(interpolate(t));
                };
            })
            .remove();

        enter.transition()
            .duration(600)
            .attrTween('d', (d) => {
                const baseArc = { endAngle: 0, startAngle: 0 };
                const interpolate = d3.interpolateObject(baseArc, d);
                return (t) => {
                    return this.arc(interpolate(t));
                };
            });
    }
}
