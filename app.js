(function() {
  'use strict';

  angular
    .module('bovojon', ['ui.router'])
    .config(configFunction);


  configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configFunction($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('about', {
        url: '/',
        templateUrl: 'views/about.html'
      })
      .state('skills', {
        url: '/skills',
        templateUrl: 'views/skills.html'
      })
      .state('experience', {
        url: '/experience',
        templateUrl: 'views/experience.html'
      })
      .state('education', {
        url: '/education',
        templateUrl: 'views/education.html'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'views/projects.html'
      })
      .state('volunteer', {
        url: '/volunteer',
        templateUrl: 'views/volunteer.html'
      })
      .state('research', {
        url: '/research',
        templateUrl: 'views/research.html'
      });

  }

})();
