'use strict';

var motorAppServices = angular.module('motorAppServices',['ngResource']);

motorAppServices.factory('Motor',['$resource',
	function($resource){
		return $resource('json/:motorId.json',{},{
			query: {method:'GET',params:{motorId:'motors'},isArray:true}
		});

	}]);