angular.module("qshop").controller("MenuController", function($scope, Cart) {

  $scope.totalProducts = 0;

  $scope.$on('cart-updated', function() {
    $scope.totalProducts = Cart.getProductCount();
  });

});
