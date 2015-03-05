import Ember from 'ember';
import ElementModel from 'stupid-gso-client/models/element';

export default Ember.Route.extend({
  model: function(){
    return Ember.$.getJSON('http://api.gso.medok.in:80/v1/teachers').then(function(data){
      var result = [];
      data.result.forEach(function(item){
        result.push(ElementModel.create(item));
      });

      return result;
    });
  }
});
