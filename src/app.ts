import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  public heading = 'pollr';
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'pollr';

    const pollsPage = {
      icon: 'insert chart',
      moduleId: './sections/polls/polls-page',
      name: 'polls',
      nav: true,
      route: 'polls',
      title: 'polls'
    };

    const userPage = {
      icon: '',
      moduleId: './sections/user/user-page',
      name: 'user',
      nav: true,
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
