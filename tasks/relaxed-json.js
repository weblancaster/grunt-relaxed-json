/*
 * grunt-relaxed-json
 * https://github.com/weblancaster/grunt-relaxed-json
 *
 * Copyright (c) 2014 Michael Lancaster
 * Licensed under the MIT license.
 */

"use strict";

var fs = require('fs');
var rjson = require('relaxed-json');

module.exports = function (grunt) {

  grunt.registerMultiTask("rjson", "Validate JSON files with duplicated keys.", function () {
    
    if (this.files != null) {
      var fileContent
        , failures = []
        , failedObj = {}
        , failed = 0;

      this.filesSrc.forEach(function (file) {
        grunt.log.ok('Validating:', file);

        fileContent = grunt.file.read(file, [{
          encoding: "utf-8"
        }]);

        try {
          rjson.parse(fileContent, { 
            tolerant: true,
            duplicate: true
          });
        } catch(e) {
          failed++;
          failedObj["file"] = file;
          failedObj["message"] = e;
          failures.push(failedObj);
        }

      });

      if ( failed > 0 ) {
        grunt.log.error('Please correct the warning above \n', failures);
      } else {
        grunt.log.ok("No warnings!");
      }

    }

  });
};
