var app;
(function () {
    app = angular.module("roomApp", ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/addPerson', {
                templateUrl: 'templates/addPerson.html',
                controller: 'personController'
            }).
            when('/person/:id', {
                templateUrl: 'templates/addPerson.html',
                controller: 'personController'
            }).

            otherwise({
                redirectTo: 'home.html',
            });

        //$locationProvider.html5Mode(true);
    }]);
}());