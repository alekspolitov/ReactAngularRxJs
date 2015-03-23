'use strict';

var toDoList = function($q) {

	var link = function(scope, element, attrs) {
		element.text("toDoList directive");
	};

	return {
		restrict: 'AE',
		scope: false,
		link: link,

	};
}

toDoList.$inject = ["$q"];

angular.module('TodoApp', [])
	.directive("todoList", toDoList);