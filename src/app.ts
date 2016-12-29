import './data/root-store';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  public heading = 'pollr';
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'pollr';

    const pollsOverviewPage = {
      moduleId: './sections/polls/polls-page',
      name: 'polls',
      nav: true,
      route: ['', 'polls'],
      settings: { icon: 'pie_chart' },
      title: 'polls'
    };

    const pollsNewPage = {
      moduleId: './sections/polls/detail/polls-detail',
      name: 'new',
      nav: true,
      route: 'polls/new',
      settings: { icon: 'create' },
      title: 'new'
    };

    const pollsDetailPage = {
      moduleId: './sections/polls/detail/polls-detail',
      name: 'detail',
      nav: false,
      route: 'polls/:id',
      title: 'poll'
    };

    const userPage = {
      moduleId: './sections/user/user-page',
      name: 'user',
      nav: false,
      route: 'user',
      title: 'user'
    };

    config.map([
      pollsOverviewPage,
      pollsNewPage,
      pollsDetailPage,
      userPage
    ]);

    this.router = router;
  }
};
