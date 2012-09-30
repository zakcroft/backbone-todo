define(function(require){
    
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var template = require('text!templates/todoList.html');
 
    return  Backbone.View.extend({

        tagName:'li',
          
        template:_.template( template ),
                
        events:{
            'click span.control-active':'_markAsDone',
            'dblclick span.text':'_edit',
            'blur .edit':'_save'
        },

        initialize: function() {
            this.model.on( 'change:status', this.render, this );
            this.model.on( 'change:text', this.render, this );
        },

        render : function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
            
        _edit:function(e){
            if(this.model.get('status') === 'active'){
                $('.display', this.$el).hide();
                $('input', this.$el).show().focus();
            }
        },
            
        _save:function(e){
            var _self = this;
            var text = $('input', this.$el).hide().val();
            this.model.save( {
                'text':text
            }, 

            {
                success: function(){ 
                    $('.display',  _self.$el).show();
                }
            }
            );                
    },
            
    _markAsDone:function(){
        this.model.save( {
            'status':'done'
        });
    }
            
            
    })
    
})
