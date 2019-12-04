'use strict';
import GlobalVars from './utils/global';

const app = angular.module('chrome-assistant', ['ngRoute']);

app.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: './components/test.html',
      controller: 'test-contr'
    });
  }
]);

app.controller('test-contr', [
  '$scope',
  function($scope) {
    console.warn('inside the test-contr');
  }
]);
