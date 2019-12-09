'use strict';
import Messages from './utils/messages';
import { WebSpeech } from './utils/ws-ss-api';
import { Background } from './utils/background';

const assistant = angular.module('chrome-assistant', ['ngRoute']),
  backgroundConnecter = new Background(),
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
    $scope.queryField = '';
    $scope.welcomeMessage = messagesInstance.getPreDefinedRandomized('welcome');
    $scope.handleMicInAssistantView = () => {
      const instance = new WebSpeech('assistant-input-field', 10);
    };
    $scope.testBackgroundScript = () => {
      backgroundConnecter.TestMessagesArch();
    };
    $scope.sendMessage = () => {
      backgroundConnecter.Query($scope.queryField);
    };
  }
]);

assistant.controller('test-contr', [
  '$scope',
  function($scope) {
    console.warn('inside the test-contr');
  }
]);
