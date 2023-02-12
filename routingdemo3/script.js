var app = angular.module('myapp',['ngRoute']);  //include route dependency

app.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when('/',{
        templateUrl : 'welcome.html',
        controller : 'welcome'
    })

    .when('/products',{
        templateUrl : 'products.html',
        controller : 'products'
    })

    .when('/brands',{
        templateUrl : 'brands.html'
    })

    .when('/checkout',{
        templateUrl : 'checkout.html'
    })

}]);


app.controller('welcome',["$scope", function($scope){
    $scope.a = 10;
}]);


app.controller('products',["$scope", "$http", function($scope, $http){

    $scope.getAllProducts = function(){
        $http({
            url : 'http://localhost/AngularJS/php/getallproducts.php',
            method : 'GET',            
        })
        .then(function(response){
            $scope.products = response.data; //data is builtin variable that contains all the data received from api
        },function(response){
            alert("Error in AJAX Call");
        });
    };
    $scope.getAllProducts();

}]);
