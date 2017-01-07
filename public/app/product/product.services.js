angular.module("product.services", [])

    .service("productService", function ($http, apiEndPoint) {
        console.log("productservice created");

        this.getProducts = function () {
            return $http
                .get(apiEndPoint + "/api/products")
                .then(function (response) {
                    return response.data;
                })
        }

        this.getProduct = function (id) {
            return $http
                .get(apiEndPoint + "/api/products/" + id)
                .then(function (response) {
                    return response.data;
                })
        }

        this.saveProduct = function (product) {
            return $http
                .put(apiEndPoint + "/api/products/" + product.id, product)
                .then(function (response) {
                    return response.date;
                })
        }
    })

    .factory("Brand", function ($resource, apiEndPoint) {
        var Brand = $resource(apiEndPoint + "/api/brands/:id");
        return Brand;                   
    })