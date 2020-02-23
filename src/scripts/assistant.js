'use strict';
import GlobalVars from './assistant/utils/global';
import Messages from './assistant/utils/messages';
import { WebSpeech } from './assistant/utils/ws-ss-api';

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
