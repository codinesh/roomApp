/// <reference path="D:\Learning\TFS\GIT\LearningThings\ngRoom\ngRoom\lib/angular.js" />
(function () {
    var app = angular.module("roomApp");
    var persons = [{ name: "Dinesh" }, { name: "Naveen" }, { name: "Adithya" }];
    var curPerson = {};
    app.controller("personController", ["$scope", "$filter", function ($scope, $filter) {
        var sc = $scope;
        sc.persons = persons;
        sc.temp = {};
        sc.curPerson = curPerson;
        sc.addPerson = function (name) {
            if (existsInArray(name)) {
                persons.push({ name: name });
                sc.temp.PersonName = null;
            }
            else {

            }
        }

        var existsInArray = function (value) {
            var found = $filter('filter')($scope.persons, { name: value }, false);
            if (found.length) {
                return false;
            }
            else
                return true;
        }
    }]).
    controller("homeController", ["$scope", "$filter", function ($scope, $filter) {
        var sc = $scope;
        sc.persons = persons;

        var markCurrent = function (item) {
            curPerson = item;
        };
    }]);
}());