define(['jquery','backbone',"collections/Todos","views/TodoListView"], function($, Backbone, Todos, TodoListView){

    return describe("TodoListView", function () {

        beforeEach(function () {

            this.todos = new Todos();
            this.todosFetchStub = sinon.stub(this.todos, 'fetch')  //.returns(null);

            this.view = new TodoListView({
                todos: this.todos
            });
        });

        afterEach(function () {
            this.todos.fetch.restore();
        });

        describe("#indexController", function () {

            it("should fetch the todos", function () {
                expect(this.todosFetchStub.calledOnce).toBeTruthy();
            });

            it("should throw error when not fetching todos", function () {
                //this.todosFetchStub.yieldTo('error');

                //expect(this.todosFetchStub.threw()).toBeTruthy();

            });
        })
    });
});

//describe("MyTest", function() {
//    beforeEach(function() {
//        alert("beforeEach level1");
//    });
//    describe("MyTest level2", function() {
//        beforeEach(function() {
//            alert("beforeEach level2");
//        });
//        describe("MyTest level3", function() {
//            beforeEach(function() {
//                alert("beforeEach level3");
//            });
//            it("is a simple spec in level3", function() {
//                alert("A simple spec in level3");
//                expect(true).toBe(true);
//            });
//            afterEach(function() {
//                alert("afterEach level3");
//            });
//        });
//        afterEach(function() {
//            alert("afterEach level2");
//        });
//    });
//    afterEach(function() {
//        alert("afterEach level1");
//    });
//
//});