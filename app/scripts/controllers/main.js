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
    vm.nameKey = 'Nombre del Contribuyente';
    vm.dateKey = 'Número y fecha de oficio global de presunción';
    vm.init();

    function changeList(list) {
      vm.list = list;
      vm.nameKey = list === 'no-localizados' ? 'Nombre, Denominación o Razón Social' : 'Nombre del Contribuyente';
      vm.dateKey = list === 'no-localizados' ?
        'Fecha de Publicación' : 'Número y fecha de oficio global de presunción';
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
