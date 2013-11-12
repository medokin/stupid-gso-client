StupidGsoClient.Router.map(function () {
    this.resource('types', {path: '/'}); // Step 1
    
    this.resource('type', {path: '/type/:type_name'}, function() {
        this.resource('elements', {path: '/elements'}); // Step 2, holt sich typeModel
        this.resource('timetable', {path: '/:element_name', queryParams: ['week']}); // Step 3, holt sich typeModel, hat elementModel
    });

    this.resource('pages', {path: '/p'}, function(){
        this.route('about');
        this.route('legal');
    });
});
