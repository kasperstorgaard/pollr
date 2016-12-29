import { PollsDispatcher } from './polls-dispatcher';
import { Poll } from './polls-model';

import { inject } from 'aurelia-framework';
import { HorizonClient } from '../../shared/horizon-client';

@inject(HorizonClient)
export class PollsStore extends PollsDispatcher {
    public state: Poll[] = [];
    private subscribers: any[];

    constructor (client: HorizonClient) {
        super();

        this.collection = client.getCollection('polls');
        this.subscribe(this.collection);
    }

    private subscribe (collection) {
        const stream = collection.watch({ rawChanges: true });
        this.subscribers = this.subscribeToStream(stream);
    }

    private onAdded (data) {
        const { id, name, options } = data;
        this.state.push(new Poll(id, name, options));
    }

    private onRemoved (poll: Poll) {
        const idx = this.state.findIndex(p => p.id === poll.id);
        if (!idx) {
            return;
        }
        this.state.splice(idx, 1);
    }

    private onUpdated (poll: Poll) {
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
