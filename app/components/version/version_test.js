'use strict';

describe('pidioApp.version module', function() {
  beforeEach(module('pidioApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
