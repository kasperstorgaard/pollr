import { inject } from 'aurelia-framework';
import { PollsStore } from './polls/polls-store';

@inject(PollsStore)
export class RootStore {
    public polls: PollsStore;

    constructor (pollsStore: PollsStore) {
        this.polls = pollsStore;
    }
}
