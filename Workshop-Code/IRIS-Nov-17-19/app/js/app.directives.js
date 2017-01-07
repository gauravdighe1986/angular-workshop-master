angular.module("app.directives", [])

.run(function($rootScope){
    $rootScope.address = {
        city: 'Noida',
        state: 'UP'
    }

    $rootScope.mainAddress = {
        city: 'Noida',
        state: 'UP'
    }


    $rootScope.branchAddress = {
        city: 'Bangalore',
        state: 'KA'
    }
})

.directive("contactAddress", function() {
    return {
        restrict: 'EA',
        scope: {
            "address": "="
        },
        replace: true,
        templateUrl: '/app/templates/address.html',
        controller: function($scope, $rootScope) {
            if ($scope === $rootScope) {
                console.log("$scope === $rootScope")
            } else 
            {
                 console.log("$scope !== $rootScope")
            }

            $scope.pincode = Math.ceil(Math.random() * 10000)
            
            /*$scope.address = {
                city: 'Bangalore',
                state: 'KA',
                pincode: Math.ceil(Math.random() * 10000)
            }*/
        },

        link: function(scope, elem,  attrs) {

            console.log("attribute ", attrs.id);

            elem.bind("mouseenter", function(){
                elem.addClass("address");
            })

             elem.bind("mouseleave", function(){
                elem.removeClass("address");
            })

            elem.bind("click", function(){

                 scope.pincode = Math.ceil(Math.random() * 10000);
                 scope.$apply();
            })

             var childElement = angular.element(elem[0].querySelector('.info'));

            //childElement.html("<span> Contact us </span>");
            childElement.text("Contact us");
        }
    }
})


/*
.directive("contactAddress", function() {
    return {
        restrict: 'EA',
        scope: true,
        //replace: true,
        templateUrl: '/app/templates/address.html',
        controller: function($scope, $rootScope) {
            if ($scope === $rootScope) {
                console.log("$scope === $rootScope")
            } else 
            {
                 console.log("$scope !== $rootScope")
            }

            $scope.address = {
                city: 'Bangalore',
                state: 'KA',
                pincode: Math.ceil(Math.random() * 10000)
            }
        },

        link: function(scope, elem,  attrs) {
            elem.bind("mouseenter", function(){
                elem.addClass("address");
            })

             elem.bind("mouseleave", function(){
                elem.removeClass("address");
            })

            elem.bind("click", function(){

                 scope.address.pincode = Math.ceil(Math.random() * 10000);
                 console.log(scope.address.pincode );
                 scope.$apply();
            })

             var childElement = angular.element(elem[0].querySelector('.info'));

            //childElement.html("<span> Contact us </span>");
            childElement.text("Contact us");
        }
    }
})

*/