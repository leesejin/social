'use strict';

requirejs.config({
    baseUrl:'js',
    paths: {
	    'text': '../libs/require/text',
        'angular': '../libs/angularJS/angular',
        'angular-route': '../libs/angularJS/angular-route',
        'angular-touch': '../libs/angularJS/angular-touch',
        'angular-animate': '../libs/angularJS/angular-animate',
        'angular-sanitize': '../libs/angularJS/angular-sanitize',
        'ui-bootstrap': '../libs/bootstrap/ui-bootstrap-tpls-0.10.0.min',
        'library': '../libs',
    },


    shim:{
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-touch': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
		'angular-sanitize': {
            deps: ['angular']
        },  
        'basic-module': {
            deps:['angular']
        },
        'common-controller': {
            deps:['angular']
        },
        'routes': {
            deps:['angular']
        },
        'ui-bootstrap': {
            deps:['angular']
        },
    }
});

requirejs([
	    'text',
        'angular',
        'angular-route',
        'angular-touch',
        'angular-animate',
        'angular-sanitize',
        'ui-bootstrap',
        'basic-module',
        'routes',
        'common-controller',
    ], 

    function(text, angular) {

        angular.element(document).ready(function(){
           angular.bootstrap(wrap(document.body), ['baseApp']);
        });
    }
);

