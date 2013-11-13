StupidGsoClient.TypesRoute = Ember.Route.extend({
    model: function () {
        return [
            Em.Object.create({
                name: 'classes',
                text: 'Klassen'
            }),
            Em.Object.create({
                name: 'teachers',
                text: 'Lehrer'
            }),
            Em.Object.create({
                name: 'rooms',
                text: 'Räume'
            })
        ];
    }
});
