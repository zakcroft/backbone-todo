(function( require ) {
    require.config({  
        baseUrl: "src",  
        paths: {
            "jquery" : '../lib/jQuery-1.8.1',  
            "underscore" : '../lib/underscore_amd-1.3.3',  
            "backbone" : '../lib/backbone_amd-0.9.2',
            "backbone-localStorage":"../lib/local-storage",
            "text": '../lib/require-text'
        }, 
        shim: {
            'backbone-localStorage': {
                deps: ['backbone'],
                exports: 'Backbone'
            }
        }
    });


    require(["jquery","underscore","backbone", 'Router'], function($, _, Backbone,  Router) {
        $(function() {
            $.noConflict();
            Backbone.noConflict();        
            new Router();  
            Backbone.history.start();
        });    
    });

})( requirejs );

