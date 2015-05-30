'use strict';

// Declare app level module which depends on views, and components
angular.module('pidioApp', [
  'ngRoute',
  'pidioApp.basic',
  'pidioApp.view1',
  'pidioApp.view2',
  'pidioApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/basic'});
}]);
