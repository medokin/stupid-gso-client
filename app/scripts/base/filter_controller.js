StupidGsoClient.FilterController = Ember.ArrayController.extend({
    filterString: '',
    filteredList: function(){
        var search = this.get('filterString').toLowerCase();
        return this.get('content').filter(function(item){
            return item.name.toLowerCase().indexOf(search) !== -1;
        });
    }.property('content', 'filterString', 'content@each')
});
