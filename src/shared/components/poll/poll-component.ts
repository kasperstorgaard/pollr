import { inject, bindable } from 'aurelia-framework';
import { collection } from '../../data/polls';

@inject(collection)
export class PollComponent {
    @bindable public pollId: String;
    public choices: Array<any>; // TODO: change to choices class
    private poll: any;
    private collection: any;

    constructor (collection) {
        this.collection = collection;
    }

    public bind () {
        this.poll = collection.find({ id: this.pollId });
        this.setupSubscription(this.poll);
    }

    // - public methods - //
    public vote (choiceId) {
        const choice = this.choices[choiceId];
        choice.votes++; // TODO: call method of choice class when done

        this.poll.update({
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
        poll.fetch().defaultIfEmpty()
            .subscribe(this.updateData.bind(this));
    }
}
