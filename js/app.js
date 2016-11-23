'use strict';

var motorApp = angular.module('motorApp',[
	'ngRoute',
	'motorAppController',
	'motorAppAnimations',
	'motorAppServices'
]);

motorApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/motors',{
		templateUrl: 'template/motor-list.html',
		controller: 'MotorListCtrl'
	}).
	when('/motors/:motorId',{
		templateUrl: 'template/motor-detail.html',
		controller: 'MotorDetailCtrl'
	}).
	otherwise({
		redirectTo: '/motors'
	});
}]);