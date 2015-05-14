/// <reference path="typings/tsd.d.ts" />

import sampleCtl = require("./sample1");

module ToDoSample {
    export function toDoList($q: ng.IQService): ng.IDirective {
       
        var link = (scope: ng.IScope, element: JQuery, attributes: any) => {
            element.text("toDoList directive");
        };

        return {
            restrict: "AE",
            link: link
        }
    }
    toDoList.$inject = ["$q"];


    export class MyCtl implements sampleCtl.SampleImport.ISampleCtl{
        load(): void {
            sampleCtl.SampleImport.Main();
            }
    }

    angular.module('TodoApp', [])
        .directive("todoList", toDoList);
}

