define([ 'collections/Todos', 'views/TodoListView', 'views/TodoItemView'], function (Todos, TodoListView, TodoItemView) {


    return describe("TodoListView", function () {

        beforeEach(function () {
            this.todos = new Todos();
            this.todosFetchStub = sinon.spy(this.todos, 'fetch');
            this.clearSearchTextSpy = sinon.spy(TodoListView.prototype, '_clearSearchText');
            this.view = new TodoListView({
                todos: this.todos
            });
        });

        afterEach(function () {
            this.todos.fetch.restore();
            TodoListView.prototype._clearSearchText.restore();
            this.view.unbind().remove();
            localStorage.clear();
        });

        describe("initialize", function () {

            it("should fetch the todos", function () {
                expect(this.todosFetchStub.calledOnce).toBeTruthy();
            });

            it("should throw error when not fetching todos", function () {
                // this.todosFetchStub.yieldTo('error');
                // expect(this.todosFetchStub.threw()).toBeTruthy();
                //expect(this.todosFetchStub.yieldTo('error')).toThrow(new Error('fetching todos failed'));
            });

            it("should _setCallToAction", function () {
                expect(this.view.$el.find(this.view.input).val()).toEqual(this.view.todoCallToAction);
            });
        })

        describe("_createTodoItemView", function () {

            it("should create a TodoItemView", function () {
                var spy = sinon.spy(this.view, '_createTodoItemView');
                var model = new Backbone.Model({
                    'text': 'test model',
                    'status': 'active'
                })
                spy(model);

                expect(spy.calledOnce).toBeTruthy();
                expect(spy.returned(sinon.match.instanceOf(TodoItemView))).toBeTruthy();
            });

        })

        describe("_create", function () {

            it("should create Todo in localstorage when enter key is pressed", function () {

                var spy = sinon.spy(this.view,'_create')
                var testText = 'testText';
                var e = jQuery.Event("keypress");
                e.which = 13;

                var input = this.view.$el.find(this.view.input);
                input.val(testText);
                input.trigger(e);

                var itemKey = Object.keys(localStorage).pop();
                var itemData = JSON.parse(localStorage.getItem(itemKey));

                expect(spy.calledOnce).toBeTruthy();
                expect(itemData.text).toBe(testText);
                expect(itemData.status).toBe('active');

            })
        })

        describe("_clearSearchText", function () {

            it('should clear text input text when input clicked',function(){

                var input = this.view.$el.find(this.view.input);
                input.click();

                expect(this.clearSearchTextSpy.calledOnce).toBeTruthy();
                expect(input.val()).toBe('');
            })
        })
    })

})