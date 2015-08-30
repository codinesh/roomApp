/// <reference path="D:\Learning\TFS\GIT\LearningThings\ngRoom\ngRoom\lib/angular.js" />
(function () {

    var app = angular.module("roomApp");

    app.service("personService", function () {
        var persons = [{ name: "Dinesh", id: 1 }, { name: "Naveen", id: 2 }, { name: "Adithya", id: 3 }];

        var getPersons = function () {
            return persons;
        }
        var addPerson = function (newPerson) {
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

        var curPerson;
        var getCurPerson = function () {
            return curPerson;
        }
        var setCurPerson = function (curPerson) {
            this.curPerson = curPerson;
        }

        return {
            getPersons: getPersons,
            addPerson: addPerson,

            getCurPerson: getCurPerson,
            setCurPerson: setCurPerson
        };
    });
}());