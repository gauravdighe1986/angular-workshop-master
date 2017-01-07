function CountryService() {
    this.getCountries = function() {
        return [
            'IN',
            'USA'
        ]
    }
}

function countryServiceFactoryMethod() {
    var countryService = new CountryService();
    return countryService;
}

angular.module("app.controllers", [])

.run(function(){
    console.log("app.controller run");
})

.config(function(){
    console.log("app.controller config");
})

.controller("HeaderController", function($scope, $injector, $parse){
 
  console.log("HeaderController");  
})


.controller("StorageController", function($scope, $injector, $parse){
 
  console.log("StorageController");  
  $scope.get = function() {
      alert(sessionStorage.getItem("data"));
  }

  $scope.set = function() {
      sessionStorage.setItem("data", "true")
  }

})


.controller("DiscountController", function($scope, $rootScope, countryService, $q){
    //generateOddNumber 
    //generate odd number
    //using math.random only once
    //return result after 3 seconds

    $rootScope.message = 'hello';
    
    $scope.message = 'discount ctrl message';

    console.log("$rootScope.message", $rootScope.message)


    //start scope

    var child1 = $scope.$new();



    child1.message = "child message";

    console.log("child1", child1.message)

    var child2 = $scope.$new();

    var subChild = child1.$new();

    console.log("subChild", subChild.message)
    //end scope

    //isolated scope

     var isolatedChild1 = $scope.$new(true);
     
     //isolatedChild1.message = "isolatedChild1 message";

     console.log("isolatedChild1", isolatedChild1.message)
     var isolatedSubChild = isolatedChild1.$new();

     console.log("isolatedSubChild", isolatedSubChild.message)


    function generateOddNumber(delay) {
        var deferred = $q.defer();

        setTimeout(function() {
            var n = Math.ceil(Math.random() * 100);
             console.log(" generate number ", n);
            if (n %2 == 1) {
                 deferred.resolve(n);
            } else {
                deferred.reject("could not generate number")
            }
        }, delay);

        return deferred.promise;
    }

    /*generateOddNumber(5000)
    .then(function(n){
        console.log("fulfilled ", n);
    })
    .catch(function(err){
        console.error("failed ", err);
    })
    */


    //$q.all([
    $q.all([
        generateOddNumber(1000),
        generateOddNumber(3000)
    ])
    .then(function(results){
        console.log("first 1000 ", results[0])

        console.log(" 3000 ", results[1])
    })
    .catch(function(error){
        console.log("error ", error)
    })
    
    
    $scope.discount = Math.random() * 100;



    console.log(countryService.getCountries());

    $scope.generate = function() {
        $scope.discount = Math.random() * 100;
    }

    $scope.clearCache = function() {
        localStorage.removeItem("products"); //key
        sessionStorage.removeItem("products");

        localStorage.clear() //remove all items
        sessionStorage.clear(); 
    }

    
    setInterval(function(){
        

        //not to call digest, insteall call $apply
        //$scope.$digest();

        /*$scope.$apply(function(){
            $scope.discount = Math.random() * 100;
             console.log($scope.discount);
        });*/


         $scope.discount = Math.random() * 100;
        // console.log($scope.discount);

      //  $scope.$apply();



    }, 1000);
})


//.service("countryService", CountryService)
.factory("countryService", countryServiceFactoryMethod)

