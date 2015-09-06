(function () {

    var app = angular.module("roomApp");

    app.service("personService", ["$filter", function ($filter) {
        var persons = [{ name: "Dinesh", id: 1 }, { name: "Naveen", id: 2 }, { name: "Adithya", id: 3 }];
        var curPerson;
        var getPersons = function () {
            return persons;
        }
        var addPerson = function (newPerson) {
            if (!existsInArray(newPerson.name)) {
                persons.push({ name: newPerson.name, id: persons.lenght + 1 });
            }
            else {

            }
        }
        var existsInArray = function (value) {
            var found = $filter('filter')(persons, { name: value }, false);
            if (found.length == 0) {
                return false;
            }
            else
                return true;
        }
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
    }]);
}());