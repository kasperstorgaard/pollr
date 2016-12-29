export class PollOption {
    public id: string;
    public name: string;
    public value: number;

    constructor (name = '', value = 1) {
        this.id = Date.now() + '';
        this.name = name;
        this.value = value;
    }
}

export class Poll {
    public id: string;
    public name: string;
    public options: PollOption[];

    constructor (id = Date.now() + '', name = '', options: PollOption[] = []) {
        this.id = id;
        this.name = name;
        this.options = options.map((o) => {
            const option = new PollOption(o.name, o.value);
            option.id = o.id;
            return option;
        });
    }
}
