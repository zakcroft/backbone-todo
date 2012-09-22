define([
    'jquery',
    'backbone',
    "collections/Todos",
    "views/TodoListView"
    
    
    ], function($, Backbone, Todos, TodoListView){
    
        var router =  Backbone.Router.extend({


            routes: {
                '': 'indexController'
            },
        
            indexController : function () {
                var todos = new Todos();
                var todoListView = new TodoListView({
                    todos:todos
                });
             
            }       
        });
        
        return router;
    });


