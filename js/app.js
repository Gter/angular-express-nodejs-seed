// Define app level module which depends on filters, services and directives
var cneeStorefront = angular.module('cneeStorefront', ['cneeServices'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/home', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactCtrl'
		})
		.when('/folios/:folioId', {
			templateUrl: 'views/folio-details.html',
			controller: 'FolioDetailCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		});
	}]);
//	Angular TODOS:
//	Still no lazy loading at a module level
//	Controllers, Services and Directives should have as few dependencies as possible