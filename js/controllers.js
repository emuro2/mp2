



var movieControllers = angular.module('movieControllers', []);


movieControllers.controller('GalleryCtrl', ['$scope', '$http','$q',
    function ($scope, $http, $q) {

        var movies = $http.get("./data/imdb250.json"),
            genres = $http.get("./data/imdbGenre.json");
        $q.all([movies, genres]).then(function(data) {
            $scope.movies = data[0]["data"];
            $scope.genres = data[1]["data"];

        });

    }]);


movieControllers.controller('ListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.movies = data;
        });

        $scope.orderProp = 'rank';
        $scope.reverse = false;

        $scope.setReverse = function(bool) {
            $scope.reverse = bool;
        };


    }]);



movieControllers.controller('DetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.movies = data;

            var max = $scope.movies.length;
            var rank = $routeParams.rank.substring(1);

            if (isNaN(rank))
                rank = 1;

            rank = Math.abs(parseInt(rank, 10) % max);
            $scope.prev = rank-1;
            $scope.next = rank+1;
            if (rank === 1)
                $scope.prev = max-1;
            else if (rank === max-1)
                $scope.next = 1;

            $scope.movie = $scope.movies[rank-1];
        });



    }]);