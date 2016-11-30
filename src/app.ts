import { Router, RouterConfiguration } from 'aurelia-router';
import './horizon';

export class App {
  public heading = 'pollr';
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'pollr';

    const landingPage = {
      moduleId: './sections/landing/landing-page',
      name: 'landing',
      nav: true,
      route: ['', 'landing'],
      title: 'landing'
    };

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
      landingPage,
      userPage,
      pollsPage
    ]);

    this.router = router;
  }
};
