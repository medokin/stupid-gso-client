import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    week: {
      refreshModel: true
    },
    year: {
      refreshModel: true
    }
  },

  types: {
    class: 1,
    teacher: 2,
    subject: 3,
    room: 4,
    student: 5
  },

  model: function(params){
    var controller = this.controllerFor('timetable');
    if(!params.week){
      params.week = moment().week();
    }

    if(!params.year){
      params.year = moment().year();
    }

    var type = this.get('types');
    return Ember.RSVP.hash({
      timetable: Ember.$.getJSON('http://api.gso.medok.in/v2/timetable/'+params.id+'/'+type[params.type]+'/'+params.year+'/'+params.week),
      grid: Ember.$.getJSON('http://api.gso.medok.in:80/v1/timegrid')
    }).then(function(data){
      return {
        timetable: data.timetable.result,
        grid: data.grid.result
      }
    });
  }
});
