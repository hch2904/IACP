var iacp_app = angular.module('IACPAPP', [ 'ngRoute','ngCookies','chart.js']);
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
	}).when('/generateReport',{
		templateUrl: 'partials/generateReport.html',
		controller: 'reportController'
	}).otherwise({
			redirectTo: '/'
	});
}]);

iacp_app.run(run);
run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
function run($rootScope, $location, $cookies, $http){
	{	
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login','/adminDashboard','/publisherDash']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }
}