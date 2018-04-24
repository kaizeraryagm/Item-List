var app = angular.module('listApp', ["ngRoute", "listCtrlModule"]);

app.config(function($routeProvider) {
    $routeProvider

    .when("/", [
        templateUrl: "views/hello.html"
    ])
})