var movieApp = angular.module('movieApp', [
    'ngRoute',
    'movieControllers'
]);

movieApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/gallery', {
                templateUrl: 'partials/gallery.html',
                controller: 'GalleryCtrl'
            }).
            when('/list', {
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