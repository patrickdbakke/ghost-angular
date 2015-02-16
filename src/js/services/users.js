'use strict';

angular.module('ghost-angular')
	.factory('usersService', function($http, $q, API, postsService){
		var usersCache = {};
		function getPosts(user){
			var deferred = $q.defer();
			postsService.get({author: user.slug}, true)
				.then(function(posts){
					user.posts = posts;
					deferred.resolve(user);
				});
			return deferred.promise;
		}
		function cache(user){
			usersCache[user.id] = user;
			usersCache[user.slug] = user;
			return user;
		}
		function getBySlug(slug, includePosts){
			var promise = $http.get(API.domain + "/users/slug/" + slug)
				.then(function(response){
					var user = response.data.users[0];
					return user;
				});
			if (includePosts) {
				promise = promise.then(getPosts);
			}
			promise = promise.then(cache);
			return promise;
		}
		function getById(id, includePosts){
			var promise = $http.get(API.domain + "/users/" + id)
				.then(function(response){
					var user = response.data.users[0];
					return user;
				});
			if (includePosts) {
				promise = promise.then(getPosts);
			}
			promise = promise.then(cache);
			return promise;
		}
		function get(id, includePosts){
			if (usersCache[id] && !includePosts) {
				return $q.when(usersCache[id]);
			}
			if (_.isNumber(id)) {
				return getById(id, includePosts);
			} else {
				return getBySlug(id, includePosts);
			}
		}
		return {
			get: get
		};
	});