import { inject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { PollsStore } from './polls-store';

@inject(PollsStore)
export class Polls {
    public router: Router;
    public store: PollsStore;

    constructor (store: PollsStore) {
        this.store = store;
    }

    public configureRouter (config: RouterConfiguration, router: Router) {
        config.title = 'polls';

        const overviewPage = {
            moduleId: './overview/polls-overview-page',
            name: 'overview',
            nav: true,
            route: ['', 'overview'],
            title: 'overview'
        };

        const newPage = {
            moduleId: './new/polls-new-page',
            name: 'new',
            nav: false,
            route: 'new',
            title: 'new'
        };

        config.map([
            overviewPage,
            newPage
        ]);

        this.router = router;
    }
};
