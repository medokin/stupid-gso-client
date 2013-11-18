var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function () {
    this.resource('types', {path: '/'});

    this.resource('type', {path: '/:type_name'}, function() {
        this.resource('elements', {path: '/elements'});
        this.resource('element', {path: '/:element_name'}, function(){
            this.resource('timetable', {path: '/timetable', queryParams: ['week']});
        });
    });

    this.resource('pages', {path: '/p'}, function(){
        this.route('about');
        this.route('legal');
    });
});

export default Router;
