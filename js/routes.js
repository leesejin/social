'use strict';

define([
		'basic-module',
		'route-config'
	],

	function (basicModule, routeConfig) {
	
		return basicModule.config(function ($routeProvider) {

			$routeProvider.when('/mainPage', routeConfig.config('../src/mainPage.html', 'controllers/mainPage'));
			$routeProvider.when('/bbbbb', routeConfig.config('../src/bbbbb.html', 'controllers/bbbbb'));
			$routeProvider.when('/abab', routeConfig.config('../src/abab.html', 'controllers/abab'));


			$routeProvider.otherwise({redirectTo:'/mainPage'});
		});
});
