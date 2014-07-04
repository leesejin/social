define([
	],

	function (lazyDirectives) {

		var $controllerProvider;

		function setControllerProvider(value) {
			$controllerProvider = value;
		}

		function config(templatePath, controllerPath, lazyResources) {

			if (!$controllerProvider) {
				throw new Error("$controllerProvider is not set!");
			}

			var defer,
				html,
				routeDefinition = {};

			routeDefinition.templateUrl = "js/"+templatePath;
			routeDefinition.controller = controllerPath.substring(controllerPath.lastIndexOf("/") + 1);

			routeDefinition.resolve = {
			
				delay: function ($q, $rootScope) {

					defer = $q.defer();

					if (!html) {
					
						var dependencies = ["text!" + templatePath, controllerPath];

						require(dependencies, function () {

							var indicator = 0;
							var template = arguments[indicator++];


							if(angular.isDefined(controllerPath)) {
								$controllerProvider.register(controllerPath.substring(controllerPath.lastIndexOf("/") + 1), arguments[indicator]);
								indicator++;
							}

							html = template;

							defer.resolve();
							$rootScope.$apply();
						});
					}
					else {
						defer.resolve();
					}
					
					return defer.promise;
				}
			};

			return routeDefinition;
		}

		return {
			setControllerProvider: setControllerProvider,
			config: config
		};
	}
);

