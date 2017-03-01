"use strict";angular.module("satcontractorsApp",["ngAnimate","ngAria","ngResource","ngRoute","ngSanitize","ngMaterial"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"vm"}).otherwise({redirectTo:"/"})}]),angular.module("satcontractorsApp").controller("MainCtrl",["$http",function(a){function b(a){d.list=a,d.nameKey="no-localizados"===a?"Nombre, Denominación o Razón Social":"Nombre del Contribuyente",d.dateKey="no-localizados"===a?"Fecha de Publicación":"Número y fecha de oficio global de presunción",d.init()}function c(){var b="https://raw.githubusercontent.com/spaceship-labs/listas-negras-sat/master/json/"+d.list+"-intersection.json";a.get(b).then(function(a){d.companies=a.data})}var d=this;d.changeList=b,d.init=c,d.list="presuntos",d.nameKey="Nombre del Contribuyente",d.dateKey="Número y fecha de oficio global de presunción",d.init()}]),angular.module("satcontractorsApp").run(["$templateCache",function(a){a.put("views/main.html",'<md-toolbar layout="row" class="md-hue-3" layout-wrap> <div flex class="md-toolbar-tools"> <span>La lista negra de contratistas del gobierno</span> </div> <div> <md-button md-class="primary" ng-disabled="vm.list==&quot;presuntos&quot;" ng-click="vm.changeList(&quot;presuntos&quot;)">Presuntos</md-button> <md-button md-class="primary" ng-disabled="vm.list==&quot;definitivos&quot;" ng-click="vm.changeList(&quot;definitivos&quot;)">Definitivos</md-button> <md-button md-class="primary" ng-disabled="vm.list==&quot;no-localizados&quot;" ng-click="vm.changeList(&quot;no-localizados&quot;)">no-localizados</md-button> </div> </md-toolbar> <md-content> <md-list flex> <md-subheader class="md-no-sticky">Contribuyentes que <span ng-if="vm.list==&quot;presuntos&quot;">presuntamente</span> <span ng-if="vm.list==&quot;definitivos&quot;">definitivamente</span> simulan operaciones y emiten facturas apócrifas y tienen contratos con el gobierno.</md-subheader> <md-list-item class="md-3-line" ng-repeat="company in vm.companies"> <div class="md-list-item-text" layout="column"> <h3>{{ company.record[vm.nameKey] }}</h3> <h4>{{company.record[vm.dateKey]}}</h4> <p ng-repeat="result in company.results"><a ng-href="http://contratobook.org/#/contratos?E{{result.id}}">{{ result.proveedor_contratista }}</a></p> <p>{{result}}</p> </div> </md-list-item> </md-list> </md-content>')}]);