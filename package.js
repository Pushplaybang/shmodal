/* eslint-disable */
Package.describe({
  name: 'pushplaybang:shmodal',
  version: '0.0.1',
  summary: 'Modals for Meteor',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('blaze-html-templates');
  api.use('standard-minifier-css');
  api.use('standard-minifier-js');
  api.use('es5-shim');
  api.use('ecmascript');
  api.use('reactive-dict');
  api.use('pushplaybang:common-polyfills');
  api.use('pushplaybang:callback-stack');
  api.addFiles('shmodal.css', 'client');
  api.addFiles('shmodal.html', 'client');
  api.addFiles('helpers.js', 'client');
  api.addFiles('shmodal.js', 'client');
  api.export('Shmodal', 'client');
});
