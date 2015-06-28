path = require "path"

folderMount = (connect, point) ->
    return connect.static path.resolve(point)

module.exports = (grunt) ->

    port = 7788
  
    grunt.initConfig
        watch:
            coffee_app:
                files: ['client/coffee/**/**.coffee']
                tasks: ["coffee-compile-app"]
            coffee_jasmine:
                files: ['test/jasmine/coffee/**/**.coffee']
                tasks: ["coffee-compile-jasmine"]
            js_requireConfig:
                files: ["client/js/requireConfig.js", "client/js/requireEnter.js", "test/jasmine/js/SpecRunner.js", "test/jasmine/js/SpecIndex.js"]
                tasks: ["concat:main", "concat:jasmine
                "]
            js:
                files: ["client/js/**/**.js", "test/jasmine/js/**/**.js"]
                options:
                    livereload: true

        coffee:
            app:
                options: {
                    bare: true
                }
                files: [
                    expand: true
                    cwd: 'client/coffee'
                    src: ['**/*.coffee']
                    dest: 'client/js'
                    ext: '.js'
                ]
            plugins:
                options: {
                    bare: true
                }
                files: [
                    expand: true
                    cwd: 'src/coffee'
                    src: ['**/*.coffee']
                    dest: 'dist'
                    ext: '.js'
                ]
            jasmine:
                options: {
                    bare: true
                }
                files: [
                    expand: true
                    cwd: 'test/jasmine/coffee'
                    src: ['**/*.coffee']
                    dest: 'test/jasmine/js'
                    ext: '.js'
                ]

        connect:
            server:
                options:
                    port: port
                    base: './client'
                    middleware: (connect, options) ->
                        return [
                            folderMount(connect, options.base)
                        ]

        concat:
            main:
                src: ["client/js/requireConfig.js", "client/js/requireEnter.js"]
                dest: "client/js/main.js"
            jasmine:
                src: ["client/js/requireConfig.js", "test/jasmine/js/SpecRunner.js"]
                dest: "test/jasmine/js/superSpecRunner.js"


    grunt.loadNpmTasks "grunt-contrib-watch"
    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks "grunt-contrib-connect"
    grunt.loadNpmTasks "grunt-contrib-concat"
    grunt.loadNpmTasks "grunt-newer"

    grunt.registerTask "default", ["connect:server", "watch"]

    # compilation
    grunt.registerTask "coffee-compile-app",            ["newer:coffee:app"]
    grunt.registerTask "coffee-compile-jasmine",        ["newer:coffee:jasmine"]

    grunt.registerTask "server", ["connect"]