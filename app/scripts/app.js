'use strict';

/**
 * @ngdoc overview
 * @name satcontractorsApp
 * @description
 * # satcontractorsApp
 *
 * Main module of the application.
 */
angular
  .module('satcontractorsApp', [
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
