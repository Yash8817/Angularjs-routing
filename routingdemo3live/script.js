var app = angular.module('myapp',['ngRoute']);  //include route dependency

app.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when('/',{
        templateUrl : 'welcome.html',
        controller : 'welcome'
    })

    .when('/products',{
        templateUrl : 'productData.html',
        controller : 'products'
    })

    .when('/brands',{
        templateUrl : 'brands.html'
    })

    .when('/checkout',{
        templateUrl : 'checkout.html'
    })

}]);

app.controller("products",["$scope", "$http",function($scope, $http){
    $scope.getAllProducts = function(){
        $http({
            url : 'http://localhost/AngularJSTraining/php/getallproducts.php',
            method : 'GET'    
        })
        .then(function(response){
            $scope.products = response.data; //data is builtin variable that contains all the data received from api
        },function(response){
            alert("Error in AJAX Call");
        });
    };
    $scope.getAllProducts();
}]);
