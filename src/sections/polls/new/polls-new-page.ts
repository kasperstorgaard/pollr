import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { PollsStore } from '../../../shared/data/polls/polls-store';
import { colors } from '../../../shared/config/colors';

@inject(PollsStore, EventAggregator, colors)
export class New {
    public options: any[] = [];
    public name: string = '';
    public color: Function;
    public optionName: string;

    private collection: any;
    private ea: EventAggregator;

    constructor (store: PollsStore, ea: EventAggregator, colors) {
        this.collection = store.collection;
        this.ea = ea;
        this.color = colors.standard;
    }

    public addOption (name) {
        this.options = this.options.concat([{
            id: encodeURI(name),
            name,
            value: 1
        }]);
        this.optionName = '';
    }

    public create (name, options) {
        const poll = { name, options };
        this.ea.publish('POLL_ADD', { poll });
    }
};
