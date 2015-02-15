angular.module('templates-ghost-angular', ['views/about.html', 'views/loaders.html', 'views/social.html']);

angular.module("views/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/about.html",
    "<div class=\"about\">\n" +
    "	<div class=\"item fa fa-info\" ng-click=\"toggle()\"></div>\n" +
    "	<div class=\"paragraph\">\n" +
    "		<p>\n" +
    "			All of these loaders were built with a single <span class=\"code\">&lt;div/&gt;</span> element.\n" +
    "		</p>\n" +
    "		<p>\n" +
    "			Using a single element made this a fun \"CSS Golf\" project. Each animation was achieved using only <span class=\"code\">::before</span> and <span class=\"code\">::after</span> pseudo selectors, plus appropriate manipulations of shadows, borders, gradients, etc.\" \n" +
    "		</p>\n" +
    "		<p>\n" +
    "			These animations are licensed <a target=\"_blank\" href=\"https://github.com/patrickdbakke/loader/blob/master/LICENSE\">MIT</a>. The source is available as SCSS <span class=\"code\">@mixins</span> on <a target=\"_blank\" href=\"https://github.com/patrickdbakke/loader\">Github</a>.\n" +
    "		</p>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("views/loaders.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/loaders.html",
    "<div class=\"loaders\">\n" +
    "    <div class=\"wrap\">\n" +
    "        <div class=\"loader loader-{{activeLoader.name}}\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"dots\">\n" +
    "    	<div class=\"dot\" ng-repeat=\"l in loaders\"  ng-class=\"{active:l.active}\" ui-sref=\"loader.id({id: l.name})\"></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/social.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/social.html",
    "<div class=\"social\">\n" +
    "	<a class=\"item me\" href=\"/\">\n" +
    "		<span class=\"hidden\">home</span>\n" +
    "	</a>\n" +
    "	<a class=\"item fa fa-linkedin\" href=\"{{linkedin}}\">\n" +
    "		<span class=\"hidden\">linkedin</span>\n" +
    "	</a>\n" +
    "	<a class=\"item fa fa-github\" href=\"{{github}}\">\n" +
    "		<span class=\"hidden\">github</span>\n" +
    "	</a>\n" +
    "	<div class=\"break\"></div>\n" +
    "	<a class=\"item fa fa-twitter\" href=\"{{twitter}}\" onclick=\"window.open(this.href, 'twitter-share', 'width=550,height=235');return false;\">\n" +
    "		<span class=\"hidden\">Twitter</span>\n" +
    "	</a>\n" +
    "	<a class=\"item fa fa-facebook\" href=\"{{facebook}}\" onclick=\"window.open(this.href, 'facebook-share','width=580,height=296');return false;\">\n" +
    "		<span class=\"hidden\">Facebook</span>\n" +
    "	</a>\n" +
    "	<a class=\"item fa fa-google-plus\" href=\"{{gplus}}\" onclick=\"window.open(this.href, 'google-plus-share', 'width=490,height=530');return false;\">\n" +
    "		<span class=\"hidden\">Google+</span>\n" +
    "	</a>\n" +
    "</div>");
}]);
