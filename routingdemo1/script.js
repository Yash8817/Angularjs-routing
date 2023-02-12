var app = angular.module('myapp',['ngRoute']);  //include route dependency

app.config(['$routeProvider',function($routeProvider){
    
    $routeProvider
    .when('/',{
        templateUrl : 'welcome.html',
        controller : 'welcome'
    })

    .when('/products',{
        templateUrl : 'products.html'
    })

}]);


app.controller('welcome',["$scope", function($scope){
    $scope.a = 10;
}]);