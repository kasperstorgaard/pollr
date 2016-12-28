import { inject, bindable, DOM } from 'aurelia-framework';
import * as d3lib from 'd3';

@inject(d3lib, DOM.Element)
export class DonutChartComponent {
    @bindable public chartData: any[];
    @bindable public color: Function;
    @bindable public keyProp: string = 'id';
    @bindable public nameProp: string = 'name';
    @bindable public valueProp: string = 'value';
    @bindable public ratio: number = 0.66;

    private d3;
    private host: HTMLElement;
    private elements: any;
    private size: number;
    private arcLookup: Object = {};
    private initialized: boolean;

    constructor (d3lib, host: HTMLElement) {
        this.d3 = d3lib;
        this.host = host;
    }

    /**
     * lifecycle callback
     * sets up the size based on the host element
     *
     * @memberOf DonutChartComponent
     */
    public attached () {
        const rect = this.host.getBoundingClientRect();
        this.size = Math.floor(rect.width);

        if (this.chartData && !this.initialized) {
            this.elements = this.createElements(this.host, this.size);
            this.initialize(this.elements, this.chartData, this.color);
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

        if (!this.elements) {
            this.elements = this.createElements(this.host, this.size);
            this.initialize(this.elements, data, this.color);
            return;
        }

        this.update(this.elements, data, this.color);
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
    private createElements (host: HTMLElement, size: number) {
        const radius = size / 2;
        const arc = this.d3.arc()
            .outerRadius(radius)
            .innerRadius(radius * this.ratio);

        const pie = this.d3.pie()
            .value((d: any) => d[this.valueProp])
            .sort(null)
            .padAngle(0.05);

        const svg = this.d3.select(host).append('svg')
            .attr('width', size)
            .attr('height', size)
            .append('g')
            .attr('transform', `translate(${radius},${radius})`);

        return { arc, pie, svg };
    }

    private addPaths (paths, arc: Function, color: Function) {
        return paths
            .attr('fill', d => color(d.data[this.keyProp]))
            .transition()
            .duration(600)
            .attrTween('d', this.getArcTween(arc))
            .on('end', () => this.saveArcs(paths));
    }

    private updatePaths (paths, arc: Function, color: Function) {
        paths
            .attr('fill', d => color(d.data[this.keyProp]))
            .transition()
            .duration(600)
            .attrTween('d', (d) => {
                const prevArc = this.arcLookup[d.data[this.keyProp]];
                if (!prevArc) {
                    return this.getArcTween(arc)(d);
                }
                const interpolate = this.d3.interpolateObject(prevArc, d);
                return t => arc(interpolate(t));
            })
            .on('end', () => this.saveArcs(paths));
    }

    private removePaths (paths, arc: Function) {
        paths.transition()
            .delay(300)
            .duration(600)
            .attrTween('d', this.getArcTween(arc))
            .remove();
    }

    private addTexts (texts, arc) {
        return texts
            .text(d => d.data.value)
            .style('fill-opacity', 1e-6)
            .style('text-anchor', 'middle')
            .style('fill', 'white')
            .attr('transform', (d) => `translate(${arc.centroid(d)})`)
            .attr('dy', '0.3em')
            .transition()
            .delay(300)
            .duration(600)
            .style('fill-opacity', 1);
    }

    private updateTexts (texts, arc) {
        texts
            .text(d => d.data.value)
            .style('text-anchor', 'middle')
            .style('fill', 'white')
            .transition()
            .duration(600)
            .attrTween('transform', (d) => {
                const prevArc = this.arcLookup[d.data[this.keyProp]];
                if (!prevArc) {
                    return this.getArcTween(arc)(d);
                }
                const interpolate = this.d3.interpolateObject(prevArc, d);
                return (t) => {
                    const angle = interpolate(t);
                    return `translate(${arc.centroid(angle)})`;
                };
            });
    }

    private removeTexts (texts, arc) {
        texts.transition()
            .duration(600)
            .style('fill-opacity', 1e-6)
            .remove();
    }

    /**
     * sets up the chart, including enter animations
     *
     * @private
     * @param {any} elements
     * @param {any} data
     * @param {any} color
     *
     * @memberOf DonutChartComponent
     */
    private initialize (elements, data, color) {
        const { svg, pie, arc } = elements;

        const g = svg.selectAll('.arc')
            .data(pie(data))
            .enter()
            .append('g')
            .attr('class', 'arc');

        this.addPaths(g.append('path'), arc, color);
        this.addTexts(g.append('text'), arc);

        this.initialized = true;
    }

    /**
     * redraws the chart
     *
     * @private
     * @param {any} elements
     * @param {any} data
     * @param {any} color
     *
     * @memberOf DonutChartComponent
     */
    private update (elements, data: any[], color: Function) {
        const { svg, pie, arc } = elements;

        const existing = svg.selectAll('.arc')
            .data(pie(data));

        const enter = existing.enter()
            .append('g')
            .attr('class', 'arc');

        const exit = existing.exit();

        if (enter.size()) {
            this.addPaths(enter.append('path'), arc, color);
            this.addTexts(enter.append('text'), arc);
        }

        if (existing.size()) {
            this.updatePaths(existing.select('path'), arc, color);
            this.updateTexts(existing.select('text'), arc);
        }

        if (exit.size()) {
            exit.transition()
                .duration(600)
                .remove();

            this.removePaths(exit.select('path'), arc);
            this.removeTexts(exit.select('text'), arc);
        }
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

    private getArcTween (arc) {
        return (d) => {
            const startObj = { endAngle: 0, startAngle: 0 };
            const interpolate = this.d3.interpolateObject(startObj, d);
            return t => arc(interpolate(t));
        };
    }
}
