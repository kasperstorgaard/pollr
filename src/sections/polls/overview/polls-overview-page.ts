import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { PollsStore } from '../../../shared/data/polls/polls-store';

@inject(PollsStore, EventAggregator)
export class Overview {
    public polls: any[] = []; // TODO: change to Array<Poll>
    private subscriber: any;
    private ea: EventAggregator;

    constructor (store: PollsStore, ea: EventAggregator) {
        this.subscriber = this.subscribe(store.collection);
        this.ea = ea;
    }

    public unbind () {
        this.subscriber.unsubscribe();
    }

    private update (polls) {
        this.polls = polls;
    }

    private subscribe (collection) {
        return collection.watch()
            .subscribe(this.update.bind(this));
    }
};
