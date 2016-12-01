import { inject, bindable } from 'aurelia-framework';
import { collection } from '../../data/polls';

@inject(collection)
export class PollComponent {
    @bindable public pollId: String;
    public choices: Array<any>; // TODO: change to choices class

    private poll: any;
    private collection: any;
    private unsubscribe: Function;

    constructor (collection) {
        this.collection = collection;
    }

    // - lifecycle callbacks - //
    public bind () {
        this.poll = this.collection.find({ id: this.pollId });
        this.unsubscribe = this.setupSubscription(this.poll);
    }

    public unbind () {
        if (!this.unsubscribe) {
            return;
        }
        this.unsubscribe();
    }

    // - public methods - //
    public vote (id) {
        const choice = this.choices.find(c => c.id === id);
        choice.count++; // TODO: call method of choice class when done

        this.collection.update({
            choices: this.choices,
            id: this.pollId
        });
    }

    // - private methods - //
    private updateData (poll) {
        if (!poll) {
            return;
        }
        this.choices = poll.choices;
    }

    private setupSubscription (poll) {
        return poll.watch().defaultIfEmpty()
            .subscribe(this.updateData.bind(this));
    }
}
