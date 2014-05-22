'use strict';
var yeoman = require('yeoman-generator');

var RequirejsAmdComponentGenerator = yeoman.generators.Base.extend({

    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },
    askFor: function () {
        var done = this.async();

        var prompts = [
            {
                name: 'componentName',
                message: 'What do you want to call your component?'
            }
        ];

        this.prompt(prompts, function (props) {
            this.componentName = props.componentName.toLowerCase();
            this.componentNameCapitalized = this.componentName.charAt(0).toUpperCase() +  this.componentName.slice(1);
            done();
        }.bind(this));
    },

    general : function () {

        this.template('bower.json', 'bower.json');
        this.template('README.md', 'README.md');

        this.copy('package.json', 'package.json');
        this.copy('karma.conf.js', 'karma.conf.js');
        this.copy('_travis.yml', '.travis.yml');
        this.copy('_jshintrc', '.jshintrc');
        this.copy('_gitignore', '.gitignore');

    },

    src: function () {

        this.mkdir('src');
        this.template('src/src.js', 'src/' + this.componentNameCapitalized + '.js');
    },

    test: function () {
        this.template('test/unit/test-main.js', 'test/unit/test-main.js');
        this.template('test/unit/srcSpec.js', 'test/unit/' + this.componentName + 'Spec.js');
    }
});

module.exports = RequirejsAmdComponentGenerator;
