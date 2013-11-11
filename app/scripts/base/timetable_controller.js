StupidGsoClient.TimetableController = Ember.ArrayController.extend({
    filteredList: function(){
        var content = this.get('content');
        var items = [];

        // Array für die Stunden und Tage aufbauen
        for (var i = 0; i <= 15; i++){
            items[i] = [];
            for (var j = 0; j <=5; j++){
                if(j == 0){
                    items[i][j] = Ember.Object.create({
                        content: i+1+"."
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
    }.property('content'),

    notEmpty: function(){
        return this.get('content').length
    }.property('content')
});