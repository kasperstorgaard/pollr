import { inject } from 'aurelia-framework';
import { HorizonClient } from '../../shared/horizon-client';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(HorizonClient, EventAggregator)
export class PollsDispatcher {
    public collection: any;
    private ea: EventAggregator;

    constructor (client: HorizonClient, ea: EventAggregator) {
        this.collection = client.getCollection('polls');
        this.ea = ea;
        this.subscribe();
    }

    private subscribe () {
        const { actions } = this;
        const keys = Object.keys(actions);
        keys.forEach(key => this.ea.subscribe(key, actions[key].bind(this)));
    }

    private get actions () {
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
        const idx = options.findIndex(p => p.id === optionId);
        const option = options[idx];

        const newValue = (option.value || 0) + 1;
        const newOption = Object.assign({}, option, { value: newValue });
        const newOptions = [
            ...options.slice(0, idx),
            newOption,
            ...options.slice(idx + 1)
        ];
        const newPoll = Object.assign({}, poll, { options: newOptions });

        this.collection.update(newPoll);
    }

    private rename (opts) {
        const { poll, name } = opts;

        const newPoll = Object.assign({}, poll, { name });
        this.collection.update(newPoll);
    }

    private reset (opts) {
        const { poll } = opts;
        const { options = [] } = poll;

        const newOptions = options.map(o => Object.assign(o, { value: 1 }));
        const newPoll = Object.assign({}, poll, { options: newOptions });

        this.collection.update(newPoll);
    }
}
