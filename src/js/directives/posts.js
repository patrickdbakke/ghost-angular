'use strict';

angular.module('ghost-angular')
	.directive('posts', function(){
		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'views/directives/posts.html',
			scope: {
				postsData: '=posts'
			}
		};
	});