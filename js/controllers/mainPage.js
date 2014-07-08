'use strict';

define([
    ], function () {

    	function _controller($scope, $location) {
			$scope.btMaster_OnClick = function() {
				$scope.delicate('Label1', 'setText', '1111');
				$scope.delicate('Label2', 'setText', 'ggggg');
				$scope.delicate('Label3', 'setText', 'erwerfsfsf');
			};
			$scope.Button2_OnClick = function() {
				$scope.changeViewForAction('gr', 'getSelected');
				$scope.delicate('RadioButton1', 'setText', 'news');
			};
    	}

    	return _controller;
});
