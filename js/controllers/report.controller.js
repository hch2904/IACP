iacp_app.controller('reportController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  console.log($routeParams);
  $scope.date = new Date();
  /*$scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
  	$scope.data = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];
  $scope.options = [
         {
            size: {
               height: 200,
               width: 400
            }
         }
       ];	console.log('Hiiii')*/
}])