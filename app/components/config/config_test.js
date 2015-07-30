'use strict';

describe('pidioApp.config module', function() {
    beforeEach(module('pidioApp.config'));

    describe('config service', function() {
        it('should return rest addr', inject(function(BASE_URL) {
            expect(BASE_URL).toEqual('http://172.16.0.74:8081');
        }));
    });
});
