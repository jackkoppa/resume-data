module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // remove comments from resume_annotated.json, save output as resume.json
        stripJsonComments: {
            dev: {
                options:  {
                    whitespace: false
                },
                files: {
                    'resume.json' : 'resume_annotated.json'
                }
            },
        },
        // verify that resulting resume.json is correct syntax
        jsonlint: {
            dev: {
                src: [ 'resume.json' ],
                options: {
                    formatter: 'prose'
                }
            }
        },
        // for projects that require json saved within a JS variable,
        // task will output resume.js, with json saved within resume.data obj
        json: {
            dev: {
                options: {
                    namespace: 'resume',
                    includePath: false,
                    pretty: true,
                    processName: function() {
                        // output will be withing resume.data
                        return 'data';
                    }
                },
                src: ['resume.json'],
                dest: 'resume.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-strip-json-comments');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-json');

    grunt.registerTask('default', ['stripJsonComments','jsonlint']);
    // use for projects where only json feed required
    grunt.registerTask('compileJSON', ['stripJsonComments','jsonlint']);
    // use for projects where js object is required
    grunt.registerTask('compileJS', ['stripJsonComments','jsonlint','json']);
};