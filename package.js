/* eslint-disable */
Package.describe({
  name: 'pushplaybang:shmodal',
  version: '0.0.2',
  summary: 'Modals for Meteor',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('blaze-html-templates');
  api.use('ecmascript');
  api.use('reactive-dict@1.1.6');
  api.use('pushplaybang:common-polyfills@0.0.1');
  api.use('pushplaybang:callback-stack@0.0.1');
  api.addFiles('shmodal.css', 'client');
  api.addFiles('shmodal.html', 'client');
  api.addFiles('helpers.js', 'client');
  api.addFiles('shmodal.js', 'client');
  api.export('Shmodal', 'client');
});
