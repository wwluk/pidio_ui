'use strict';

angular.module('pidioApp.basic', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/basic', {
            templateUrl: 'basic/basic.html',
            controller: 'BasicCtrl'
        });
    }])

    .controller('BasicCtrl', ['$scope', '$http', function($scope, $http) {
        var addr = 'http://172.16.0.74:8081';

        $scope.simple = function(action) {
            $http.get(addr + '/' + action).success(function (data) {
                $scope.action = action;
                $scope.status = data;
            });
        }

        $scope.simple('status');
    }]);