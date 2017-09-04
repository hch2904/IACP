iacp_app.controller('loginController',['$scope','$http','$location','AuthenticationService',function($scope,$http,$location,AuthenticationService){
	$scope.login_form = {}
	$scope.login_form.username = null;
	$scope.login_form.password = null;
	(function initController(){
		AuthenticationService.ClearCredentials();
	})();
	const URI_AUTH = "http://10.68.100.77:8000/infosys/oauth/token";
	const URI_API = "http://10.68.100.77:8000/infosys/oauth/token";
	$scope.loading = false;
	$scope.loginSubmit = function(isValid){
		$scope.loading = true;
		if(isValid){
			AuthenticationService.Login($scope.login_form.username,$scope.login_form.password,function(res){
				$scope.loading = false;
				console.log(res);
				if(res.data.response === 'admin'){
					$location.path('adminDashboard');
					AuthenticationService.SetCredentials($scope.login_form.username,$scope.login_form.password)
				}else if(res.data.response === 'publisher'){
					$location.path('publisherDash');
				}
			})
		}
	}
}]);