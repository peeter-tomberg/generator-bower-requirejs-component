define(function (require) {
    'use strict';

    var <%= componentNameCapitalized %> = require('<%= componentNameCapitalized %>/<%= componentNameCapitalized %>');

    describe('<%= componentName %>', function () {

        it('should be an object', function () {
            expect(<%= componentNameCapitalized %> instanceof Object).toBe(true);
        });

    });

});