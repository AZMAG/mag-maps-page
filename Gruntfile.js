module.exports = function(grunt) {

	"use strict";

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),

		bannercss: "/*! =============================================================\n" +
			" * MAG Maps Main Page\n" +
			" * Maricopa Association of Governments\n" +
			" * Style document for MAG Maps Main Page\n" +
			" * =============================================================\n" +
			" * @project	MAG Maps Main Page\n" +
			" * @file		main.css\n" +
			" * @version 	<%= pkg.version %>\n" +
			" * @date 		<%= pkg.date %>\n" +
			" * @copyright	<%= pkg.copyright %> MAG\n" +
			" * @license	MIT\n" +
			" * ===============================================================\n" +
			" */",

		bannerjs: "/*! ========================================================================\n" +
			" * MAG Maps Main Page\n" +
			" * Maricopa Association of Governments\n" +
			" * JavaScript files for MAG Main Map Page\n" +
			" * =============================================================\n" +
			" * @project	MAG Maps Main Page\n" +
			" * @file		main.js\n" +
			" * @version 	<%= pkg.version %>\n" +
			" * @date 		<%= pkg.date %>\n" +
			" * @copyright	<%= pkg.copyright %> MAG\n" +
			" * @license	MIT\n" +
			" * ========================================================================== */\n",

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
				src: ["src/index.html", "src/contact.html", "src/about.html", "src/views/terms.html", "src/views/privacy.html", "src/views/footer.html"]
			}
		},

		// CSSLint. Tests CSS code quality
		// https://github.com/gruntjs/grunt-contrib-csslint
		csslint: {
			// define the files to lint
			files: ["src/css/main.css"],
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
			files: ["src/js/main.js"],
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
				reporter: require("jshint-stylish-ex")
			}
		},

		uglify: {
			options: {
				// add banner to top of output file
				banner: "<%= bannerjs %>\n"
			},
			build: {
				files: {
					"dist/js/main.min.js": ["src/js/main.js"]
				}
			}
		},

		cssmin: {
			add_banner: {
				options: {
					// add banner to top of output file
					banner: "/* <%= pkg.name %> - v<%= pkg.version %> | <%= pkg.date %> */\n"
				},
				files: {
					"dist/css/main.min.css": ["src/css/main.css"],
					"dist/css/normalize.min.css": ["src/css/normalize.css"],
					"dist/css/carousel.min.css": ["src/css/carousel.css"]
				}
			}
		},

		concat: {
			options: {
				stripBanners: true,
				banner: "<%= bannercss %>\n"
			},
			dist: {
				src: ["dist/css/normalize.min.css", "dist/css/carousel.min.css", "dist/css/main.min.css"],
				dest: "dist/css/concat.min.css"
			}
		},

		clean: {
			build: {
				src: ["dist/"]
			}
		},

		copy: {
			build: {
				cwd: "src/",
				src: ["**"],
				dest: "dist/",
				expand: true
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
				// source files array
				// RegExp Expression
				src: ["src/index.html", "src/about.html", "src/contact.html", "src/details.html", "src/js/main.js", "src/humans.txt", "README.md", "src/css/main.css"],
				overwrite: true, // overwrite matched source files
				replacements: [{
					// html pages
					from: /(<meta name="revision-date" content=")[0-9]{2}\/[0-9]{2}\/[0-9]{4}(">)/g,
					to: '<meta name="revision-date" content="' + "<%= pkg.date %>" + '">',
				}, {
					// html pages
					from: /(<meta name="version" content=")([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))(">)/g,
					to: '<meta name="version" content="' + "<%= pkg.version %>" + '">',
				}, {
					// main.js
					from: /(@version 	)([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/g,
					to: "@version 	" + "<%= pkg.version %>",
				}, {
					// main.js
					from: /(@date 		)[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g,
					to: "@date 		" + "<%= pkg.date %>",
				}, {
					// main.js
					from: /(@copyright 	)[0-9]{4}/g,
					to: "@copyright 	" + "<%= pkg.copyright %>",
				}, {
					// humans.txt
					from: /(Version\: )([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/g,
					to: "Version: " + "<%= pkg.version %>",
				}, {
					// humans.txt
					from: /(Last updated\: )[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g,
					to: "Last updated: " + "<%= pkg.date %>",
				}, {
					// README.md
					from: /(### version )([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/g,
					to: "### version " + "<%= pkg.version %>",
				}, {
					// README.md
					from: /(`Updated: )[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g,
					to: "`Updated: " + "<%= pkg.date %>",
				}, {
					// main.css
					from: /(@version 	)([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/g,
					to: "@version 	" + "<%= pkg.version %>",
				}, {
					// main.css
					from: /(@copyright 	)[0-9]{4}/g,
					to: "@copyright 	" + "<%= pkg.copyright %>",
				}, {
					// main.css
					from: /(@main.css)( \| )(v)([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/g,
					to: "@main.css | v" + "<%= pkg.version %>",
				}, {
					// main.css
					from: /( \| )(@copyright )[0-9]{4}/g,
					to: " | @copyright " + "<%= pkg.copyright %>",
				}]
			}
		}


	});

	// this would be run by typing "grunt test" on the command line

	// grunt.registerTask("build", ["replace", "uglify", "cssmin", "concat"]);
	grunt.registerTask("build", ["clean", "replace", "copy", "uglify", "cssmin", "concat"]);

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
