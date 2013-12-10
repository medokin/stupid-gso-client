export default Ember.ArrayController.extend({
    type: '',
    element: '',
    weeks: null,
    currentWeek: null,
    isStarred: false,
    
    elementObserver: function(){
        var hash = this.get('type')+this.get('element');
        var star = store.get(hash);
        if (star!== null) {
            this.set('isStarred', true);
        }
        
    }.observes('element'),
    
    actions: {
        toggleStar: function(){
            var hash = this.get('type')+this.get('element');
            
            if(this.get('isStarred')){
                store.remove(hash);
                
            }else{
                console.log('add')
                store.set(hash, {
                   element: this.get('element'),
                   type: this.get('type')
                });
            }
            
            this.toggleProperty('isStarred');
        }        
    },
        
    filteredList: function(){
        var content = this.get('content');
        var items = [];

        // Array für die Stunden und Tage aufbauen
        for (var i = 0; i <= 14; i++){
            items[i] = [];
            for (var j = 0; j <=5; j++){
                if(j == 0){
                    items[i][j] = Ember.Object.create({
                        content: i+1,
                        isHour: true
                    })
                }else{
                    items[i][j] = null;
                }


            }
        }

        // Content den Stunden/Tagen zuordnen
        for (var i = 0; i<= content.length; i++){

            var item = content[i];

            if(item != undefined){
                items[item.hour-1][item.day] = item;
            }

        }
        return items;
    }.property('content')
});