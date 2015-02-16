'use strict';

angular.module('ghost-angular')
	.controller('PostController', function PostsController($scope, post, $sce, $location) {
		post.html = $sce.trustAsHtml(post.html);
		post.absUrl = $location.$$absUrl.replace($location.$$url, '') + "/blog/posts" + post.url;
		$scope.encode = function(str){
			return encodeURIComponent(str);
		};
		$scope.post = post;
	});