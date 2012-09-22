define(['jquery',
    'backbone',
    'views/TodoItemView'],

    function( $, Backbone, TodoItemView){
    

        return  Backbone.View.extend({
          
            el:'#todo',
            
            input:'input#main-text',
            todoCallToAction:'Enter text',
    
            events:{
                'click #main-text':'_clearSearchText',
                'click button':'_emptyCollection'
            },

            initialize:function (config) {  
                this.todos = config.todos;
                this.todos.on( 'reset', this._renderAll, this );
                this.todos.on( 'add', this._renderOne, this );                
                this.todos.fetch();                  
                this._setCallToAction();
                this._attachHandlers();  
            },
        
            _renderAll:function(){
                var _self = this;
                $('ul', this.$el).empty();
                this.todos.each(function(model){
                    _self._renderOne(model);
                });
            },
            
            _renderOne:function(model){               
                $('ul',this.$el).append(this._createTodoItemView(model).render().el); 
            },
                       
            _createTodoItemView:function(model){
                return new TodoItemView({
                    model:model
                });
            },
                       
            _attachHandlers:function(){
                var _self = this;
                $(this.input, this.$el).keypress(function(e){
                    if(e.which === 13){
                        _self.todos.create({
                            'text':$(this).val(),
                            'status': 'active',
                            wait: true
                        });                        
                    }
                });
            },
            
            _update:function(model){
                this.todos.localStorage.update(model);
            },
            
            _emptyCollection:function(){
                var length = this.todos.length; 
                for (var i = length - 1; i >= 0; i--) {
                    this.todos.at(i).destroy();
                }                                              
            },
                               
            _setCallToAction:function(){
                $(this.input,this.$el).val(this.todoCallToAction);
            },
        
            _clearSearchText:function(){
                $(this.input, this.$el).val('');
            } 
        
        });   
    });



