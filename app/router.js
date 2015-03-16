import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('classes');
  this.route('timetable', {path: '/:type/:id' });
  this.route('teachers');
  this.route('rooms');
  this.route('imprint');
  this.route('colors');
});

export default Router;
