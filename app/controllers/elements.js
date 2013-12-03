export default Ember.ArrayController.extend({
    type: null,

    actions: {
        star: function() {
            this.controller.set('isExpanded', true);
        }
    },
        
    filterString: '',
        
    filterObserver: function(){
        console.log();
        var search = this.get('filterString').toLowerCase();
        
        this.get('content').forEach(function(item){
            var match = item.name.toLowerCase().indexOf(search) !== -1;
            if(match){
                item.set('visible', true);
                return;
            }
            item.set('visible', false);
            
        });

    }.observes('content', 'filterString')
});
