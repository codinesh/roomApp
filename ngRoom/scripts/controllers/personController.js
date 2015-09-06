/// <reference path="D:\Learning\TFS\GIT\LearningThings\ngRoom\ngRoom\lib/angular.js" />
(function () {
    var app = angular.module("roomApp");

    var curPerson = {};
    app.controller("personController", ["$scope", "$filter", "$location", "personService", function ($scope, $filter, $location, personService) {
        var sc = $scope;
        sc.persons = personService.getPersons();
        sc.temp = {};
        sc.curPerson = curPerson;
        sc.addPerson = function (name) {
            personService.addPerson({ name: name });
            sc.temp.PersonName = null;
        };
        sc.markCurrent = function (person) {
            curPerson = person;
            $location.path('/person/' + person.id);
        };
    }])
}());