import {inject} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

@inject(Router)
export class App {
  public heading = 'pollr';
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'pollr';

    const landing = {
      moduleId: './landing/landing',
      name: 'landing',
      nav: true,
      route: ['', 'landing'],
      title: 'landing'
    };

    const user = {
      moduleId: './user/user',
      name: 'user',
      nav: true,
      route: 'user',
      title: 'user'
    };

    config.map([landing, user]);

    this.router = router;
  }
};
