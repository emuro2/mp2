//var movieApp = angular.module('movieApp',[]);
//
//movieApp.controller('movieController', ['$scope', '$http', function($scope, $http) {
//   $http.get('./data/imdb250.json').success(function(data) {
//     $scope.movies = data;
//   });
//}]);




var movieControllers = angular.module('movieControllers', []);


movieControllers.controller('GalleryCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.movies = data;
        });

        //$scope.orderProp = 'age';
    }]);


movieControllers.controller('ListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.movies = data;
        });

        //$scope.orderProp = 'age';
    }]);



movieControllers.controller('DetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.movies = data;

            var max = $scope.movies.length;
            var rank = $routeParams.rank.substring(1);

            if (isNaN(rank))
                rank = 1;

            rank = parseInt(rank, 10);
            $scope.prev = 0;
            $scope.next = 0;

            if(rank-1 <= 1)
                $scope.prev = 1;
            else
                $scope.prev = rank-1;

            if(rank >= max-1)
                $scope.next = max-1;
            else
                $scope.next = rank+1;


            $scope.movie = $scope.movies[rank-1];
        });



    }]);