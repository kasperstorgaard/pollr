import { test } from 'tape';
import * as td from 'testdouble/dist/testdouble.js';

import { App } from '../src/app';
import { RouterConfiguration, Router } from 'aurelia-router';
import { Container } from 'aurelia-dependency-injection';
import { History } from 'aurelia-history';

class RouterStub extends Router {}

function setup () {
  const config = td.object(RouterConfiguration);
  const router = new RouterStub(new Container(), new History());

  return { config, router, sut: new App() };
}

function cleanup () {
  td.reset();
}

test('app.configureRouter(): router', (t) => {
  const { sut, router, config } = setup();

  sut.configureRouter(config, router);
  t.ok(sut.router, 'should set the "router" property');

  t.end();
  cleanup();
});

test('app.configureRouter(): config.map', (t) => {
  const { sut, router, config } = setup();

  sut.configureRouter(config, router);

  t.doesNotThrow(() => {
    td.verify(config.map(td.matchers.anything()));
  }, /.+/, 'should call config.map');

  t.end();
  cleanup();
});
