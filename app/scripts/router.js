StupidGsoClient.Router.map(function () {
    this.resource('types', {path: '/:type_name'}, function(){
        this.resource('element', {path: '/:element'}, function(){
        })
    });


    this.resource('pages', {path: '/p'}, function(){
        this.route('about');
        this.route('legal');
    });
});
