angular.module("product.services", [])

    .service("productService", function ($http, apiEndPoint, $q) {
        console.log("productservice created");

        this.getProducts = function () {

            // Caching Session Storage - Not available per tab basis
            var storage = window.sessionStorage;

            // Caching Local Storage - Available per tab basis
            var storage = window.localStorage;
            
            // Synchronous call, so we injected $q at service level, so our cpntroller wont break
            var productData = storage.getItem("products");
            if (productData) {
                console.log("serving from cache");
                return $q.resolve(JSON.parse(productData));
            }

            console.log("serving from server");

            return $http
                .get(apiEndPoint + "/api/products")
                .then(function (response) {
                    console.log("cache updated");
                    storage.setItem("products", JSON.stringify(response.data)); // stores in storage
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