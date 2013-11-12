StupidGsoClient.ElementController = StupidGsoClient.TimetableController.extend({
    needs: ['types'],
    type: '',
    element: '',
    weeks: null,
    elementObserver: function(){
        if(this.get('weeks') != null){
            return;
        }
        
        var that = this;
        var promise = Ember.$.getJSON('http://api.gso.medok.in/weeks-available.json').then(function(data){
           that.set('weeks', data);
        })
    }.observes('element', 'type')
});
