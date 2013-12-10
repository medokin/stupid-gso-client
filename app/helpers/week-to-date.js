export default Ember.Handlebars.makeBoundHelper(function(week) {
    return moment().week(week).startOf('week').add('d', 1).format('DD.MM') + "-" + moment().week(week).endOf('week').subtract('d',1).format('DD.MM');
});