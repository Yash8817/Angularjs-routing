var app = angular.module('myapp',['ngRoute']);  //include route dependency

app.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when('/',{
        templateUrl : 'welcome.html',
        controller : 'welcome'
    })

    .when('/products',{
        templateUrl : 'products.html',
        controller : 'products',
        caseInsensitiveMatch: true
    })

    .when('/product/:pid',{
        templateUrl : 'productinfo.html',
        controller : 'productinfo'
    })

    .when('/brands',{
        templateUrl : 'brands.html'
    })

    .when('/checkout',{
        templateUrl : 'checkout.html'
    })

    .when('/placeorder',{
        redirectTo : '/checkout'
    })

    .otherwise({
        templateUrl : 'error.html'
    })

}]);


app.controller('welcome',["$scope", function($scope){
    $scope.a = 10;
}]);


app.controller('products',["$scope", "$http", function($scope, $http){

    $scope.getAllProducts = function(){
        $http({
            url : 'http://localhost/AngularJSTraining/php/getallproducts.php',
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


app.controller('productinfo',["$scope", "$routeParams", "$http", function($scope, $routeParams, $http){   

    $scope.getproductinfo = function(){
        $http({
            url : 'http://localhost/AngularJSTraining/php/getproduct.php', 
            method : 'POST',                    
            data : {
                'prodid' : $routeParams.pid
            }
        })
        .then(function(response){
            $scope.product = response.data[0]; //data is builtin variable that contains all the data received from api
        },function(response){
            alert("Error in AJAX Call");        
        })
    }

    $scope.getproductinfo();

}]);