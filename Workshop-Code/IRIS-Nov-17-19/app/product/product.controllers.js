angular.module("product.controllers", [])

.controller("ProductListController", function($scope, productService, $filter){
    productService.getProducts()
    .then(function(products){
        $scope.products = products;

        var filterFunc = $filter("byYear");

        var filteredList = filterFunc(products, 2012);
        console.log("filtered lenght ", filteredList.length);
        
    })
})

.controller("ProductEditController", function($scope, $stateParams, productService, $q){
    var id = $stateParams['id'];

    $scope.loading = true;

    if (id) {
        console.log("id", id);

        $q.all([
            productService.getProduct(id),
            productService.getBrands()
        ])
        .then(function(results){
            $scope.product = results[0];
            $scope.brands = results[1];
            $scope.loading = false;
        })
        .catch(function(err) {
            console.error(err);
             $scope.loading = false;
        })
    }
    /*
    productService.getBrands()
    .then(function(brands){
        $scope.brands = brands;
    })*/

    $scope.saveProduct = function() {

        console.log("save ", $scope.product);

        
    }
})


.controller("ProductEditResolveController", function($scope, product, brands){
    $scope.product = product;
    $scope.brands = brands;
    
})