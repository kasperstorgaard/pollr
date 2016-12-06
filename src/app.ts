import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  public heading = 'pollr';
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'pollr';

    const userPage = {
      moduleId: './sections/user/user-page',
      name: 'user',
      nav: true,
      route: 'user',
      title: 'user'
    };

    const pollsPage = {
      moduleId: './sections/polls/polls-page',
      name: 'polls',
      nav: true,
      route: 'polls',
      title: 'polls'
    };

    config.map([
      userPage,
      pollsPage
    ]);

    this.router = router;
  }
};
