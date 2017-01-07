"use strict";

angular.module("productApp", [
    "ui.router",

    "app.config",
    "app.cache-service",
    "app.controllers",
    "app.directives",
    "product.module"
 ])


.config(function(cacheServiceProvider){
    cacheServiceProvider.storage = 'Session';
    //cacheServiceProvider.setStorageEngine("Session");
})

.run(function(apiEndPoint, $rootScope){
    console.log("run called", apiEndPoint);
    $rootScope.title = "Angular App";
})

.run(function($injector){
    var apiEndPointValue = $injector.get("apiEndPoint");
    console.log("injector value ", apiEndPointValue);
    var rootScope = $injector.get("$rootScope");
    rootScope.title = "Injected Title";

    var countryService = $injector.get("countryService");

    console.log("List ", countryService.getCountries());

})

.run(function(){
    console.log("run 2 called");
})

.config(function(MODE){
    console.log("config 1", MODE);
})


.config(function(){
    console.log("config 2");
})

.constant("MODE", "DEV")

.run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', 
        function(event, toState){ 
            console.info("state change start ", toState.name)

            $rootScope.loading = true;
            $rootScope.viewName = toState.title || toState.name;
    })

    $rootScope.$on('$stateChangeSuccess', 
    function(event, toState){  
        console.info("state change done ", toState.name)


            $rootScope.loading = false;
            $rootScope.viewName = '';
    })

})