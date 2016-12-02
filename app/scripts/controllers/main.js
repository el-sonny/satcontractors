'use strict';

/**
 * @ngdoc function
 * @name satcontractorsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the satcontractorsApp
 */
angular.module('satcontractorsApp')
  .controller('MainCtrl', function($http) {
    var vm = this;

    vm.init = init;

    vm.init();

    function init() {
      $http.get('https://raw.githubusercontent.com/spaceship-labs/listas-negras-sat/master/json/intersection.json')
        .then(function(result) {
          vm.companies = result.data;
        });
    }


  });
