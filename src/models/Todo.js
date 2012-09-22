define(["backbone"],function(Backbone){
    
    var todo = Backbone.Model.extend({
    
        type:"model.Todo",
          
        defaults: {
            "id":"",
            'text':'',
            'status':'active'
        },
    
        initialize:function(data){
            this.on("remove", function() {
                this.destroy();
            });
        }       
    });
    
    return todo;

});



