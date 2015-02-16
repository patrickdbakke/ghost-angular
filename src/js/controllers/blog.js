'use strict';

angular.module('ghost-angular')
	.controller('BlogController', function BlogController($scope, blog) {
		$scope.blog = blog;
	});