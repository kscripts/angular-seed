'use strict';

angular.module('myApp.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view', {
    templateUrl: 'view2/view.html',
    controller: 'ViewCtrl'
  });
}])

.controller('ViewCtrl', [function() {

}]);