import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { PollsStore } from '../../../shared/data/polls/polls-store';

@inject(PollsStore, EventAggregator)
export class Overview {
    public polls: any[] = []; // TODO: change to Array<Poll>
    private subscribers: any[];
    private ea: EventAggregator;

    constructor (store: PollsStore, ea: EventAggregator) {
        const changesStream = this.getChangeStream(store.collection);
        this.ea = ea;
        this.subscribers = this.subscribe(changesStream);
    }

    public unbind () {
        this.subscribers.forEach(s => s.unsubscribe());
    }

    private addPoll (poll) {
        this.polls.push(poll);
    }

    private removePoll (poll) {
        const idx = this.polls.findIndex(p => p.id === poll.id);
        if (!idx) {
            return;
        }
        this.polls.splice(idx, 1);
    }

    private updatePoll (poll) {
        const existing = this.polls.find(p => p.id === poll.id);
        if (!existing) {
            return;
        }
        Object.assign(existing, poll);
    }

    private subscribe (changesStream) {
        const added = changesStream
            .defaultIfEmpty()
            .filter(c => !c.old_val && c.new_val)
            .map(c => c.new_val);

        const removed = changesStream
            .defaultIfEmpty()
            .filter(c => c.old_val && !c.new_val)
            .map(c => c.old_val);

        const updated = changesStream
            .defaultIfEmpty()
            .filter(c => c.old_val && c.new_val)
            .map(c => c.new_val);

        return [
            added.subscribe(this.addPoll.bind(this)),
            removed.subscribe(this.removePoll.bind(this)),
            updated.subscribe(this.updatePoll.bind(this))
        ];
    }

    private getChangeStream (collection) {
        return collection.watch({ rawChanges: true });
    }
};
