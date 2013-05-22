define([ 'collections/Todos',  'views/TodoListView'], function (Todos, TodoListView) {


    return describe("TodoListView", function () {
        var todos = null;
        var todosFetchStub = null;
        var view = null;

        beforeEach(function () {

//          that.mockData = { title: 'Foo Bar', timestamp: new Date().getTime() };

            todos = new Todos();
            todosFetchStub = sinon.spy(todos, 'fetch');
            view = new TodoListView({
                todos: todos
            });
        });

        afterEach(function () {
            todos.fetch.restore();
           // view.remove();

        });

        describe("#initialize", function () {

            it("should fetch the todos", function () {
                expect(todosFetchStub.calledOnce);

            });
            it("should thow error when fetching todos", function () {
                expect(todosFetchStub.yieldsTo('error').calledOnce);

            });

            it("should _setCallToAction", function () {
                expect(view.$el.find(view.input).val()).toEqual(view.todoCallToAction);
            });
        })
    })

})