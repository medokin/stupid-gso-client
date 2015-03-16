import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['week', 'year'],
  week: null,
  year: null,
  exists: false,

  actions: {
    previousWeek: function(){
      var week = this.get('currentWeek');

      this.set('week', parseInt(this.get('currentWeek')) - 1)
    },

    nextWeek: function(){
      var week = this.get('currentWeek');

      this.set('week', parseInt(this.get('currentWeek')) + 1)

    }
  },

  currentWeek: function(){
    if(this.get('week')){
      return this.get('week');
    }else {
      return moment().week();
    }
  }.property('week'),

  getHash: function(lesson){
    return md5(
      lesson.startTime.hour.toString() +
      lesson.startTime.minutes.toString() +
      lesson.endTime.hour.toString() +
      lesson.endTime.minutes.toString()
    )
  },

  filteredList: function(){
    var self = this;
    var items = [],
    grid  = this.get('model.grid'),
    timetable = this.get('model.timetable');


    this.set('exists', false);

    for (var iday = 0; iday < grid.length; iday++){
      for(var ilesson = 0; ilesson < grid[iday].lessons.length; ilesson++){
        var lesson = grid[iday].lessons[ilesson];
        if(!lesson) break;
        var hash = md5(this.getHash(lesson));
        lesson['isHour'] = true;
        items[ilesson] = [];
        items[ilesson][0] = lesson;
        for (var itest = 1; itest < 6; itest++){
          items[ilesson][itest] = {};
        }
      }
    }

    for (ilesson = 0; ilesson < timetable.length; ilesson++){
      var lesson = timetable[ilesson];
      //console.log(lesson);
      var weekday = moment(lesson.date).weekday();
      for(var iitem = 0; iitem < items.length; iitem++){
        if(items[iitem][0].startTime.hour == lesson.startTime.hour && items[iitem][0].startTime.minutes == lesson.startTime.minutes){
          self.set('exists', true);
          items[iitem][weekday] = lesson;
        }
      }
    }

    return items;

  }.property('model')
});
