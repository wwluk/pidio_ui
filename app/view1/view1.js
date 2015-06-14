'use strict';

angular.module('pidioApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$http', function ($scope, $http) {
        var addr = 'http://172.16.0.74:8081';

        $scope.getPlaylist = function () {
            $http.get(addr + "/playlist").success(function (data) {
                $scope.playlist = data.playlist;
            })
        }

        $scope.play = function (position) {
            $http.get(addr + "/play/" + position);
        }

        $scope.addRadio = function () {
            var radioUri = $scope.enteredRadioUri;
            if (isEmpty(radioUri)) {
                return;
            }
            $http.post(addr + "/playlist/add", radioUri).success(function (data) {
                $scope.enteredRadioUri = "";
                $scope.getPlaylist();
            });
        }


        $scope.getPlaylist();
    }]);

function isEmpty(str) {
    return !str || str.length == 0;
}