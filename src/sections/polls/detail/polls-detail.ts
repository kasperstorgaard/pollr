import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { colors } from '../../../shared/config/colors';

@inject(EventAggregator, colors.standard)
export class New {
    public color: Function;
    public name: string = 'name';
    public options: any[] = [];

    private ea: EventAggregator;

    constructor (ea: EventAggregator, color) {
        this.ea = ea;
        this.color = color;

        this.addOption();
    }

    public addOption () {
        const name = `option ${this.options.length + 1}`;
        const option = {
            id: Date.now(),
            name,
            value: 1
        };
        this.options = this.options.concat([option]);
    }

    public removeOption (id) {
        this.options = this.options.filter(o => o.id !== id);
    }

    public create (name, options) {
        const poll = { name, options: this.slimOptions(options) };
        this.ea.publish('POLL_ADD', { poll });
    }

    public get preview () {
        const { name, options } = this;
        return { name, options };
    }

    private slimOptions (options) {
        return options.map(o => ({ id: o.id, name: o.name, value: o.value }));
    }
};
