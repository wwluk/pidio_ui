'use strict';

angular.module('pidioApp.version', [
  'pidioApp.version.interpolate-filter',
  'pidioApp.version.version-directive'
])

.value('version', '0.1');
