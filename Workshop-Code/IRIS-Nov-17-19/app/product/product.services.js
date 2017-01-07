angular.module("product.services", [])


.service("productService", function($http, apiEndPoint, cacheService, $q){
    console.log("productservice created");

    this.getProducts = function() {

        var localProducts = cacheService.getObject("products");
        if (localProducts) {
            console.log("serving from cache");
            //error return localProducts
            return $q.resolve(localProducts);
        }

        console.log("serving products from server");

        return   $http
            .get(apiEndPoint + "/api/products")
            .then(function(response){ //then return a promise
                console.log("got response", response);

                cacheService.setObject("products", response.data);

                return response.data;
            })
    }

    //GET /api/products/1

    this.getProduct = function(id) {
        return $http.get(apiEndPoint + "/api/products/" + id)
        .then(function(response) {
            return response.data;
        } )
    }


    this.getBrands = function() {
        return $http.get(apiEndPoint + "/api/brands")
        .then(function(response) {
            return response.data;
        } )
    }




})