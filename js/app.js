


var movieApp = angular.module('movieApp', [
    'ngRoute',
    'ngAnimate',
    'movieControllers'
]);


movieApp.run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {
        $(document).foundation();

        $(".top-bar-section ul ")

    });
});

movieApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/gallery', {
                templateUrl: 'partials/gallery.html',
                controller: 'GalleryCtrl'
            }).
            when('/search', {
                templateUrl: 'partials/list.html',
                controller: 'ListCtrl'
            }).
            when('/detail/:rank', {
                templateUrl: 'partials/details.html',
                controller: 'DetailCtrl'
            }).
            otherwise({
                redirectTo: '/gallery'
            });
    }]);

