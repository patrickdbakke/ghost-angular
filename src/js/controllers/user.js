'use strict';

angular.module('ghost-angular')
	.controller('UserController', function PostsController($scope, user) {
		$scope.user = user;
	});