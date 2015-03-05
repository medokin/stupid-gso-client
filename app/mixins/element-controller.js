import Ember from 'ember';

export default Ember.Mixin.create({
  filterString: '',

  filterObserver: function(){
    Ember.run.debounce(this, 'filter', 150);
  }.observes('model', 'filterString'),

  filter: function(){
    var search = this.get('filterString').toLowerCase();

    this.get('model').forEach(function(item){
        var match = item.name.toLowerCase().indexOf(search) !== -1;
        if(match){
            item.set('visible', true);
            return;
        }

        match = item.longName.toLowerCase().indexOf(search) !== -1;
        if(match){
            item.set('visible', true);
            return;
        }
        item.set('visible', false);

    });
  }
});
