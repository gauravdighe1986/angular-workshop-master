angular.module("app.config", [])

    .constant("apiEndPoint", "http://localhost:7070/delayed")

    .config(function (apiEndPoint) {
        console.log("config called");
    })

    // Key-Value Pair
    .value("AppTitle", "Amazon ProductApp")

    .run(function ($injector) {
        console.log("app.config run");
        console.log($injector.get("AppTitle"));
    })

