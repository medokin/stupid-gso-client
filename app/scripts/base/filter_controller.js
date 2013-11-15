StupidGsoClient.FilterController = Ember.ArrayController.extend({
    filterString: '',
    filteredList: function(){
        var search = this.get('filterString').toLowerCase();
        var result =  this.get('content').filter(function(item){
            var result = item.name.toLowerCase().indexOf(search) !== -1;

            return result;
        });
        return result;
    }.property('content', 'filterString', 'content@each')
});
