'use strict';

angular.module('ghost-angular')
	.config(function configureStates($logProvider, $stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('posts', {
				url: '/posts',
				views:{
					content:{
						controller: 'PostsController',
						templateUrl: 'views/posts.html',
					}
				},
				resolve: {
					
				}
			})
			.state('post.id', {
				url:'/:id',
				views:{
					content:{
						controller: 'PostsController',
						templateUrl: 'views/posts.html',
					}
				},
				resolve: {
					
				}
			});
	});