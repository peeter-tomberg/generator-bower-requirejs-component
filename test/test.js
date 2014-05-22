/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;

describe('Webapp generator test', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.webapp = helpers.createGenerator(
                'bower-requirejs-component:app',
                [ '../../app', [ helpers.createDummyGenerator(), 'mocha:app' ]]
            );
            this.webapp.options['skip-install'] = true;

            done();
        }.bind(this));
    });

    it('creates expected files in non-AMD non-coffee mode', function (done) {
        var expected = [
            // Source code
            'src/Test.js',
            // Testing
            'test/unit/testSpec.js',
            'test/unit/test-main.js',
            // General
            '.gitignore',
            '.jshintrc',
            '.travis.yml',
            'bower.json',
            'karma.conf.js',
            'package.json',
            'README.md'
        ];

        helpers.mockPrompt(this.webapp, {
            componentName: 'test'
        });

        this.webapp.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

});