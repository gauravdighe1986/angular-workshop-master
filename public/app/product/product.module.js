angular.module("product.module", [
    "product.controllers",
    "product.services"
])

    // TODO: product.config.js
    .config(function ($stateProvider) {
        $stateProvider
            .state("product-list", {
                url: "/products/list",
                templateUrl: "/app/product/product-list.html",
                controller: "ProductListController"
            })

            .state("product-edit", {
                url: "/products/edit/:id",
                templateUrl: "/app/product/product-edit.html",
                controller: "ProductEditController"
            })
    })

    // TODO: product.filters.js
    // ng-repeat="product in products | byYear:2010"
    .filter("byYear", function () {
        return function (inputs, year) {
            if (!inputs)
                return;
            if (!year)
                return inputs;

            var results = [];

            angular.forEach(inputs, function (product) {
                if (product.year == year) {
                    results.push(product);
                }
            })
            return results;
        }
    })

    // TODO: product.directives.js
    .directive("productWidget", function () {
        return {
            restrict: 'E',
            templateUrl: '/app/product/product-widget.html',
            replace: true,
            scope: {
                "product": "="
            },
            link: function (scope, elem, attrs) {
                elem.bind("mouseenter", function () {
                    console.log("mouseenter")
                    elem.addClass("highlight")
                })

                elem.bind("mouseleave", function () {
                    console.log("mouseleave")
                    elem.removeClass("highlight")
                })
            },
            controller: function ($scope) {

            }
        }
    })

    .directive("validateYear", function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ngModel) {
                ngModel.$validators.validYear = function (modelValue, viewValue) {
                    var value = modelValue || viewValue;
                    var year = parseInt(value);
                    if (year >= 2010 && year <= 2017) {
                        return true;
                    }
                    return false;
                }
            }
        }
    })

    .component("contacts", {
        templateUrl: '/app/product/contacts.html',
        controller: function () {
            this.contactList = [
                'Mumbai',
                'Banglore'
            ]
        }
    })