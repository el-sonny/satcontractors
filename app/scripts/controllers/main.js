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

    vm.changeList = changeList;
    vm.init = init;
    vm.list = 'presuntos';

    vm.init();

    function changeList(list) {
      vm.list = list;
      vm.init();
    }

    function init() {
      var url = 'https://raw.githubusercontent.com/spaceship-labs/listas-negras-sat/master/json/' +
        vm.list +
        '-intersection.json';
      $http.get(url)
        .then(function(result) {
          vm.companies = result.data;
        });
    }


  });
