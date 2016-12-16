import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { colors } from '../../../shared/config/colors';

@inject(EventAggregator, colors)
export class New {
    public poll: any;
    public color: Function;
    public newOption: string;

    private ea: EventAggregator;

    constructor (ea: EventAggregator, colors) {
        this.ea = ea;
        this.color = colors.standard;

        this.poll = {
            name: 'name',
            options: []
        };
    }

    public addOption (name = '') {
        const { poll } = this;

        const option = {
            id: Date.now(),
            name,
            value: 1
        };
        poll.options = poll.options.concat([option]);

        this.newOption = '';
    }

    public create (poll) {
        const { name, options } = poll;
        const slim = { name, options };
        this.ea.publish('POLL_ADD', { poll: slim });
    }
};
