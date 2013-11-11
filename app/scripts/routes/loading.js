StupidGsoClient.LoadingRoute = Ember.Route.extend({
    activate: function(){
        this._super();
        var appController = this.controllerFor('application');
        if(appController != undefined){
            appController.set('isLoading', true);
        }
    },
    deactivate: function(){
        this._super();
        var appController = this.controllerFor('application');
        if(appController != undefined){
            appController.set('isLoading', false);
        }
    }
});
