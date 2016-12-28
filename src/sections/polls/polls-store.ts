import './polls-dispatcher';

import { inject } from 'aurelia-framework';
import { HorizonClient } from '../../shared/horizon-client';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(HorizonClient, EventAggregator)
export class PollsStore {
    public state: any[] = []; // TODO: change to Array<Poll>
    private ea: EventAggregator;
    private subscribers: any[];

    constructor (client: HorizonClient, ea: EventAggregator) {
        this.ea = ea;
        this.subscribe(client);
    }

    private subscribe (client) {
        const collection = client.getCollection('polls');
        const stream = collection.watch({ rawChanges: true });
        this.subscribers = this.subscribeToStream(stream);
    }

    private onAdded (poll) {
        this.state.push(poll);
    }

    private onRemoved (poll) {
        const idx = this.state.findIndex(p => p.id === poll.id);
        if (!idx) {
            return;
        }
        this.state.splice(idx, 1);
    }

    private onUpdated (poll) {
        const existing = this.state.find(p => p.id === poll.id);
        if (!existing) {
            return;
        }
        Object.assign(existing, poll);
    }

    private subscribeToStream (changesStream) {
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
            added.subscribe(this.onAdded.bind(this)),
            removed.subscribe(this.onRemoved.bind(this)),
            updated.subscribe(this.onUpdated.bind(this))
        ];
    }
}
