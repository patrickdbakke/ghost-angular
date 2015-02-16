'use strict';

angular.module('ghost-angular')
	.constant('API', {
		domain: '/ghost/api/v0.1'
	})
	.config(function configureStates($logProvider, $stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/blog/posts');
		$urlRouterProvider.when('/', [function() {
			return '/blog/posts';
		}]);
		
		$stateProvider
			.state('blog', {
				url: '/blog',
				abstract: false,
				controller: 'BlogController',
				templateUrl: 'views/page.html',
				resolve: {
					blog: ['settingsService', function(settingsService){
						return settingsService.get();
					}]
				}
			})
			.state('blog.posts', {
				url: '/posts',
				views:{
					'header': {
						templateUrl: 'views/header-home.html',
					},
					'content':{
						controller: 'PostsController',
						templateUrl: 'views/posts.html',
					},
					'footer': {
						templateUrl: 'views/footer.html',
					},
				},
				resolve: {
					posts: ['postsService', function(postsService){
						return postsService.get();
					}]
				}
			})
			.state('blog.posts.slug', {
				url:'/:slug',
				views:{
					'header@blog': {
						templateUrl: 'views/header-page.html',
					},
					'content@blog':{
						controller: 'PostController',
						templateUrl: 'views/post.html',
					}
				},
				resolve: {
					post: ['$stateParams', 'postsService', function($stateParams, postsService){
						return postsService.get($stateParams.slug);
					}],
				}
			})
			.state('blog.user', {
				url: '/users/:slug',
				views:{
					'header': {
						templateUrl: 'views/header-page.html',
					},
					'content':{
						controller: 'UserController',
						templateUrl: 'views/user.html',
					},
					'footer': {
						templateUrl: 'views/footer.html',
					},
				},
				resolve: {
					user: ['$stateParams', 'usersService', function($stateParams, usersService){
						return usersService.get($stateParams.slug, true);
					}]
				}
			})
			.state('blog.tag', {
				url: '/tags/:slug',
				views:{
					'header': {
						templateUrl: 'views/header-page.html',
					},
					'content':{
						controller: 'PostsController',
						templateUrl: 'views/posts.html',
					},
					'footer': {
						templateUrl: 'views/footer.html',
					},
				},
				resolve: {
					posts: ['$stateParams', 'postsService', function($stateParams, postsService){
						return postsService.get({tag: $stateParams.slug});
					}]
				}
			});
	});