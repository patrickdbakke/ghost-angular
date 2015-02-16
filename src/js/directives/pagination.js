'use strict';

angular.module('ghost-angular')
	.directive('pagination', function(postsService){
		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'views/directives/pagination.html',
			controller: function($scope){
				var baseFilter = {};
				_.each($scope.postsData.meta.filter, function(filterObj, filterName){
					baseFilter[filterName] = filterObj.id;
				});
				function loadPage(pageNum){
					var pageFilter = _.clone(baseFilter);
					pageFilter.page = Math.max(0, Math.min(pageNum, $scope.totalPages));
					postsService.get(pageFilter).then(function(data){
						$scope.postsData = data;
						setupPagination();
					});
				}
				$scope.previousPage = function(){
					loadPage($scope.currentPage - 1);
				};
				$scope.nextPage = function(){
					loadPage($scope.currentPage + 1);
				};
				function setupPagination(){
					$scope.currentPage = $scope.postsData.meta.pagination.page;
					$scope.totalPages = Math.ceil($scope.postsData.meta.pagination.total / $scope.postsData.meta.pagination.limit);
				}
				setupPagination();
			}
		};
	});