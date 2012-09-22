/*global module:false*/
module.exports = function(grunt) {

    
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
            mainConfigFile: '../src/BB.todos.js', // not relative to baseUrl
            name: "Router", // test specify the top level file for require
            out:'../dist/out.min.js'
            //modules: [{name: 'main'}]

        },
             
        watch: {
            files: '<config:lint.files>',
            tasks: 'lint qunit'
        },
        
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

    grunt.loadNpmTasks('grunt-requirejs');
    
    grunt.registerTask('default', 'lint requirejs');
    
    grunt.registerTask('build', 'lint requirejs');

};
