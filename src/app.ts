import { inject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { RootStore } from './shared/data/root-store';

@inject(RootStore)
export class App {
  public heading = 'pollr';
  public router: Router;
  public rootStore: RootStore;

  constructor (rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'pollr';

    const pollsPage = {
      moduleId: './sections/polls/polls-page',
      name: 'polls',
      nav: true,
      route: 'polls',
      settings: { icon: 'insert_chart' },
      title: 'Polls'
    };

    const userPage = {
      moduleId: './sections/user/user-page',
      name: 'user',
      nav: false,
      route: 'user',
      title: 'user'
    };

    config.map([
      pollsPage,
      userPage
    ]);

    this.router = router;
  }
};
