'use strict';

angular.module('ghost-angular')
	.factory('postsService', function($http, $q, API){
		var limit = 5;
		var usersCache = {};
		function getUsersForPosts(postsData){
			var deferred = $q.defer();
			var usersPromise = deferred.promise;
			_.each(postsData.posts, function(post){
				usersPromise = usersPromise.then(function(){
					var userPromise;
					if (usersCache[post.author]) {
						userPromise = $q.when(usersCache[post.author]);
					} else {
						userPromise = $http.get(API.domain + "/users/" + post.author)
							.then(function(response){
								var user = response.data.users[0];
								return user;
							});
					}
					return userPromise.then(function(user){
						post.author = user;
						usersCache[user.id] = user;
						return post;
					});
				});
			});
			deferred.resolve(true);
			return usersPromise.then(function(){
				return postsData;
			});
		}
		function getSinglePost(id, skipAuthor){
			var data = {
				include: 'tags'
			};
			var promise = $http({
					method: 'GET',
					url: API.domain + '/posts/slug/' + id,
					params: data
				})
				.then(function(response){
					return response.data;
				});
			if (!skipAuthor) {
				promise = promise.then(getUsersForPosts);
			}
			return promise.then(function(data){
					return data.posts[0];
				});
		}
		function getAllPosts(filter, skipAuthor){
			var data = {
				include: 'tags'
			};
			data = _.extend({limit: limit}, data, filter);
			var promise = $http({
					method: 'GET',
					url: API.domain + '/posts/', 
					params: data
				})
				.then(function(response){
					return response.data;
				});
			if (!skipAuthor) {
				promise = promise.then(getUsersForPosts);
			}
			return promise;
		}

		function get(idOrFilter, skipAuthor){
			if (typeof idOrFilter === 'string') {
				return getSinglePost(idOrFilter, skipAuthor);
			} else {
				return getAllPosts(idOrFilter, skipAuthor);
			}
		}
		function setPagination(num){
			limit = num;
		}
		return {
			get: get,
			setPagination: setPagination
		};
	});