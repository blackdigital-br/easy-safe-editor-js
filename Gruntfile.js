module.exports = function(grunt){

    const webpackConfig = require('./webpack.config');
    const path = require('path');

	grunt.initConfig({
        webpack: {
            options: {
              stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            },
            prod: webpackConfig,
            //dev: Object.assign({ watch: true }, webpackConfig)
        },
        cssmin: {
            options: {
              mergeIntoShorthands: false,
              roundingPrecision: -1
            },
            target: {
              files: {
                './dist/easySafeEditor.min.css': ['./css/easySafeEditor.css']
              }
            }
        },
        compress: {
            main: {
              options: {
                archive: './dist/archive.zip'
              },
              files: [
                { expand: false, src: ['./dist/*.js'], dest: 'js/', filter: 'isFile'},
                { expand: false, src: ['./dist/*.css'], dest: 'css/'},
              ]
            }
          },
        uglify: {
			options: {
                preserveComments: false,
                banner: "//BlackDigital 2020",
                sourceMap: false,
                report: "min",
                beautify: false,
                output: {
                    "ascii_only": true
                },
				compress: {
                    "hoist_funs": false,
                    loops: false
                }
			},
			all: {
                src: "dist/easySafeEditor.min.js",
                dest: "dist/easySafeEditor.min.js"
			}
        }
	});

    require( "load-grunt-tasks" )( grunt );
    grunt.registerTask( "default", [ "webpack", "cssmin" ]);
}