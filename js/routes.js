'use strict';

define([
		'basic-module',
		'route-config'
	],

	function (basicModule, routeConfig) {
	
		return basicModule.config(function ($routeProvider) {

			$routeProvider.when('/page1', routeConfig.config('../src/page1.html', 'controllers/page1'));
			$routeProvider.when('/page2', routeConfig.config('../src/page2.html', 'controllers/page2'));


			$routeProvider.otherwise({redirectTo:'/page1'});
		});
});
