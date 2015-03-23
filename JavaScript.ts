/// <reference path="scripts/_references.ts" />

module ToDoSample {
    export function toDoList($q: ng.IQService): ng.IDirective {
       
        var link = (scope: ng.IScope, element: JQuery, attributes: any) =>  {
            element.text("toDoList directive");
        };

        return {
            restrict: "AE",
            link: link
        }
    }
    toDoList.$inject = ["$q"];

    angular.module('TodoApp', [])
        .directive("todoList", toDoList);
}

