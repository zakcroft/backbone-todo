define(function (require) {

    var $ = require('jquery'),
        Backbone = require('backbone'),
        TodoItemView = require('views/TodoItemView'),
        string = require('utils/core/string'),
        template = require('text!templates/listLayout.html');

    return  Backbone.View.extend({

        tagName: 'div',

        template: _.template(template),

        input: 'input#main-text',
        todoCallToAction: 'Enter text',

        events: {
            'click #main-text': '_clearSearchText'
        },

        initialize: function (config) {
            var _self = this;
            this.todos = config.todos;
            this.todos.fetch({
                success: function (coll, res, opt) {
                    _self.render()._renderAll().$el.show();
                },
                error: function (coll, res, opt) {
                    throw new Error('fetching todos failed');
                }
            });
            this.todos.on('add', this._renderOne, this);
            this._setCallToAction();
            this._attachHandlers();
        },

        render: function () {
            $('#todo').append(this.$el.html(this.template())).show();
            return this;
        },

        _renderAll: function () {
            var _self = this;
            $('ul', this.$el).empty();
            this.todos.each(function (model) {
                _self._renderOne(model);
            });
            return this;
        },

        _renderOne: function (model) {
            $('ul', this.$el).append(this._createTodoItemView(model).render().el);
        },

        _createTodoItemView: function (model) {
            return new TodoItemView({
                model: model
            });
        },

        _attachHandlers: function () {
            var _self = this;
            $(this.input, this.$el).keypress(function (e) {
                if (e.which === 13) {
                    _self._create($(this).val());
                }
            })
        },

        _create: function (text) {
            this.todos.create({
                    'text': text,
                    'status': 'active'
                },
                {
                    'wait': true
                })
        },

        _update: function (model) {
            this.todos.localStorage.update(model);
        },

        _setCallToAction: function () {
            $(this.input, this.$el).val(this.todoCallToAction);
        },

        _clearSearchText: function () {
            $(this.input, this.$el).val('');
        }

    })

})



