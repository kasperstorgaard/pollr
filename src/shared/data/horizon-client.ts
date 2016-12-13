import Horizon from '@horizon/client';

const opts = { host: 'localhost:8181', secure: false };
const client = new Horizon(opts);

export class HorizonClient {
    public instance: any;

    public getCollection (key) {
        return client(key);
    }
}
