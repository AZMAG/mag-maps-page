module.exports = function(grunt) {

    "use strict";

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        bannercss: "/*! =============================================================\n" +
            " * Maricopa Association of Governments\n" +
            " * CSS Document\n" +
            " * @project    MAG Maps Main Page\n" +
            " * @file       main-concat.main.css\n" +
            " * @summary    css files that have been minified and concatenated\n" +
            " * @version    <%= pkg.version %>\n" +
            " * @date       <%= pkg.date %>\n" +
            " * @copyright  <%= pkg.copyright %>\n" +
            " * @license    MIT\n" +
            " * ===============================================================\n" +
            " */",

        bannerjs: "/*! ========================================================================\n" +
            " * Maricopa Association of Governments\n" +
            " * JavaScript Document\n" +
            " * @project    MAG Maps Main Page\n" +
            " * @file       main-concat.min.js\n" +
            " * @summary    JavaScript files that have been minified and concatenated\n" +
            " * @version    <%= pkg.version %>\n" +
            " * @date       <%= pkg.date %>\n" +
            " * @copyright  <%= pkg.copyright %>\n" +
            " * @license    MIT\n" +
            " * ========================================================================== */\n",

        jshint: {
            options: {
                jshintrc: true,
                reporter: require("jshint-stylish")
            },
            target: ["Gruntfile.js", "src/js/*.js"],
        },

        uglify: {
            options: {
                banner: "<% var subtask = uglify[grunt.task.current.target]; %>" +
                    "\n/*! <%= subtask.name %> */",
                preserveComments: "true",
                mangle: false
            },
            task0: {
                name: "plugins.min.js",
                files: [{
                    src: "dist/js/plugins.js",
                    dest: "dist/js/plugins.min.js"
                }]
            },
            task1: {
                name: "main.min.js",
                files: [{
                    src: "dist/js/main.js",
                    dest: "dist/js/main.min.js"
                }]
            },
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: "dist/css",
                    src: ["*.css", "!*.min.css"],
                    dest: "dist/css",
                    ext: ".min.css"
                }]
            }
        },

        concat: {
            css: {
                options: {
                    stripBanners: true,
                    banner: "<%= bannercss %>\n"
                },
                src: ["dist/css/bootstrap.min.css", "dist/css/normalize.min.css", "dist/css/carousel.min.css", "dist/css/main.min.css"],
                dest: "dist/css/concat.min.css"
            },
            js: {
                options: {
                    stripBanners: true,
                    banner: "<%= bannerjs %>\n"
                },
                src: ["dist/js/plugins.min.js", "dist/js/main.min.js"],
                dest: "dist/js/master.min.js",
                nonull: true,
            }

        },

        clean: {
            build: {
                src: ["dist/"]
            },
            cleanjs: {
                src: ["dist/js/*.js", "!dist/js/master.min.js"]
            },
            cleancss: {
                src: ["dist/css/*.css", "!dist/css/concat.min.css"]
            }
        },

        copy: {
            build: {
                cwd: "src/",
                src: ["**"],
                dest: "dist/",
                expand: true,
                dot: true
            }
        },

        toggleComments: {
            customOptions: {
                options: {
                    removeCommands: false
                },
                files: {
                    "dist/index.html": "src/index.html",
                    "dist/details.html": "src/details.html",
                    "dist/contact.html": "src/contact.html",
                    "dist/about.html": "src/about.html"
                }
            }
        },

        replace: {
            update_Meta: {
                // source files array
                // RegExp Expression
                src: ["src/index.html", "src/about.html", "src/contact.html", "src/details.html", "src/js/main.js", "src/humans.txt", "README.md", "src/css/main.css"],
                overwrite: true, // overwrite matched source files
                replacements: [{
                    // html pages
                    from: /(<meta name="revision-date" content=")[0-9]{4}-[0-9]{2}-[0-9]{2}(">)/g,
                    to: '<meta name="revision-date" content="' + '<%= pkg.date %>' + '">',
                }, {
                    // html pages
                    from: /(<meta name="version" content=")([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))(">)/g,
                    to: '<meta name="version" content="' + '<%= pkg.version %>' + '">',
                }, {
                    // humans.txt
                    from: /(Version\: )([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/g,
                    to: "Version: " + "<%= pkg.version %>",
                }, {
                    // humans.txt
                    from: /(Last updated\: )[0-9]{4}-[0-9]{2}-[0-9]{2}/g,
                    to: "Last updated: " + '<%= pkg.date %>',
                }, {
                    // README.md
                    from: /(### version )([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/g,
                    to: "### version " + "<%= pkg.version %>",
                }, {
                    // README.md
                    from: /(`Updated: )[0-9]{4}-[0-9]{2}-[0-9]{2}/g,
                    to: "`Updated: " + '<%= pkg.date %>'
                }]
            }
        }


    });

    // this would be run by typing "grunt test" on the command line

    // grunt.registerTask("build", ["replace", "uglify", "cssmin", "concat"]);
    grunt.registerTask("build", ["clean:build", "replace", "copy", "toggleComments", "uglify", "cssmin", "concat", "clean:cleanjs", "clean:cleancss"]);

    grunt.registerTask("update", ["replace"]);

    // grunt.registerTask("test", ["htmlhint", "jshint"]);

    grunt.registerTask("test", ["cssmin"]);

    // grunt.registerTask("test", ["toggleComments"]);

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask("default", []);

};

// ref
// http://coding.smashingmagazine.com/2013/10/29/get-up-running-grunt/
// http://csslint.net/about.html
// http://www.jshint.com/docs/options/
