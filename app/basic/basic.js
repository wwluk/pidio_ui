'use strict';

angular.module('pidioApp.basic', ['ngRoute', 'pidioApp.config'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/basic', {
            templateUrl: 'basic/basic.html',
            controller: 'BasicCtrl'
        });
    }])

    .controller('BasicCtrl', ['$scope', '$http', 'BASE_URL', function($scope, $http, baseUrl) {
        $scope.simple = function(action) {
            $http.get(baseUrl + '/' + action).success(function (data) {
                $scope.action = action;
                $scope.status = data;
            });
        }

        $scope.setVolume = function() {
            var volume = $scope.volume;
            $http.post(baseUrl + '/volume/' + volume,[]).success(function(data) {
                $scope.action = "volume: " + volume
            })
        }
        

        $scope.simple('status');

        $http.get(baseUrl + '/volume').success(function(volume) {
            $scope.volume = volume;
        })

    }]);