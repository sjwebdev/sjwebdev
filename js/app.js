 var resumeApp = angular.module('resumeApp', [
	'ngRoute',
	'resumeControllers'
	]);
	
	resumeApp.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
				when('/resume', {
					templateUrl: 'partials/resume.html',
					controller: 'ResumeController'
				}).
				when('/contact', {
					templateUrl: 'partials/contact.html',
					controller: 'ContactController'
				}).
				otherwise({
					redirectTo: '/resume'
				})
		}
	]);