/// <reference path="scripts/_references.ts" />
var ToDoSample;
(function (ToDoSample) {
    function toDoList() {
        var link = function (scope, element, attributes) {
            element.text("toDoList directive");
        };
        return {
            link: link
        };
    }
    ToDoSample.toDoList = toDoList;
    angular.module('TodoApp', []).directive("todoList", toDoList);
})(ToDoSample || (ToDoSample = {}));
