import { inject } from 'aurelia-framework';
import { HorizonClient } from '../horizon-client';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(HorizonClient)
export class PollsStore {
    public collection: any;

    constructor (client: HorizonClient) {
        this.collection = client.getCollection('polls');
    }

    public subscribe (ea: EventAggregator) {
        const { actions } = this;
        const keys = Object.keys(actions);
        keys.forEach(key => ea.subscribe(key, actions[key].bind(this)));
    }

    get actions() {
        return {
            POLL_ADD: this.add,
            POLL_REMOVE: this.remove,
            POLL_RENAME: this.rename,
            POLL_RESET: this.reset,
            POLL_VOTE: this.vote,
        };
    }

    private add (opts) {
        const { poll } = opts;
        this.collection.store(poll);
    }

    private remove (opts) {
        const { poll } = opts;
        this.collection.remove(poll.id);
    }

    private vote (opts) {
        const { poll, optionId } = opts;
        const { options = [] } = poll;
        const option = options.find(p => p.id === optionId);
        option.value = (option.value || 0) + 1;

        this.collection.update(poll);
    }

    private rename (opts) {
        const { poll, name } = opts;
        poll.name = name;

        this.collection.update(poll);
    }

    private reset (opts) {
        const { poll } = opts;
        const { options = [] } = poll;
        options.forEach(o => o.value = 1);

        this.collection.update(poll);
    }
}
