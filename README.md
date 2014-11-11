Grunt-relaxed-json
==============

Grunt task for [relaxed-json](https://github.com/phadej/relaxed-json).
Relaxed JSON is strict superset JSON, relaxing strictness of valilla JSON

Requires grunt 0.4

### Install

    npm install grunt-relaxed-json --save-dev

### Configure

To know more about the configuration options please visit [relaxed-json](https://github.com/phadej/relaxed-json).

Add the following (multi-)task to your Gruntfile:

```ruby
rjson: {
  options: {
    src: [
      'some/file.json'
    ],
    tolerant: true,
    duplicate: true
  }
}
```

Add the following to load the task into your Gruntfile:

```ruby
grunt.loadNpmTasks('grunt-relaxed-json');
```

An error will be thrown if the JSON file contains syntax errors related to the options passed on the task

### Release History

* 2014-11-11   v1.0.0   First official release
* 2014-11-11   v1.0.1   Code refactoring

### Contributing
 
1. Fork it!
2. Create your branch: `git checkout -b my-new-branch`
3. Commit your changes: `git commit -am 'fix stuff'`
4. Push to the branch: `git push origin my-new-branch`
5. Submit a pull request


### License

The MIT License (MIT)

Copyright (c) 2014 Michael Lancaster

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
