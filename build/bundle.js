var bundler = require('aurelia-bundler');

const bundles = {
    'dist/app-build': {
        includes: [
            '[src/*.js]',
            'src/**/*.html!text',
            'src/**/*.css!text',
            'index.html!text',
            'material-design-lite/material.min.css!text',
            '@horizon/client'
        ],
        options: {
            inject: true,
            minify: true,
            depCache: true,
            rev: true
        }
    },
    'dist/aurelia': {
        includes: [
            'aurelia-binding',
            'aurelia-bootstrapper',
            'aurelia-dependency-injection',
            'aurelia-event-aggregator',
            'aurelia-framework',
            'aurelia-history',
            'aurelia-history-browser',
            'aurelia-loader',
            'aurelia-loader-default',
            'aurelia-logging',
            'aurelia-logging-console',
            'aurelia-metadata',
            'aurelia-pal',
            'aurelia-pal-browser',
            'aurelia-path',
            'aurelia-polyfills',
            'aurelia-route-recognizer',
            'aurelia-router',
            'aurelia-task-queue',
            'aurelia-templating',
            'aurelia-templating-binding',
            'aurelia-templating-resources',
            'aurelia-templating-router'
        ],
        options: {
            inject: true,
            minify: true,
            depCache: true,
            rev: true
        }
    }
};

var config = {
    force: true,
    baseUrl: '.',
    configPath: './jspm.config.js',
    bundles: bundles
};

bundler.bundle(config);