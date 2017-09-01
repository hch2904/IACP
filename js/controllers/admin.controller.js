iacp_app.controller('adminController',['$scope','$http',function($scope,$http){
	$scope.adminPublisherForm = {};
	$scope.adminPublisherForm.name = null;
	$scope.adminPublisherForm.email = null; 
	$scope.adminPublisherForm.address = null;
	$scope.addPublisher = function(isValid){
		if(isValid){
			console.log($scope.adminPublisherForm);
		}
	}

}]);