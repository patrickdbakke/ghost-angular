angular.module('templates-ghost-angular', ['views/directives/pagination.html', 'views/directives/posts.html', 'views/footer.html', 'views/header-home.html', 'views/header-page.html', 'views/page.html', 'views/post.html', 'views/posts.html', 'views/user.html']);

angular.module("views/directives/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/directives/pagination.html",
    "<nav class=\"pagination\" role=\"pagination\">\n" +
    "    <span class=\"newer-posts\" ng-click=\"previousPage()\" ng-if=\"totalPages > 1 && currentPage !== 1\">← Newer Posts</span>\n" +
    "    <span class=\"page-number\">Page {{currentPage}} of {{totalPages}}</span>\n" +
    "    <span class=\"older-posts\" ng-click=\"nextPage()\" ng-if=\"totalPages > 1 && currentPage !== totalPages\">Older Posts →</span>\n" +
    "</nav>");
}]);

angular.module("views/directives/posts.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/directives/posts.html",
    "<div>\n" +
    "    <div class=\"extra-pagination inner\">\n" +
    "        <div pagination=\"postData\"></div>\n" +
    "    </div>\n" +
    "    <article ng-repeat=\"post in postsData.posts\" class=\"post\">\n" +
    "        <header class=\"post-header\">\n" +
    "            <h2 class=\"post-title\"><a href=\"#/blog/posts/{{post.slug}}\">{{post.title}}</a></h2>\n" +
    "        </header>\n" +
    "        <section class=\"post-excerpt\">\n" +
    "            <p excerpt=\"post.html\" words=\"26\">\n" +
    "                <a class=\"read-more\" href=\"#/blog/posts{{post.slug}}\">&raquo;</a>\n" +
    "            </p>\n" +
    "        </section>\n" +
    "        <footer class=\"post-meta\">\n" +
    "            <a href=\"#/blog/users/{{post.author.slug}}\">\n" +
    "                <img class=\"author-thumb\" ng-if=\"post.author.image\" ng-src=\"{{post.author.image}}\" alt=\"Author image\" nopin=\"nopin\" />\n" +
    "                {{post.author.name}}\n" +
    "            </a>\n" +
    "            <span ng-if=\"post.tags.length > 0\">\n" +
    "                <span> on </span>\n" +
    "                <span ng-repeat=\"tag in post.tags\">\n" +
    "                    <a href=\"#/blog/tags/{{tag.slug}}\">{{tag.name}}</a>\n" +
    "                </span>\n" +
    "            </span>\n" +
    "            <time class=\"post-date\" datetime=\"{{post.date | date : 'yyyy-MM-dd'}}\">{{post.published_at | date : 'dd MMMM yyyy'}}</time>\n" +
    "        </footer>\n" +
    "    </article>\n" +
    "    <div pagination=\"postData\"></div>\n" +
    "</div>");
}]);

angular.module("views/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/footer.html",
    "<footer class=\"site-footer clearfix\">\n" +
    "    <section class=\"copyright\"><a href=\"{{blog.url}}\">{{blog.title}}</a> &copy; {{blog.date |  date : \"YYYY\"}}</section>\n" +
    "    <section class=\"poweredby\">Proudly published with <a href=\"https://ghost.org\">Ghost</a></section>\n" +
    "</footer>");
}]);

angular.module("views/header-home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/header-home.html",
    "<header class=\"main-header\" ng-style=\"{'background-image': 'url(' + blog.cover + ')'}\">\n" +
    "    <nav class=\"main-nav overlay clearfix\">\n" +
    "        <a ng-if=\"blog.logo\" class=\"blog-logo\" href=\"{{blog.url}}/\">\n" +
    "        	<img ng-src=\"{{blog.logo}}\" alt=\"Blog Logo\" />\n" +
    "        </a>\n" +
    "        <a class=\"subscribe-button icon-feed\" href=\"{{blog.url}}/rss/\">Subscribe</a>\n" +
    "    </nav>\n" +
    "    <div class=\"vertical\">\n" +
    "        <div class=\"main-header-content inner\">\n" +
    "            <h1 class=\"page-title\">{{blog.title}}</h1>\n" +
    "            <h2 class=\"page-description\">{{blog.description}}</h2>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>");
}]);

angular.module("views/header-page.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/header-page.html",
    "<header class=\"main-header post-head\" ng-style=\"{'background-image': 'url(' + blog.cover + ')'}\">\n" +
    "    <nav class=\"main-nav clearfix\" ng-class=\"{overlay: image}\">\n" +
    "        <a class=\"back-button icon-arrow-left\" href=\"{{blog.url}}/\">Home</a>\n" +
    "        <a class=\"subscribe-button icon-feed\" href=\"{{blog.url}}/rss/\">Subscribe</a>\n" +
    "    </nav>\n" +
    "</header>");
}]);

angular.module("views/page.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/page.html",
    "<div ui-view=\"header\" id=\"header\"></div>\n" +
    "<div ui-view=\"content\" id=\"content\"></div>\n" +
    "<div ui-view=\"footer\" id=\"footer\"></div>");
}]);

