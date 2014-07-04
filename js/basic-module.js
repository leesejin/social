'use strict';


define([
		'angular',
		'route-config',
	],

	function (angular, routeConfig, widgetConfig) {

		var basicModule = angular.module('baseApp', ['ngRoute', 'ngTouch','ui.bootstrap', 'ngAnimate', 'ngSanitize'], function ($controllerProvider, $compileProvider) {
			routeConfig.setControllerProvider($controllerProvider);
		});

		return basicModule;
});