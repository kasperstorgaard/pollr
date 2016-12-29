export class PollsDispatcher {
    public collection: any;

    public dispatch (action: string, opts: any) {
        const { actions } = this;
        const method = actions[action];
        if (!method) {
            return;
        }

        method.call(this, opts);
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

    private add (opts: any) {
        const { poll } = opts;
        this.collection.store(poll);
    }

    private remove (opts: any) {
        const { poll } = opts;
        this.collection.remove(poll.id);
    }

    private vote (opts: any) {
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

    private rename (opts: any) {
        const { poll, name } = opts;

        const newPoll = Object.assign({}, poll, { name });
        this.collection.update(newPoll);
    }

    private reset (opts: any) {
        const { poll } = opts;
        const { options = [] } = poll;

        const newOptions = options.map(o => Object.assign(o, { value: 1 }));
        const newPoll = Object.assign({}, poll, { options: newOptions });

        this.collection.update(newPoll);
    }
}
