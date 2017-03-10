// most time this file no need to change. just update package.json and profile.js
  require('longjohn');

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-dojo');
  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dojo: {
            build: {
                options: {
                    load: 'build',
                    profile: './profile.js',
                    packages: ['.']
                }
            },
            options: {
                dojo: './bower_components/dojo/dojo.js',
                // Path to dojo.js file in dojo source
                action: 'release',
                // Optional: Build action, release, help. clean has been deprecated.
                cwd: './',
                // Directory to execute build within
                basePath: './'
            }
        },
    });
    grunt.registerTask('build', [
        'dojo:build',
    ]);
};