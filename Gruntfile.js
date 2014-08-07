// Generated on 2014-08-06 using generator-webapp 0.4.9
'use strict';
module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/scripts/{,*/}*.js',
                '!<%= config.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

        // Jasmine testing framework configuration options
        jasmine: {
            src: ['app/scripts/opps.js'],
            options: {
           	keepRunner: true,
            specs: 'test/spec/**/*Spec.js',
            }
        },



    });

    grunt.registerTask('test', function (target) {
        grunt.task.run(['jasmine']);
    });

    grunt.registerTask('default', [
        'test'
    ]);
};
