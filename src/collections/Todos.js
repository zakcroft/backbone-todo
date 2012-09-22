define(['underscore','backbone-localStorage', 'models/Todo'], function(_, Backbone, Todo) {
        
    var todos = Backbone.Collection.extend({
    
        type:"collections.Todos",
        
        model:Todo,
        
        localStorage: new Backbone.LocalStorage(window.store || "Todos"), 
    
    
        initialize:function(data){
            
        }
        
    });
    
    return todos;
    
});


