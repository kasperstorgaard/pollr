import { Aurelia } from 'aurelia-framework';
import 'material-design-lite/material';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-mdl-plugin');

  aurelia.start()
    .then(() => aurelia.setRoot('./src/app'));
};
