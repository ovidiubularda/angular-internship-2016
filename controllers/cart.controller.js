angular.module('qshop').controller('CartController', function($scope, $rootScope, $state, Cart) {
    $scope.cartList = Cart.getAllProducts();

    updateCart();

    $scope.incrementQuantity = function(cartItem) {
        cartItem.quantity += 1;
        updateCart();
    };

    $scope.decrementQuantity = function(cartItem) {
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            updateCart();
        }
    };

    function updateCart() {
        $scope.subTotal = Cart.getSubTotal();
        $scope.shipping = Cart.getShipping();
        $scope.total = Cart.getTotal();
        $rootScope.$broadcast("cart-updated");
    }

    $scope.removeItem = function(product) {
        Cart.remove(product);
        $scope.cartList = Cart.getAllProducts();
        updateCart();
    }

    $scope.sendOrder = function() {

        var order = {
            products: [],
            country: "",
            city: "",
            zipCode: ""
        };

        order.products = $scope.cartList;
        order.country = $scope.country;
        order.city = $scope.city;
        order.zipCode = $scope.zipCode;

        Cart.sendOrder(order);

        // redirect catre home page
        $state.go('default');

    };
});
