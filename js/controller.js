'use strict';

var motorApp= angular.module('motorAppController',[]);

motorApp.controller('MotorListCtrl',['$scope', 'Motor',
	function($scope, Motor){
		$scope.motors = Motor.query();
		$scope.orderProp = 'model';
	
}]);
motorApp.controller('MotorDetailCtrl',['$scope', '$routeParams', 'Motor',
	function($scope, $routeParams, Motor)
	{
	 	$scope.motor = Motor.get({motorId: $routeParams.motorId}, function(motor) 
	 	{
        $scope.mainImageUrl = motor.images[0];
        });
	  $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
  }
}])