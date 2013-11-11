StupidGsoClient.Router.map(function () {
    this.resource('types', {path: '/:type_name'}, function(){
        this.resource('element', {path: '/:element'}, function(){
        })
    })
});
