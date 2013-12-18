var resumeControllers = angular.module('resumeControllers', []);

resumeControllers.controller('ResumeController', ['$scope', '$http', function ($scope, $http) {
	$http.get('resume.json').success(function(data) {
		$scope.resume = data;
	});
}]);

resumeControllers.controller('ContactController', ['$scope', '$http', function ($scope, $http) {
}]);