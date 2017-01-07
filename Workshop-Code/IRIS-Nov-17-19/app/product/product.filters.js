angular.module("product.filters", [])

.filter("byYear", function() {
    return function(products, year) {
        console.log("byYear Called");
        
        if (!year)
            return products;

        var results = [];
        
        /*
        for (var i in products) {
            
            if (products[i].year == year) {
                results.push(products[i]);
            }
        }*/

        angular.forEach(products, function(product){
            if (product.year == year) {
                results.push(product);
            }
        })

        return results;
    }
})