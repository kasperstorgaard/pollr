import { inject } from 'aurelia-framework';
import { PollsStore } from './polls-store';

@inject(PollsStore)
export class Overview {
    public polls: any[];

    constructor (store: PollsStore) {
        this.polls = store.state;
    }
};
