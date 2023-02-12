var app = angular.module('myapp', ['ngRoute']);  //include route dependency

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'welcome.html',
            controller: 'welcome'
        })

        .when('/products', {
            templateUrl: 'products.html',
            controller: 'products'
        })

        .when('/brands', {
            templateUrl: 'brands.html',
            controller: 'brands'
        })

        .when('/addBrands', {
            templateUrl: 'addBrands.html'
        })


        .when('/addPoducts', {
            templateUrl: 'addPoducts.html',
            controller: 'products'
        })


        .when('/product/:pid', {
            templateUrl: 'productinfo.html',
            controller: 'productinfo'
        })

}]);


app.controller('welcome', ["$scope", function ($scope) {
    $scope.a = 10;
}]);


app.controller('products', ["$scope", "$http", function ($scope, $http) {
    $scope.brandID;
    $scope.product_name;
    $scope.model_number;
    $scope.desc;
    $scope.price;

    $scope.getAllProducts = function () {
        $http({
            url:'http://localhost/AngularJSTraining/php/getallproducts.php',
            method: 'GET',
        })
            .then(function(response) {
                $scope.products = response.data; //data is builtin variable that contains all the data received from api
            }, function (response) {
                alert("Error in AJAX Call");
            });
    };
    $scope.getAllProducts();

    $scope.AddProduct = function () {
        
        $http({
            url: 'http://localhost/AngularJS/php/addproduct.php',
            method: 'POST',
            data: {
                'product_name': this.product_name,
                'model_number': this.model_number,
                'desc': this.desc,
                'price': this.price,
                'brand_id': this.brandID
            }
        })
            .then(function (response) {
                alert(response.data); //data is builtin variable that contains all the data received from api
                $location.path("products");
                
            }, function (response) {
                alert("Error in AJAX Call");
            });
    };
}]);




app.controller('brands', ["$scope", "$http","$rootScope", function ($scope, $http,$rootScope) {
    
    $scope.brand_name ;
    $rootScope.brandID;
    $scope.getAllProducts = function () {
        $http({
            url: 'http://localhost/AngularJS/php/getAllBrands.php',
            method: 'GET',
        })
            .then(function (response) {
                $scope.brands = response.data; //data is builtin variable that contains all the data received from api
            }, function (response) {
                alert("Error in AJAX Call");
            });
    };
    $scope.getAllProducts();


    $scope.AddBrand = function () {
        
        $http({
            url: 'http://localhost/AngularJS/php/addBrand.php',
            method: 'POST',
            data : {
                "brand_name" : $scope.brand_name,
            }
        })
            .then(function (response) {
                alert(response.data); //data is builtin variable that contains all the data received from api
            }, function (response) {
                alert("Error in AJAX Call");
            });
    };
}]);


app.controller('productinfo', ["$scope", "$routeParams", "$http", function ($scope, $routeParams, $http) {
    $scope.getproductinfo = function () {
        $http({
            url: 'http://localhost/AngularJS/php/getProductById.php',
            method: 'POST',
            data: {
                'prodid': $routeParams.pid
            }
        })
            .then(function (response) {
                $scope.product = response.data[0]; //data is builtin variable that contains all the data received from api
            }, function (response) {
                alert("Error in AJAX Call");
            })
    }
    $scope.getproductinfo();

}]);