var app = angular.module('myapp',['ngRoute']);  //include route dependency


app.config(['$routeProvider',function($routeProvider){
    
    $routeProvider    
        .when('/',{
            templateUrl : 'welcome.html'
        })

        .when('/products',{
            templateUrl : 'products.html'
        })
}]);

/*
app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);
*/