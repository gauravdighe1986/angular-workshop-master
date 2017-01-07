angular.module("productApp", [
    // Depedencies
    "ui.router",
    "ngResource",
    "app.config",
    "app.controllers",

    "product.module"
])
    .run(function ($rootScope) {
        console.log("run 1");
        $rootScope.appName = "Product App";
    })

    .run(function ($rootScope, AppTitle) {
        console.log("run 2", AppTitle);
        $rootScope.appName = AppTitle;
    })

    .config(function ($stateProvider) {
        $stateProvider
            .state("home", {
                url: "", //localhost:3000
                template: "<h2> Home Page </h2>"
            })

            .state("about", {
                url: "/about",
                template: "<h2> About Page </h2>"
            })

    })