module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
        jsonlint: {
            dev: {
                src: [ 'resume.json' ],
                options: {
                    formatter: 'prose'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-strip-json-comments');
    grunt.loadNpmTasks('grunt-jsonlint');

    grunt.registerTask('default', ['stripJsonComments','jsonlint']);
    grunt.registerTask('json', ['stripJsonComments','jsonlint']);
};