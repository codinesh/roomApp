/// <reference path="D:\Learning\TFS\GIT\LearningThings\ngRoom\ngRoom\lib/angular.js" />
(function () {
    var app = angular.module("roomApp");

    var curPerson = {};
    app.controller("personController", ["$scope", "$filter", "personService", function ($scope, $filter, personService) {
        var sc = $scope;
        sc.persons = personService.getPersons();
        sc.temp = {};
        sc.curPerson = curPerson;
        sc.addPerson = function (name) {
            personService.addPerson({ name: name });
        }
    }]).
    controller("homeController", ["$scope", "$filter", "$location", "personService", function ($scope, $filter, $location, personService) {
        var sc = $scope;
        sc.persons = personService.getPersons();

        var markCurrent = function (person) {
            personService.setCurPerson(person);
            $location.url('personDetail/' + person.id);
        };
    }]);
}());