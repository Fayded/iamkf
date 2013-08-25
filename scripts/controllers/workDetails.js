'use strict';

angular.module('iamkfApp')
  .controller('WorkDetailsCtrl', function ($scope, $routeParams, $http) {
  	$http.get('projects/' + $routeParams.projectId + '.json').success(function(data) {
    	$scope.projects = data;
  });
});