/// <reference path="typings/tsd.d.ts" />
var sampleCtl = require("./sample1");
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
    var MyCtl = (function () {
        function MyCtl() {
        }
        MyCtl.prototype.load = function () {
            sampleCtl.SampleImport.Main();
        };
        return MyCtl;
    })();
    ToDoSample.MyCtl = MyCtl;
    angular.module('TodoApp', []).directive("todoList", toDoList);
})(ToDoSample || (ToDoSample = {}));
//# sourceMappingURL=javascript.js.map