angular.module("product.controllers", [])

    .controller("ProductListController", function ($scope, productService) {
        console.log("productListController called");
        productService.getProducts()
            .then(function (products) {
                $scope.products = products;
            })
    })

    .controller("ProductEditController", ["$scope", "productService", "$stateParams", "$state", "Brand", "$q",
        function ($scope, productService, $stateParams, $state, Brand, $q) {
            console.log($stateParams.id);


            // if ($stateParams.id) {
            //     //GET /api/products/id
            //     productService.getProduct($stateParams.id)
            //         .then(function (product) {
            //             $scope.product = product;
            //         })

            //     //GET /api/brands
            //     Brand.query().$promise
            //         .then(function (brands) {
            //             $scope.brands = brands;
            //         })
            // }
            // $scope.saveProduct = function () {
            //     productService.saveProduct($scope.product)
            //         .then(function () {
            //             //redirect to list page
            //             $state.go("product-list")
            //         })
            // }

            $q.all([
                productService.getProduct($stateParams.id),
                Brand.query().$promise
            ]).then(function (results) {
                $scope.product = results[0];
                $scope.brands = results[1];
            })
        }])