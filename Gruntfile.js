module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    rjson: {
      sample: {
        src: [
          'test/valid.json',
          'test/valid-2.json'
        ]
      }
    }

  });

   require('./tasks/relaxed-json')(grunt);


  // Default task(s).
  grunt.registerTask('validate', [ 'rjson']);

};