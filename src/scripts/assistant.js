'use strict';
import GlobalVars from './utils/global';

const app = angular.module('chrome-assistant', ['ngRoute']);

app.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/test', {
        templateUrl: './components/test.html',
        controller: 'test-contr'
      })
      .when('/', {
        templateUrl: './components/view-assistant-area.html',
        controller: 'assistant-contr'
      });
  }
]);

app.controller('assistant-contr', [
  '$scope',
  function($scope) {
    console.log('inside assistant controller');
  }
]);

app.controller('test-contr', [
  '$scope',
  function($scope) {
    console.warn('inside the test-contr');
  }
]);
