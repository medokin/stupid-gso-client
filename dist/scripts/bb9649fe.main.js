!function(){window.StupidGsoClient=Ember.Application.create({LOG_TRANSITIONS:!0}),Ember.FEATURES["query-params"]=!0}(),function(){StupidGsoClient.FilterController=Ember.ArrayController.extend({filterString:"",filteredList:function(){var a=this.get("filterString").toLowerCase();return this.get("content").filter(function(b){return-1!==b.name.toLowerCase().indexOf(a)})}.property("content","filterString","content@each")})}(),function(){StupidGsoClient.TimetableBaseController=Ember.ArrayController.extend({filteredList:function(){for(var a=this.get("content"),b=[],c=0;15>=c;c++){b[c]=[];for(var d=0;5>=d;d++)b[c][d]=0==d?Ember.Object.create({content:c+1+"."}):null}for(var c=0;c<=a.length;c++){var e=a[c];void 0!=e&&(b[e.hour-1][e.day]=e)}return b}.property("content"),notEmpty:function(){return this.get("content").length}.property("content")})}(),function(){StupidGsoClient.ElementsController=StupidGsoClient.FilterController.extend({type:null})}(),function(){StupidGsoClient.TimetableController=StupidGsoClient.TimetableBaseController.extend({needs:["elements"],type:"",element:"",weeks:null,elementObserver:function(){if(null==this.get("weeks")){var a=this;Ember.$.getJSON("http://api.gso.medok.in/weeks-available.json").then(function(b){a.set("weeks",b)})}}.observes("element","type")})}(),function(){StupidGsoClient.Store=DS.Store.extend({adapter:DS.FixtureAdapter.create()})}(),function(){StupidGsoClient.ElementsRoute=Ember.Route.extend({model:function(){var a=this.modelFor("type");return this.controllerFor("elements").set("type",a),Ember.$.getJSON("http://api.gso.medok.in/"+a+".json")}})}(),function(){StupidGsoClient.TimetableRoute=Ember.Route.extend({model:function(a,b){var c=this.controllerFor("timetable"),d=this.modelFor("type");return c.set("type",d),c.set("element",a.element_name),void 0!=b.week?Ember.$.getJSON("http://api.gso.medok.in/timetable/"+d+"/"+a.element_name+"/"+b.week+"/week.json"):(b.week=this.getWeekNumber(new Date),Ember.$.getJSON("http://api.gso.medok.in/timetable/"+d+"/"+a.element_name+"/week.json"))},getWeekNumber:function(a){a=new Date(a),a.setHours(0,0,0),a.setDate(a.getDate()+4-(a.getDay()||7));var b=new Date(a.getFullYear(),0,1),c=Math.ceil(((a-b)/864e5+1)/7);return[a.getFullYear(),c]}})}(),function(){StupidGsoClient.TypeRoute=Ember.Route.extend({model:function(a){return a.type_name}})}(),function(){StupidGsoClient.TypesRoute=Ember.Route.extend({model:function(){return[Em.Object.create({name:"classes",text:"Klassen"}),Em.Object.create({name:"teachers",text:"Lehrer"}),Em.Object.create({name:"rooms",text:"Räume"})]}})}(),function(){StupidGsoClient.Router.map(function(){this.resource("types",{path:"/"}),this.resource("type",{path:"/:type_name"},function(){this.resource("elements",{path:"/elements"}),this.resource("timetable",{path:"/:element_name",queryParams:["week"]})}),this.resource("pages",{path:"/p"},function(){this.route("about"),this.route("legal")})})}();