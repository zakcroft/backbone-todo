define(function(){
    
    var Backbone = require('backbone');
    
    var todo = Backbone.Model.extend({
    
        type:"model.Todo",
          
        defaults: {
            "id":"",
            'text':'',
            'status':'active'
        },
    
        initialize:function(data){}       
    })
    
    return todo;

})



