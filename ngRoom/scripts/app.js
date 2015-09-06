var app;
(function () {
    app = angular.module("roomApp", ['ngRoute', 'ui.bootstrap']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/persons', {
                templateUrl: 'templates/persons.html',
                controller: 'personController'
            }).
            when('/addPerson', {
                templateUrl: 'templates/addPerson.html',
                controller: 'personController'
            }).
            when('/person/:id', {
                templateUrl: 'templates/personDetail.html',
                controller: 'personController'
            }).

            otherwise({
                redirectTo: 'home.html',
            });

        //$locationProvider.html5Mode(true);
    }]);
}());