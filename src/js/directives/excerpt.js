'use strict';

angular.module('ghost-angular')
	.directive('excerpt', function(){
		function whiteSpaceIndexOf(string, nthMatch) {
			var index = 0;
			var times = 0;
			while(times < nthMatch && index !== -1){
				index += string.substring(index || 0).search(/\s/g) + 1;
				times++;
			}
			return index;
		}
		function htmlExcerpt(str, count ) {
			var div = document.createElement('div');
			div.innerHTML = str;
			function track(el, parent) {
				if (count > 0) {
					var len = el.data.length;
					count -= len;
					if( count <= 0 ) {
						el.data = el.substringData( 0, el.data.length + count ) + "...";
					}
					return el;
				} else {
					parent.removeChild(el);
				}
			}
			function walk(parent, trackFn) {
				var node = parent.firstChild;
				while (node) {
					var next = node.nextSibling;
					if(node.tagName === 'HR'){
						parent.removeChild(node);
					}
					if(node.nodeType === 3) {
						trackFn(node, parent);
					} else if (node.nodeType === 1 && node.childNodes && node.childNodes[0]) {
						if(count <= 0 ){
							parent.removeChild(node);
						} else{
							walk(node, trackFn);
						}
					}
					node = next;
				}
			}
			walk(div, track);
			return div.innerHTML;
		}
		function makeExcerpt(content, numWords){
			var div = document.createElement('div');
			div.innerHTML = '<div>' + content + '</div>';
			var plainText = div.innerText;
			var splitIndex = whiteSpaceIndexOf(plainText, numWords - 1);
			var excerpt = htmlExcerpt(content, splitIndex - 1);
			return excerpt;
		}
		return {
			restrict: 'EA',
			replace:true,
			controller: function(){

			},
			link: function($scope, $element, $attrs){
				var numWords = parseInt($attrs.words, 10) || 100;
				var content = $scope.$eval($attrs.excerpt) || '';
				var excerpt = makeExcerpt(content, numWords);
				$element.html(excerpt);
			}
		};
	});