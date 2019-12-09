'use strict';
import GlobalVars from './utils/global';
import Messages from './engine/messages';
import { WebSpeech } from './engine/ws-ss-api';
import { Background } from './engine/background';

const assistant = angular.module('chrome-assistant', ['ngRoute']),
  messagesInstance = new Messages();

assistant.config([
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

assistant.controller('assistant-contr', [
  '$scope',
  function($scope) {
    $scope.welcomeMessage = messagesInstance.getPreDefinedRandomized('welcome');
    $scope.handleMicInAssistantView = () => {
      const instance = new WebSpeech('assistant-input-field', 10);
    };
  }
]);

assistant.controller('test-contr', [
  '$scope',
  function($scope) {
    console.warn('inside the test-contr');
  }
]);
