/*global module:false*/
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-jasmine-task');
  
    // Project configuration.
    grunt.initConfig({
        pkg: '../<json:package.json>',
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
        },
        
        lint: {
            //files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js'],
            test:['test/**/*.js'],
            src:[ 'src/**/*.js']
        },
        
        requirejs: {
            //almond: true,
            baseUrl: '../src',
            mainConfigFile: '../src/init.js', // not relative to baseUrl
            //name: "init", // test specify the top level file for require
            out:'../dist/out.min.js',
            //logLevel: 0,
            preserveLicenseComments: false
            
            //modules: [{name: 'main'}]

        },
             
        watch: {
            files: '<config:lint.files>',
            tasks: 'lint qunit'
        },
        
        // jasmine testsuites
        jasmine: {
            files: ['test/specs/SpecRunner.html']
        },
        
        //        //https://github.com/jasmine-contrib/grunt-jasmine-runner
        //        jasmine : {                          
        //            src : 'src/**/*.js',
        //            specs : 'specs/**/*Spec.js',
        //            helpers : 'specs/helpers/*.js',
        //            timeout : 10000,
        //            template : 'src/custom.tmpl',
        //            junit : {
        //                output : 'junit/'
        //            },
        //            phantomjs : {
        //                'ignore-ssl-errors' : true
        //            }
        //        },
        //        'jasmine-server' : {
        //            browser : false
        //        },
        
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            },
            globals: {
                jQuery: true,
                define: true
            }
        },
        uglify: {}
    });
  
    
    grunt.registerTask('default', 'lint requirejs');
    
    grunt.registerTask('build', 'lint jasmine requirejs');
    
    grunt.registerTask('test', 'jasmine');

};
