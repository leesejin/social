'use strict';

define([
		'basic-module',
		'route-config'
	],

	function (basicModule, routeConfig) {
	
		return basicModule.config(function ($routeProvider) {

			//$routeProvider.when('/page1', routeConfig.config('../src/page1.html', 'controllers/page1'));
			//*%=routeProvider%*//

			$routeProvider.otherwise({redirectTo:'/page1'});
		});
});
