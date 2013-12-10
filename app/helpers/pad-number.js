export default Ember.Handlebars.makeBoundHelper(function(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
   
    return str;
});