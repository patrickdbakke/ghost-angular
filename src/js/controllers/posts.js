'use strict';

angular.module('ghost-angular')
	.controller('PostsController', function PostsController($scope, posts) {
		$scope.posts = posts;
	});