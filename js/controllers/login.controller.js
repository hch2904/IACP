iacp_app.controller('loginController',['$scope','$http','$location','AuthenticationService',function($scope,$http,$location,AuthenticationService){
	$scope.login_form = {}
	$scope.login_form.username = null;
	$scope.login_form.password = null;
	(function initController(){
		AuthenticationService.ClearCredentials();
	})();
	$scope.loginSubmit = function(isValid){
		if(isValid){
			
			AuthenticationService.Login($scope.login_form.username,$scope.login_form.password,function(res){
				console.log(res);
				if(res.data.response === 'admin'){
					$location.path('adminDashboard');
					AuthenticationService.SetCredentials($scope.login_form.username,$scope.login_form.password)
				}else if(res.data.response === 'publisher'){
					$location.path('publisherDash');
				}
			})
			/*if($scope.login_form.username ==='admin' && $scope.login_form.password === 'admin'){
				$location.path('adminDashboard');
			}else if($scope.login_form.username ==='publisher' && $scope.login_form.password === 'publisher'){
				$location.path('publisherDash');
			}*/
		}
	}
}]);