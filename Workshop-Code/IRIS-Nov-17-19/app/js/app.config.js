angular.module("app.config", [])


.value("apiEndPoint", "http://localhost:7070")


.config(function($stateProvider, $locationProvider){

    //$locationProvider.html5Mode(true);

    $stateProvider
    .state("home", {
        url: '',
        template: '<h2>Home Page</h2>'
    })

    .state("contact", {
        url: '/contact',
        templateUrl: '/app/templates/contact.html',
        controller: function($scope) {
            $scope.title = "About us";
        }
    })

    .state("discount", {
        url: '/discount',
        template: '<p> Offer : {{discount}} </p>',
        controller: 'DiscountController'
    })

})