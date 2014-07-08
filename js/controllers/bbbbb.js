'use strict';

define([
    ], function () {

    	function _controller($scope, $location) {
			$scope.Button1_OnClick = function() {
				$scope.changeView('mainPage');
			};
    	}

    	return _controller;
});
