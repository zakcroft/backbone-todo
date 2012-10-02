(function(require) {
    //"use strict";

    var libsPath = '../lib/'; //libsPath relative to 'basePath'
    var srcPath = 'src/'; //libsPath relative to 'basePath'
    
    require.config({  
        // module IDs are resolved relative to other modules IDs, not paths.
        //Note the usage of a prefix "remote" for the ID. 
        //So if remoteModule.js has a './something' module ID reference, it is resolved to 'remote/something' which then gets that above path applied to it.
        //https://github.com/jrburke/requirejs/issues/230
        
        //        TODO - sort out and understand relative path issues 
        //        https://github.com/jrburke/requirejs/issues/276
        //        https://github.com/jrburke/requirejs/issues/162
        //        https://groups.google.com/forum/?fromgroups=#!topic/amd-implement/xF1BuikRPZ8
        //        https://github.com/jrburke/requirejs/wiki/Requirejs-2.0-draft#wiki-mapconfig
        //        https://github.com/amdjs/amdjs-api/wiki/AMD#wiki-define-id-notes
        //        
        //        map: {
        //            '*': {
        //                'utils': 'foo1.2'
        //            }
        //        },
        
        baseUrl:'src',
        paths: {
            "jquery" : libsPath + 'jQuery-1.8.1',  
            "underscore" : libsPath + 'underscore_amd-1.3.3',  
            "backbone" : libsPath + 'backbone_amd-0.9.2',
            "backbone-localStorage": libsPath + "local-storage",
            "text": libsPath + 'require-text',
            "utils":"../utils"
        }, 
        // "packages": ["utils"],
        shim: {
            'backbone-localStorage': {
                deps: ['backbone'],
                exports: 'Backbone'
            }
        },
        
        urlArgs: "bust=" +  (new Date()).getTime()	//cache-busting for development
    })

    require(["jquery","underscore","backbone", 'Router'], function($, _, Backbone,  Router) {
        $(function() {
            $.noConflict();
            Backbone.noConflict();        
            new Router();  
            Backbone.history.start();
        });    
    });  
    
})(require)










