define(['underscore','backbone-localStorage'], function(_, Backbone) {
        
    var todos = Backbone.Collection.extend({
    
        type:"collections.Todos",
        
        localStorage: new Backbone.LocalStorage(window.store || "Todos"), 
    
    
        initialize:function(data){
            
        }
        
    })
    
    return todos;
    
})


