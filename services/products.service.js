angular.module("qshop").factory("ProductsRepository", function($http) {

    var repo = {};
    repo.getProductList = function(fileName) {
        return $http.get(fileName);
    }
    return repo;

});
