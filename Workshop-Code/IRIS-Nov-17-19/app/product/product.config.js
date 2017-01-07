angular.module("product.config", [])

.config(function($stateProvider){
    $stateProvider

    .state("products", {
        abstract: true,
        templateUrl: '/app/product/templates/product-layout.html'        
    })

    .state("products.list", {
        url: '/products/list',
        views: {
            "": {
                templateUrl: '/app/product/templates/product-list.html',
                controller: 'ProductListController'
            }
        }
    })

    .state("products.edit", {
        url: '/products/edit/:id/',
        templateUrl: '/app/product/templates/product-edit.html',
        controller: 'ProductEditController'
    })


    .state("products.edit-resolve", {
        url: '/products/edit-resolve/:id/',
        templateUrl: '/app/product/templates/product-edit.html',
        controller: 'ProductEditResolveController' ,

        title: 'Product Edit',

        resolve: {
            brands: function(productService) {
                return productService.getBrands()
            },

            product: function(productService, $stateParams) {
                return productService.getProduct($stateParams['id']);
            }
        }
    })


})