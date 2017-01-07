angular.module("app.cache-service", [])
.provider("cacheService", function(){

    function Cache(storage) {
        this.getObject = function(key) {
            var jsonString = storage.getItem(key);

            if (jsonString)
                return JSON.parse(jsonString);
        }   

        this.setObject = function(key, obj) {
            storage.setItem(key, JSON.stringify(obj));
        }
    }


    //provider configuration
    this.storage = 'Local';
     
    this.setStorageEngine = function(name) {
        this.storage =  name;
    }
    console.log("cacheServiceProvider ");
     
    this.$get = function() { //factory method
        console.log("cacheService $get ", this.storage);

        if (this.storage == 'Local') {
            console.log("Creating local");
            var cacheService = new Cache(localStorage);
            return cacheService;
        }

        if (this.storage == 'Session') {
                console.log("Creating session");
            var cacheService = new Cache(sessionStorage);
            return cacheService;
        }
        
    }
    
})


