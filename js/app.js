var iacp_app = angular.module('IACPAPP', [ 'ngRoute','ngMaterial','ngMessages', 'material.svgAssetsCache']);
iacp_app.config([ '$locationProvider','$mdIconProvider', function($locationProvider,$mdIconProvider) {
	$locationProvider.hashPrefix('');
	$mdIconProvider.icon('md-toggle-arrow', 'img/icons/toggle-arrow.svg', 48);
} ]);


iacp_app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: 'partials/home.html'
	}).when('/login', {
		templateUrl : 'partials/login.html',
		controller: 'loginController'
	}).when('/adminDashboard',{
		templateUrl : 'partials/adminDashboard.html',
		controller: 'adminController'
	}).when('/publisherDash',{
		templateUrl: 'partials/publisherDashboard.html',
		controller: 'publisherController'
	}).otherwise({
			redirectTo: '/'
	});
}]);