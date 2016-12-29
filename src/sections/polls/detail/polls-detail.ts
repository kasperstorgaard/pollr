import { inject } from 'aurelia-framework';
import { colors } from '../../../shared/config/colors';
import { PollsStore } from '../../../data/polls/polls-store';
import { PollOption } from '../../../data/polls/polls-model';

@inject(PollsStore, colors)
export class New {
    public color: Function;
    public name: string = 'name';
    public options: PollOption[] = [];
    private store: PollsStore;

    constructor (store: PollsStore, colors) {
        this.store = store;
        this.color = colors.standard;

        this.addOption();
    }

    public addOption () {
        const name = `option ${this.options.length + 1}`;
        const option = new PollOption(name);
        this.options = this.options.concat([option]);
    }

    public removeOption (id) {
        this.options = this.options.filter(o => o.id !== id);
    }

    public create (name, options) {
        const poll = { name, options };

        this.store.dispatch('POLL_ADD', { poll });
    }

    public get preview () {
        const { name, options } = this;
        return { name, options };
    }
};
