define(['underscore','backbone-localStorage'], function(_, Backbone) {

    return Backbone.Collection.extend({

        type: "collections.Todos",

        localStorage: new Backbone.LocalStorage(window.store || "Todos"),


        initialize: function (data) {

        }

    });
})


