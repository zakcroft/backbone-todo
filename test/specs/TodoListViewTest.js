 describe("TodoListView", function(){ 
            
            beforeEach(function() {
                var todos = new Todos();
                todosFetchSpy = sinon.spy(todos, 'fetch' );
                var view = new TodoListView({
                    collection: todos
                });
            });
        
            afterEach(function() {
                todos.fetch.restore()
            });
    
    
            describe("#initialize", function() {
                
                it("should fetch the todos", function() {
                    expect(todosFetchSpy.called);
                });
        

                it("should display error when campaign id is invalid", function(){
        
                    })
        
            })  
        })