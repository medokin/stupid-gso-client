import Ember from 'ember';
import ElementControllerMixin from '../../../mixins/element-controller';
import { module, test } from 'qunit';

module('ElementControllerMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var ElementControllerObject = Ember.Object.extend(ElementControllerMixin);
  var subject = ElementControllerObject.create();
  assert.ok(subject);
});
