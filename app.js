var qshop = angular.module("qshop", ['ui.router']);

qshop.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('default', {
            url: "/",
            templateUrl: "partials/firstpage.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "partials/contact.html"
        })
        .state('login', {
            url: "/login",
            templateUrl: "partials/login.html"
        })
        .state('register', {
            url: "/register",
            templateUrl: "partials/register.html"
        })
        .state('products', {
            url: "/products",
            templateUrl: "partials/products.html"
        })
        .state('product', {
            url: "/products/:id",
            templateUrl: "partials/product.html"
        })
        .state('cart', {
            url: "/cart",
            templateUrl: "partials/cart.html"
        });
});
