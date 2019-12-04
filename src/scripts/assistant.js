'use strict';

const app = angular.module('chrome-assistant', ['ngRoute', 'ngResource']);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './components/test.html',
            controller: 'test-contr',
        });
}]);

app.controller('test-contr', ['$scope', function($scope) {
    console.warn('inside the test-contr');
}]);
