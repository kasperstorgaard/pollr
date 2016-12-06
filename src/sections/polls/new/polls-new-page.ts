import { inject } from 'aurelia-framework';
import { collection } from '../../../shared/data/polls';
import { colors } from '../../../shared/config/colors';

@inject(collection, colors)
export class New {
    public data: any[] = [];
    public name: string = '';
    public color: Function;
    public optionName: string;

    private collection: any;

    constructor (collection, colors) {
        this.collection = collection;
        this.color = colors.standard;
    }

    public addOption (name) {
        this.data = this.data.concat([{
            id: encodeURI(name),
            name,
            value: 1
        }]);
        this.optionName = '';
    }

    public create (name, data) {
        this.collection.store({ name, data });
    }
};
