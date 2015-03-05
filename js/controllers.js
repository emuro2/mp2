var demoApp = angular.module('movieApp', []);

movieApp.controller('movieController', ['$scope', '$http', function($scope, $http) {
   $http.get('public/data/cs498rk.json').success(function(data) {
     $scope.courseInfo = data;
     $scope.artistOrder = 'name';
   });
}]);