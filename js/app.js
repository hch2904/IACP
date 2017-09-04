var iacp_app = angular.module('IACPAPP', [ 'ngRoute','ngCookies','chart.js','ngStorage']);
iacp_app.config([ '$locationProvider', function($locationProvider,) {
	$locationProvider.hashPrefix('');
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
	}).when('/generateReport/:param',{
		templateUrl: 'partials/generateReport.html',
		controller: 'reportController'
	}).otherwise({
			redirectTo: '/'
	});
}])/*.run(run)*/

function run($rootScope, $http, $location, $localStorage){
	console.log($location.path());
	if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
    }
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/login');
            }
	});
}