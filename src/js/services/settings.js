'use strict';

angular.module('ghost-angular')
	.factory('settingsService', function($http, $q, API, postsService){
		var settings;

		function get(){
			if (settings) {
				return $q.when(settings);
			}
			return $http.get(API.domain + "/settings")
				.then(function(response){
					return response.data;
				})
				.then(function(settingsArray){
					settings = {
						url: '#/'
					};
					_.each(settingsArray, function(setting){
						settings[setting.key] = setting.value;
					});
					postsService.setPagination(parseInt(settings.postsPerPage));
					return settings;
				});
		}
		return {
			get: get
		};
	});