/// <reference path="scripts/_references.ts" />
var ToDoSample;
(function (ToDoSample) {
    function toDoList($q) {
        var link = function (scope, element, attributes) {
            element.text("toDoList directive");
        };
        return {
            restrict: "AE",
            link: link
        };
    }
    ToDoSample.toDoList = toDoList;
    toDoList.$inject = ["$q"];
    angular.module('TodoApp', []).directive("todoList", toDoList);
})(ToDoSample || (ToDoSample = {}));
