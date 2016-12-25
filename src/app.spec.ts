import test from 'ava';
import * as td from 'testdouble';

import { App } from '../src/app';
import { EventAggregator } from 'aurelia-event-aggregator';
import { RouterConfiguration, Router } from 'aurelia-router';
import { Container } from 'aurelia-dependency-injection';
import { RootStore } from '../src/shared/data/root-store';
import { History } from 'aurelia-history';

function setup () {
  const RootStoreStub = td.object(RootStore);
  const EventAggregatorStub = td.object(EventAggregator);
  const rootStore = new RootStoreStub(EventAggregatorStub, []);

  const config = td.object(RouterConfiguration);
  const RouterStub = td.object(Router);
  const router = new RouterStub(new Container(), new History());

  return {
    config,
    router,
    sut: new App(<RootStore> rootStore)
  };
}

test('app.configureRouter(): router', (t) => {
  t.plan(1);

  const { sut, router, config } = setup();

  sut.configureRouter(config, router);
  t.truthy(sut.router, 'should set the "router" property');
});

test('app.configureRouter(): title', (t) => {
  const { sut, router, config } = setup();

  const routeConfig = {
    moduleId: './splash',
    name: 'splash',
    nav: true,
    route: ['', 'splash'],
    title: 'Splash'
  };

  sut.configureRouter(config, router);

  try {
    td.verify(config.map([routeConfig]));
    t.pass('should be called with [routeConfig]');
  } catch (e) {
    t.fail(e.message);
  }
});
