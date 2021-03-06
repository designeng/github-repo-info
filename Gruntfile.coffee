path = require "path"

folderMount = (connect, point) ->
    return connect.static path.resolve(point)

module.exports = (grunt) ->

    port = 7788

    indexPath = "client/index.html"
  
    grunt.initConfig
        nodemon:
            dev:
                script: 'server.js'
                watch: ['app/*']
            
        watch:
            coffee_app:
                files: ['client/coffee/**/**.coffee']
                tasks: ["coffee-compile-app"]
            js_requireConfig:
                files: ["client/js/requireConfig.js", "client/js/requireEnter.js"]
                tasks: ["concat:main"]
            js:
                files: ["client/js/**/**.js"]
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

        requirejs:
            compile:
                options:
                    baseUrl: "client/js/"
                    mainConfigFile: "client/js/requireConfig.js"
                    name: "main"
                    out: "client/build/main.js"

        dataMainAttr:
            dev:
                from: /build\/main/g
                to: "js/main"
                indexPath: indexPath
            prod:
                from: /js\/main/g
                to: "build/main"
                indexPath: indexPath

    grunt.loadNpmTasks "grunt-contrib-watch"
    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks "grunt-contrib-connect"
    grunt.loadNpmTasks "grunt-contrib-concat"
    grunt.loadNpmTasks "grunt-contrib-requirejs"
    grunt.loadNpmTasks "grunt-newer"
    grunt.loadNpmTasks "grunt-nodemon"

    # ["dataMainAttr"] tasks
    grunt.loadTasks "tasks"

    grunt.registerTask "default", ["dataMainAttr:dev", "connect:server", "watch"]

    grunt.registerTask "build", ["dataMainAttr:prod", "requirejs:compile"]

    # compilation
    grunt.registerTask "coffee-compile-app", ["newer:coffee:app"]

    grunt.registerTask "server", ["connect"]

    # TODO: nodemon does not watch .coffee - open issue
    grunt.registerTask "ndm", ["nodemon"]