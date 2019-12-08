'use strict';
import GlobalVars from './utils/global';
import Messages from './engine/messages';

const app = angular.module('chrome-assistant', ['ngRoute']),
  messagesInstance = new Messages();

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
    $scope.welcomeMessage = messagesInstance.getPreDefinedRandomized('welcome');
  }
]);

app.controller('test-contr', [
  '$scope',
  function($scope) {
    console.warn('inside the test-contr');
  }
]);
