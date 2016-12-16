import { inject, bindable } from 'aurelia-framework';
import { colors } from '../../config/colors';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(colors, EventAggregator)
export class PollComponent {
    @bindable public poll: Object;
    public color: Function;

    private ea: EventAggregator;

    constructor (colors, ea: EventAggregator) {
        this.color = colors.standard;
        this.ea = ea;
    }

    // - public methods - //
    public vote (poll, optionId) {
        this.ea.publish('POLL_VOTE', { poll, optionId });
    }

    public reset (poll) {
        this.ea.publish('POLL_RESET', { poll });
    }

    public remove (poll) {
        this.ea.publish('POLL_REMOVE', { poll });
    }

    public getBgStyle (id) {
        return `background: ${this.color(id)}`;
    }
}
