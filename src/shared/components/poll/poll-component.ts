import { inject, bindable } from 'aurelia-framework';
import { collection } from '../../data/polls';
import { colors } from '../../config/colors';

@inject(collection, colors)
export class PollComponent {
    @bindable public pollId: String;
    public choices: Array<any>; // TODO: change to choices class
    public name: String;
    public color: Function;

    private poll: any;
    private collection: any;
    private subscriber: any;

    constructor (collection, colors) {
        this.collection = collection;
        this.color = colors.standard;
    }

    // - lifecycle callbacks - //
    public bind () {
        this.poll = this.collection.find({ id: this.pollId });
        this.subscriber = this.setupSubscription(this.poll);
    }

    public unbind () {
        if (!this.subscriber) {
            return;
        }
        this.subscriber.unsubscribe();
    }

    // - public methods - //
    public vote (id) {
        const choice = this.choices.find(c => c.id === id);
        choice.count++; // TODO: call method of choice class when done
        this.storeData();
    }

    public reset () {
        this.choices.forEach(c => c.count = 1);
        this.storeData();
    }

    public getBgStyle (id) {
        return `color: ${this.color(id)}`;
    }

    // - private methods - //
    private dataUpdated (poll) {
        if (!poll) {
            return;
        }
        const { choices, name } = poll;
        Object.assign(this, { choices, name });
    }

    private storeData () {
        this.collection.update({
           choices:  this.choices,
           id: this.pollId
        });
    }

    private setupSubscription (poll) {
        return poll.watch().defaultIfEmpty()
            .subscribe(this.dataUpdated.bind(this));
    }
}
