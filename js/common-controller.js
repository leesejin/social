'use strict';

define([
		'basic-module',
	], function (basicModule) {
        
		return basicModule.controller("CommonController", function($scope, $location){
			$scope.changeView = function() {
				var path = arguments[0];
				
				var locatonPath = path;
				for(var i = 1; i < arguments.length; i++)
				{
					locatonPath += "/"+arguments[i];
				}
				
				$location.path(locatonPath);				
			};
			
			$scope.changeViewForAction = function() {
				var id = arguments[0],
					func = arguments[1];

				var args = [];
				for(var i = 2; i < arguments.length; i++)
				{
					args.push(arguments[i]);
				}	
				
				var obj = angular.element(document.querySelector("#"+id))[0];
				var path = obj[func].apply(obj);
				

				var locatonPath = path;
				for(var i = 2; i < arguments.length; i++)
				{
					locatonPath += "/"+arguments[i];
				}
				
				$location.path(locatonPath);				
			};
			
			$scope.delicate = function() {
				
				var id = arguments[0],
					func = arguments[1];
					
				var args = [];
				for(var i = 2; i < arguments.length; i++)
				{
					args.push(arguments[i]);
				}	
				
				var obj = angular.element(document.querySelector("#"+id))[0];
				obj[func].apply(obj, args);
			};
			
			
			
		});
	});