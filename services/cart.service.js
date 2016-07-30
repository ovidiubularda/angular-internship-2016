angular.module("qshop").factory("Cart", function($rootScope) {

    var cart = {};
    cart.products = [];

    cart.add = function(product, quantity) {
        var existaProdus = false;
        var index = 0;
        for (var i = 0; i < cart.products.length; ++i) {
            if (parseInt(cart.products[i].id) === parseInt(product.id)) {
                existaProdus = true;
                index = i;
                break;
            }
        }
        if (existaProdus) {
            console.log('Am actualizat produsul ' + product.name);
            cart.products[index].quantity += quantity;
        } else {
            console.log("Am adaugat produsul..", product);
            product.quantity = quantity;
            cart.products.push(product);
        }

        $rootScope.$broadcast('cart-updated');
    };

    cart.getAllProducts = function() {
        return cart.products;
    }

    cart.getProductCount = function() {
        var sum = 0;
        for (var i = 0; i < cart.products.length; i++) {
            sum += cart.products[i].quantity;
        }
        return sum;
    };

    cart.getSubTotal = function() {
        var sum = 0;
        for (var i = 0; i < cart.products.length; i++) {
            sum += cart.products[i].price * cart.products[i].quantity;
        }
        return sum;
    };

    cart.getShipping = function() {
        return 50;
    };

    cart.getTotal = function() {
        return this.getSubTotal() + this.getShipping();
    };

    cart.remove = function(product) {
        var index = 0;
        for (var i = 0; i < cart.products.length; ++i) {
            if (parseInt(cart.products[i].id) === parseInt(product.id)) {
                index = i;
                break;
            }
        }
        cart.products.splice(index, 1);
    }

    cart.sendOrder = function(order) {
        cart.products = [];
        $rootScope.$broadcast('cart-updated');
        console.log("Order", order);
    }

    return cart;

});
