import { inject, bindable } from 'aurelia-framework';
import { colors } from '../../config/colors';
import { PollsStore } from '../../../data/polls/polls-store';

@inject(PollsStore, colors)
export class PollComponent {
    @bindable public poll: Object;
    public color: Function;
    private store: PollsStore;

    constructor (store: PollsStore, colors) {
        this.store = store;
        this.color = colors.standard;
    }

    // - public methods - //
    public vote (poll, optionId) {
        this.store.dispatch('POLL_VOTE', { poll, optionId });
    }

    public reset (poll) {
        this.store.dispatch('POLL_RESET', { poll });
    }

    public remove (poll) {
        this.store.dispatch('POLL_REMOVE', { poll });
    }

    public getBgStyle (id) {
        return `background: ${this.color(id)}`;
    }
}
