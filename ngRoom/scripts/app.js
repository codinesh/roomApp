var app;
(function () {
    app = angular.module("roomApp", ['ngRoute', 'ui.bootstrap']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/addPerson', {
                templateUrl: 'templates/addPerson.html',
                controller: 'personController'
            }).
            when('/person/:id', {
                templateUrl: 'templates/personDetail.html',
                controller: 'personController'
            }).
            otherwise({
                redirectTo: '',
            });
        //$locationProvider.html5Mode(true);
    }]);
}());