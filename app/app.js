import Resolver from 'resolver';



Ember.FEATURES["query-params"] = true;

var App = Ember.Application.extend({
  //LOG_ACTIVE_GENERATION: true,
  //LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  //LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver.default,
  
  ready: function(){
      store.remove("templates.elements");
      store.remove("templates.page-content"); 
      store.remove("templates.page-header"); 
      store.remove("templates.timetable"); 
      store.remove("templates.timetable-subheader"); 
      store.remove("templates.types"); 
      // remove mobile brower click-event delay
      FastClick.attach(document.body);
      
      Ember.$('#test').remove();
  }
});



Ember.RSVP.configure('onerror', function(error) {
  // ensure unhandled promises raise awareness.
  // may result in false negatives, but visibility is more important
  if (error instanceof Error) {
    Ember.Logger.assert(false, error);
    Ember.Logger.error(error.stack);
  }
});

export default App;
