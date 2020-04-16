module.exports = function(grunt){

    let orderFiles = [
        "src/utils/*.js", 
        "src/editables/editable.js", 
        "src/editables/baseTextEditable.js", 
        "src/editables/buttonEditable.js", 
        "src/editables/imageEditable.js", 
        "src/editables/richTextEditable.js", 
        "src/editables/templateEditable.js", 
        "src/editables/textEditable.js", 
        "src/editables/videoEditable.js", 
        "src/editables/editableCore.js", 
        "src/tools/*.js", 
        "src/easySafeEditor.js"
    ];

    grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({
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
                src: orderFiles,
                dest: "dist/easySafeEditor.min.js"
			}
        }
	});

    require( "load-grunt-tasks" )( grunt );
    grunt.registerTask( "default", [ "uglify" ]);
}