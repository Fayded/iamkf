'use strict';

angular.module('iamkfApp')
  .controller('MainController', function ($scope, $http) {
    $http.get('projects/projects.json').success(function(data) {
    	$scope.projects = data;
  	});
  	$scope.orderProp = 'name';
});

