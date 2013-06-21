define(['Router', 'jquery','backbone',"collections/Todos","views/TodoListView"], function(Router, $, Backbone, Todos, TodoListView){

    return describe("Router", function () {



            beforeEach(function() {

                this.collection = new Backbone.Collection();


                this.t = new Todos();

                //this.todoListViewStub = sinon.stub(TodoListView, 'constructor').returns(new Backbone.View());

                this.todoListViewStub = sinon.stub(TodoListView, 'constructor').returns(new Backbone.View());
                this.router = new Router();

                //this.todosCollectionStub = sinon.stub(Todos).returns(this.collection);
            });

            afterEach(function() {
                this.todoListViewStub.restore();

            });


        describe("Index handler", function() {

            describe("when no Todo list exists", function() {

                beforeEach(function() {

                   this.router.indexController();
                });

                it("creates a Todo list collection", function() {
                      expect(this.todoListViewStub.called).toBeTruthy();
//                    expect(this.todosCollectionStub)
//                        .toHaveBeenCalledWithExactly();
                });

                //it("creates a Todo list view", function() {
//                    expect(this.todoListViewStub).toHaveBeenCalledOnce();
//                    expect(this.todoListViewStub)
//                        .toHaveBeenCalledWith({
//                            collection: this.collection
//                        });
               // });

            });
        });
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