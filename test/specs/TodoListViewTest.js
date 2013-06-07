define([ 'collections/Todos', 'views/TodoListView', 'views/TodoItemView'], function (Todos, TodoListView, TodoItemView) {


    return describe("TodoListView", function () {

        beforeEach(function () {
            this.todos = new Todos();
            this.todosFetchStub = sinon.spy(this.todos, 'fetch')  //.returns(null);
            this.view = new TodoListView({
                todos: this.todos
            });
        });

        afterEach(function () {
            localStorage.clear();
            this.todos.fetch.restore();
        });

        describe("initialize", function () {

            it("should fetch the todos", function () {
                expect(this.todosFetchStub.calledOnce).toBeTruthy();
            });

            it("should throw error when not fetching todos", function () {
//                  this.todosFetchStub.yieldTo('error');
//                  expect(this.todosFetchStub.threw()).toBeTruthy();

                //expect(this.todosFetchStub.yieldTo('error')).toThrow(new Error('fetching todos failed'));

            });

            it("should _setCallToAction", function () {
                expect(this.view.$el.find(this.view.input).val()).toEqual(this.view.todoCallToAction);
            });
        })

        describe("_createTodoItemView", function () {


            it("should create a Todo Item view", function () {
                var spy = sinon.spy(this.view, '_createTodoItemView');

//                var model = this.todos.create({
//                    'text': 'test model',
//                    'status': 'active',
//                    'wait': true
//                });

                var model = new Backbone.Model({
                    'text': 'test model',
                    'status': 'active',
                    'wait': true
                })

                spy(model);
                expect(spy.calledOnce).toBeTruthy();
                expect(spy.returned(sinon.match.instanceOf(TodoItemView))).toBeTruthy();


                //expect(spy.calledOn(this.view)).toBeTruthy();
                //expect(spy.calledWith(model)).toBeTruthy();

            });

        })

    })

})