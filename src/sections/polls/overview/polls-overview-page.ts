import { inject } from 'aurelia-framework';
import { collection } from '../../../shared/data/polls';

@inject(collection)
export class Overview {
    public polls: Array<any>; // TODO: change to Array<Poll>

    constructor (collection) {
        this.setupSubscription(collection);
    }

    private updateData (polls) {
        if (!polls) {
            this.polls = [];
            return;
        }
        this.polls = polls;
    }

    private setupSubscription (collection) {
        collection.fetch().defaultIfEmpty()
            .subscribe(this.updateData.bind(this));
    }
};
