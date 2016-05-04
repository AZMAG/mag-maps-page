module.exports = function(grunt) {

    "use strict";

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        bannercss:  '/*! ========================================================================\n' +
                    ' * Maricopa Association of Governments\n' +
                    ' * CSS files for MAG Main Map Page\n' +
                    ' * concat.min.css | version | <%= pkg.version %>\n' +
                    ' * Production | <%= pkg.date %> | http://ims.azmag.gov/\n' +
                    ' * MAG Main Map Page\n' +
                    ' * ==========================================================================\n' +
                    ' * Copyright 2016 MAG\n' +
                    ' * Licensed under MIT\n' +
                    ' * ========================================================================== */\n',

        bannerjs:   '/*! ========================================================================\n' +
                    ' * Maricopa Association of Governments\n' +
                    ' * JavaScript files for MAG Main Map Page\n' +
                    ' * main.min.js | version | <%= pkg.version %>\n' +
                    ' * Production | <%= pkg.date %> | http://ims.azmag.gov/\n' +
                    ' * MAG Main Map Page\n' +
                    ' * ==========================================================================\n' +
                    ' * Copyright 2016 MAG\n' +
                    ' * Licensed under MIT\n' +
                    ' * ========================================================================== */\n',

        htmlhint: {
            build: {
                options: {
                    "tag-pair": true, // Force tags to have a closing pair
                    "tagname-lowercase": true, // Force tags to be lowercase
                    "attr-lowercase": true, // Force attribute names to be lowercase e.g. <div id="header"> is invalid
                    "attr-value-double-quotes": true, // Force attributes to have double quotes rather than single
                    // "doctype-first": true,           // Force the DOCTYPE declaration to come first in the document
                    "spec-char-escape": true, // Force special characters to be escaped
                    "id-unique": true, // Prevent using the same ID multiple times in a document
                    // "head-script-disabled": false,   // Prevent script tags being loaded in the head for performance reasons
                    "style-disabled": true // Prevent style tags. CSS should be loaded through
                },
                src: ["index.html", "contact.html", "about.html", "views/terms.html", "views/privacy.html", "views/footer.html"]
            }
        },

        // CSSLint. Tests CSS code quality
        // https://github.com/gruntjs/grunt-contrib-csslint
        csslint: {
            // define the files to lint
            files: ["css/main.css"],
            strict: {
                options: {
                    "import": 0,
                    "empty-rules": 0,
                    "display-property-grouping": 0,
                    "shorthand": 0,
                    "font-sizes": 0,
                    "zero-units": 0,
                    "important": 0,
                    "duplicate-properties": 0,
                }
            }
        },

        jshint: {
            files: ["js/main.js"],
            options: {
                // strict: true,
                sub: true,
                quotmark: "double",
                trailing: true,
                curly: true,
                eqeqeq: true,
                unused: true,
                scripturl: true, // This option defines globals exposed by the Dojo Toolkit.
                dojo: true, // This option defines globals exposed by the jQuery JavaScript library.
                jquery: true, // Set force to true to report JSHint errors but not fail the task.
                force: true,
                reporter: require("jshint-stylish")
            }
        },

        uglify: {
            options: {
                // add banner to top of output file
                banner: '<%= bannerjs %>\n'
            },
            build: {
                files: {
                    "js/main.min.js": ["js/main.js"]
                }
            }
        },

        cssmin: {
            add_banner: {
                options: {
                    // add banner to top of output file
                    banner: '/* <%= pkg.name %> - v<%= pkg.version %> | <%= pkg.date %> */\n'
                },
                files: {
                    "css/main.min.css": ["css/main.css"],
                    "css/normalize.min.css": ["css/normalize.css"],
                    "css/carousel.min.css": ["css/carousel.css"]
                }
            }
        },

        concat: {
            options: {
                stripBanners: true,
                banner: '<%= bannercss %>\n'
            },
            dist: {
                src: ["css/normalize.min.css", "css/carousel.min.css", "css/main.min.css"],
                dest: "css/concat.min.css"
            }
        },

        watch: {
            html: {
                files: ["index.html", "about.html", "contact.html"],
                tasks: ["htmlhint"]
            },
            css: {
                files: ["css/main.css"],
                tasks: ["csslint"]
            },
            js: {
                files: ["js/main.js"],
                tasks: ["jshint"]
            }
        },

        replace: {
            update_Meta: {
                src: ["index.html", "about.html", "contact.html", "details.html", "js/main.js", "humans.txt", "README.md", "css/main.css"], // source files array
                // src: ["README.md"], // source files array
                overwrite: true, // overwrite matched source files
                replacements: [{
                    // html pages
                    from: /(<meta name="revision-date" content=")[0-9]{2}\/[0-9]{2}\/[0-9]{4}(">)/g,
                    to: '<meta name="revision-date" content="' + '<%= pkg.date %>' + '">',
                }, {
                    // html pages
                    from: /(<meta name="version" content=")([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))(">)/g,
                    to: '<meta name="version" content="' + '<%= pkg.version %>' + '">',
                }, {
                    // main.js
                    from: /(MAG main.js)( \| )(v)([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/g,
                    to: "MAG main.js | v" + '<%= pkg.version %>',
                }, {
                    // main.js
                    from: /(v)([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))( \| )[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g,
                    to: 'v' + '<%= pkg.version %>' + ' | ' + '<%= pkg.date %>',
                }, {
                    // humans.txt
                    from: /(Version\: v)([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/g,
                    to: "Version: v" + '<%= pkg.version %>',
                }, {
                    // humans.txt
                    from: /(Last updated\: )[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g,
                    to: "Last updated: " + '<%= pkg.date %>',
                }, {
                    // README.md
                    from: /(#### `v)([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))( - )[0-9]{2}\/[0-9]{2}\/[0-9]{4}(`)/g,
                    to: "#### `v" + '<%= pkg.version %>' + ' - ' + '<%= pkg.date %>' + '`',
                }, {
                    // main.css
                    from: /(main.css)( \| )(version)( \| )([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/g,
                    to: "main.css | version |" +' <%= pkg.version %>',
                }]
            }
        }


    });

    // this would be run by typing "grunt test" on the command line
    grunt.registerTask("build", ["replace", "uglify", "cssmin", "concat"]);

    grunt.registerTask("update", ["replace"]);

    // grunt.registerTask("test", ["htmlhint", "jshint"]);

    // grunt.registerTask("test", ["csslint"]);

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask("default", []);

};

// ref
// http://coding.smashingmagazine.com/2013/10/29/get-up-running-grunt/
// http://csslint.net/about.html
// http://www.jshint.com/docs/options/