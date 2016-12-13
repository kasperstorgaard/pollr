import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { PollsStore } from './polls/polls-store';

@inject(EventAggregator, PollsStore)
export class RootStore {
    private ea: EventAggregator;

    constructor (ea: EventAggregator, ...stores) {
        this.ea = ea;
        stores.forEach(store => store.subscribe(this.ea));
    }
}
