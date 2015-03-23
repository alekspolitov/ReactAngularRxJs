/// <reference path="scripts/_references.ts" />

module ToDoSample {
    export function toDoList(): ng.IDirective {
        
        var link = (scope: ng.IScope, element: JQuery, attributes: any) =>  {
            element.text("toDoList directive");
        };

        return {
            link: link
        }
    }
    angular.module('TodoApp', [])
        .directive("todoList", toDoList);
}

