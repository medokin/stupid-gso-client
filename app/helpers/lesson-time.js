export default Ember.Handlebars.makeBoundHelper(function(lesson) {
    var starttime = moment({hour: 7, minute: 45});
    console.log(lesson);
    if(lesson == 1){
        return new Handlebars.SafeString(lesson + ". <br>" + starttime.format('HH:mm') + ' <br> ' + starttime.add("m", 45).format('HH:mm'));
    }
    
    for (var i=1; i<lesson; i++){
        starttime.add("m", 45);
        
        if((i > 1 && i != 12 && i != 14 && !(i % 2)) || i == 13){
            starttime.add("m", 20);
        }
    }
    
    return new Handlebars.SafeString(lesson + ". <br>" + starttime.format('HH:mm') + ' <br> ' + starttime.add("m", 45).format('HH:mm'));
});