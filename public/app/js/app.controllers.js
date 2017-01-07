angular.module("app.controllers", [])

    .controller("HeaderController", function ($scope, $rootScope) {
        console.log("Header Controller");
        $scope.pageTitle = "Home";
        $scope.appName = "HeaderApp";

        $scope.changeTitle = function () {
            $scope.pageTitle = Math.random();
        }

        setInterval(function () {
            $scope.pageTitle = Math.random();
            $rootScope.randomNumber = Math.random();
           // console.log($scope.pageTitle);

            // setInterval() is not part of angular. so we are using disgest() to make angular use dirtycheking

            //$rootScope.$digest(); // gets applied to rootScope and scope

            // gets applied to current scope
            //$scope.$digest();

            // this will make it applied to parent(rootScope) as well
            $scope.$apply(function () {
                // console.log("Apply called"); // this will be called before appliying $digest() on rootScope
            });
        }, 2000)

        // Apply watch on randomNumber.
        $scope.$watch("randomNumber + 1000", function (newValue, oldValue) {
            // console.log("watch: " + newValue, oldValue);
        });

        var childScope = $scope.$new();

        var isolatedChildScope = $scope.$new(true);
        console.log("CS :" + childScope.appName)
        console.log("Isolated :" + isolatedChildScope.appName)
        console.log("Isolated :" + isolatedChildScope.$parent.appName)
    })