import { Router, RouterConfiguration } from 'aurelia-router';

export class Polls {
    public router: Router;

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
            nav: true,
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
