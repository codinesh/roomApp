(function () {
    var app = angular.module("roomApp");

    app.controller("homeController", ["$scope", "$filter", "$location", "personService", function ($scope, $filter, $location, personService) {
        var sc = $scope;
        sc.persons = personService.getPersons();
        sc.temp = [];
    }]);
}());