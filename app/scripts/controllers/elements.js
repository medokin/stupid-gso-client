StupidGsoClient.ElementsController = StupidGsoClient.FilterController.extend({
    type: null,

    actions: {
        star: function() {
            this.controller.set('isExpanded', true);
        }
    }
});

