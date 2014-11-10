/*
 * grunt-relaxed-json
 * https://github.com/weblancaster/grunt-relaxed-json
 *
 * Copyright (c) 2014 Michael Lancaster
 * Licensed under the MIT license.
 */

"use strict";

var rjson = require('relaxed-json');

module.exports = function (grunt) {

  grunt.registerTask("rjson", "Validate JSON files", function () {

    var options = this.options();
    
    if (options.src != null) {
      var fileContent
        , failures = []
        , failedObj = {
            file: null,
            warning: null
          }
        , failed = 0;

      options.src.forEach(function (file, i) {
        grunt.log.ok('Validating:', file);

        fileContent = grunt.file.read(file, [{
          encoding: "utf-8"
        }]);

        try {
          rjson.parse(fileContent, {
            relaxed: options.relaxed || true,
            warnings: options.warnings || false,
            tolerant: options.tolerant || false,
            duplicate: options.duplicate || false
          });

          grunt.log.ok("No warnings!");

        } catch(e) {

          failed++;
          failedObj.file = file;
          failedObj.warning = e;

          grunt.log.error('Validation failed. \n', failedObj);
        }

      });

    }

  });
};
