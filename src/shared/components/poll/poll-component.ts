import { inject, bindable } from 'aurelia-framework';
import { collection } from '../../data/polls';
import { colors } from '../../config/colors';

@inject(collection, colors)
export class PollComponent {
    @bindable public pollId: String;
    public data: any[];
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
    public vote (pollId, id, data) {
        const option = data.find(c => c.id === id);
        option.value++;
        this.storeData(pollId, data);
    }

    public reset (id, data) {
        data.forEach(c => c.value = 1);
        this.storeData(id, data);
    }

    public remove (id) {
        this.collection.remove(id);
    }

    public getBgStyle (id) {
        return `color: ${this.color(id)}`;
    }

    // - private methods - //
    private dataUpdated (poll) {
        if (!poll) {
            return;
        }
        const { name, data } = poll;
        Object.assign(this, { name, data });
    }

    private storeData (id, data) {
        this.collection.update({ id,  data });
    }

    private setupSubscription (poll) {
        return poll.watch().defaultIfEmpty()
            .subscribe(this.dataUpdated.bind(this));
    }
}