angular.module("views/post.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/post.html",
    "<main class=\"content\" role=\"main\">\n" +
    "\n" +
    "    <article class=\"post\">\n" +
    "\n" +
    "        <header class=\"post-header\">\n" +
    "            <h1 class=\"post-title\">{{post.title}}</h1>\n" +
    "            <section class=\"post-meta\">\n" +
    "                <time class=\"post-date\" datetime=\"{{post.date | date : 'yyyy-MM-dd'}}\">{{post.published_at | date : \"dd MMMM yyyy\"}}</time> \n" +
    "                <span ng-if=\"post.tags.length > 0\">\n" +
    "                    <span> on </span>\n" +
    "                    <span ng-repeat=\"tag in post.tags\">\n" +
    "                        <a href=\"#/blog/tags/{{tag.slug}}\">{{tag.name}}</a>\n" +
    "                    </span>\n" +
    "                </span>\n" +
    "            </section>\n" +
    "        </header>\n" +
    "\n" +
    "        <section class=\"post-content\" ng-bind-html=\"post.html\"></section>\n" +
    "        <footer class=\"post-footer\">\n" +
    "            <figure ng-if=\"post.author.image\" class=\"author-image\">\n" +
    "                <a class=\"img\" href=\"#/blog/users/{{post.author.slug}}\" ng-style=\"{'background-image': 'url(' + post.author.image + ')'}\"><span class=\"hidden\">{{post.author.name}}'s Picture</span></a>\n" +
    "            </figure>\n" +
    "\n" +
    "            <section class=\"author\">\n" +
    "                <h4><a href=\"#/blog/users/{{post.author.slug}}\">{{post.author.name}}</a></h4>\n" +
    "\n" +
    "                    <p ng-if=\"post.author.bio\">{{post.author.bio}}</p>\n" +
    "                    <p ng-if=\"!post.author.bio\">Read <a href=\"#/blog/users/{{post.author.slug}}\">more posts</a> by this author.</p>\n" +
    "                <div class=\"author-meta\">\n" +
    "                    <span ng-if=\"post.author.location\" class=\"author-location icon-location\">{{post.author.location}}</span>\n" +
    "                    <span ng-if=\"post.author.website\" class=\"author-link icon-link\">\n" +
    "                        <a href=\"{{post.author.website}}\">{{post.author.website}}</a>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </section>\n" +
    "            <section class=\"share\">\n" +
    "                <h4>Share this post</h4>\n" +
    "                <a class=\"icon-twitter\" href=\"https://twitter.com/share?text={{encode(post.title)}}&amp;url={{post.absUrl}}\"\n" +
    "                    onclick=\"window.open(this.href, 'twitter-share', 'width=550,height=235');return false;\">\n" +
    "                    <span class=\"hidden\">Twitter</span>\n" +
    "                </a>\n" +
    "                <a class=\"icon-facebook\" href=\"https://www.facebook.com/sharer/sharer.php?u={{post.absUrl}}\"\n" +
    "                    onclick=\"window.open(this.href, 'facebook-share','width=580,height=296');return false;\">\n" +
    "                    <span class=\"hidden\">Facebook</span>\n" +
    "                </a>\n" +
    "                <a class=\"icon-google-plus\" href=\"https://plus.google.com/share?url={{post.absUrl}}\"\n" +
    "                   onclick=\"window.open(this.href, 'google-plus-share', 'width=490,height=530');return false;\">\n" +
    "                    <span class=\"hidden\">Google+</span>\n" +
    "                </a>\n" +
    "            </section>\n" +
    "\n" +
    "        </footer>\n" +
    "\n" +
    "    </article>\n" +
    "\n" +
    "</main>");
}]);

angular.module("views/posts.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/posts.html",
    "<div posts=\"posts\"></div>");
}]);

angular.module("views/user.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/user.html",
    "<section class=\"author-profile inner\">\n" +
    "    <figure class=\"author-image\" ng-if=\"user.image\">\n" +
    "        <div class=\"img\" ng-style=\"{'background-image': 'url(' + user.image + ')'}\"><span class=\"hidden\">{{user.name}}'s Picture</span></div>\n" +
    "    </figure>\n" +
    "    <h1 class=\"author-title\">{{user.name}}</h1>\n" +
    "    <h2 class=\"author-bio\" ng-if=\"author.bio\">{{bio}}</h2>\n" +
    "    <div class=\"author-meta\">\n" +
    "        <span ng-if=\"author.location\" class=\"author-location icon-location\">{{user.location}}</span>\n" +
    "        <span ng-if=\"author.website\" class=\"author-link icon-link\"><a href=\"{{user.website}}\"></a></span>\n" +
    "        <span class=\"author-stats\">\n" +
    "            <i class=\"icon-stats\"></i>\n" +
    "            <span>{{user.posts.meta.pagination.total || 0}}</span>\n" +
    "            <span ng-if=\"user.posts.meta.pagination.total == 1\">post</span>\n" +
    "            <span ng-if=\"user.posts.meta.pagination.total !== 1\">posts</span>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</section>\n" +
    "<div posts=\"user.posts\"></div>");
}]);
