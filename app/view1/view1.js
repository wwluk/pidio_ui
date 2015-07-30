'use strict';

angular.module('pidioApp.view1', ['ngRoute', 'pidioApp.config'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$http', 'BASE_URL', function ($scope, $http, baseUrl) {
        $scope.getPlaylist = function () {
            $http.get(baseUrl + "/playlist").success(function (data) {
                $scope.playlist = data.playlist;
            })
        }

        $scope.play = function (position) {
            $http.get(baseUrl + "/play/" + position);
        }

        $scope.addRadio = function () {
            var radioUri = $scope.enteredRadioUri;
            if (isEmpty(radioUri)) {
                return;
            }
            $http.post(baseUrl + "/playlist/add", radioUri).success(function (data) {
                $scope.enteredRadioUri = "";
                $scope.getPlaylist();
            });
        }


        $scope.getPlaylist();
    }]);

function isEmpty(str) {
    return !str || str.length == 0;
}