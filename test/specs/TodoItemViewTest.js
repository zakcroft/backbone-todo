define([ 'collections/Todos', 'views/TodoListView', 'views/TodoItemView'], function (require) {

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Todos = require('collections/Todos');
        TodoListView = require('views/TodoListView');
        TodoItemView = require('views/TodoItemView');

    return describe("TodoListView", function () {

        beforeEach(function () {
            var todoItemView =  new TodoItemView({});
            var stub = sinon.stub(todoItemView ,model);
        });

        afterEach(function () {

        });

        describe("", function () {

            it("", function () {

            });
        });
    });
});