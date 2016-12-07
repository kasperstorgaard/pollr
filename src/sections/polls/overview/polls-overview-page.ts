import { inject } from 'aurelia-framework';
import { collection } from '../../../shared/data/polls';

@inject(collection)
export class Overview {
    public polls: any[] = []; // TODO: change to Array<Poll>

    private subscribers: any[] = [];

    constructor (collection) {
        const changeFeed = collection.watch({ rawChanges: true });
        this.subscribers = this.subscribe(changeFeed);
    }

    public unbind () {
        if (!this.subscribers.length) {
            return;
        }
        this.subscribers.forEach(sub => sub.unsubscribe());
    }

    private subscribe (changeFeed) {
        const added = changeFeed
            .filter(cursor => !cursor.old_val && cursor.new_val)
            .map(cursor => cursor.new_val);

        const removed = changeFeed
            .filter(cursor => !cursor.new_val && cursor.old_val)
            .map(cursor => cursor.old_val);

        return [
            added.subscribe(poll => this.addPoll(poll)),
            removed.subscribe(poll => this.removePoll(poll))
        ];
    }

    private addPoll (poll) {
        this.polls.push(poll);
    }

    private removePoll (poll) {
        const idx = this.polls.findIndex(p => p.id === poll.id);
        if (idx === -1) {
            return;
        }
        this.polls.splice(idx, 1);
    }
};
