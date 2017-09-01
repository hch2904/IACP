iacp_app.controller('loginController',['$scope','$http','$location',function($scope,$http,$location){
	$scope.login_form = {}
	$scope.login_form.username = null;
	$scope.login_form.password = null;
	$scope.loginSubmit = function(isValid){
		if(isValid){
			if($scope.login_form.username ==='admin' && $scope.login_form.password === 'admin'){
				$location.path('adminDashboard');
			}else if($scope.login_form.username ==='publisher' && $scope.login_form.password === 'publisher'){
				$location.path('publisherDash');
			}
		}
	}
}]);