module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    rjson: {
      options: {
        src: [
          'test/valid.json'
        ],
        tolerant: true,
        duplicate: true
      }
    }

  });

  require('./tasks/relaxed-json')(grunt);

  // Default task(s).
  grunt.registerTask('validate', [ 'rjson']);

};