'use strict';

angular.module('ghost-angular')
    .config(function disableScrolling($uiViewScrollProvider) {
        $uiViewScrollProvider.useAnchorScroll();
    });
