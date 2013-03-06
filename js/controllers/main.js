//	Main view
cneeStorefront.controller('MainCtrl', function($scope){
	
});

//	About view
cneeStorefront.controller('AboutCtrl', function($scope){
	$scope.ctrlFlavor = 'blueberry';
});

//	Contact view
cneeStorefront.controller('ContactCtrl', function($scope){
	
});

//	List of all folios
cneeStorefront.controller('FolioListCtrl', function($scope, Folio){
	//	Query the Folio service
	$scope.folios = Folio.query();
});

//	Folio details
cneeStorefront.controller('FolioDetailCtrl', function($scope, $routeParams, Folio){
	// $scope.folioId = $routeParams.folioId;
	$scope.folioId = Folio.get({id: $routeParams.folioId});
});

//	Contact form controller
cneeStorefront.controller('ContactFormCtrl', function($scope){
	$scope.devices = ['iOS', 'Android', 'Windows'];
	$scope.master = {
		name:'',
		email:'',
		password:'',
		gender: '',
		size:'',
		length:'',
		choice:'',
		chosen: []
	};

	$scope.submitForm = function(user) {
		$scope.master= angular.copy(user);
		$http({method: 'POST', url: 'api/folios'}).
			success(function(){
				//	this callback will be called asynchronously
				//	when the response is available
			}).
			error(function(){
				//	called asynchrnously if an error occurs
				//	or when the server resturns with an error status
			});
	};
	$scope.resetForm = function() {
		$scope.user = angular.copy($scope.master);
	};
	$scope.resetForm();
	// return $scope.ContactFormCtrl = this;
});

//	Phone controller
cneeStorefront.controller('CallUsCtrl', function($scope){
	$scope.leaveVoicemail = function(number, message) {
		alert('Number:' + number + " said:" + message);
	};
	$scope.ctrlNumber = '735-731-8242';
});

//	Navigation controller
cneeStorefront.controller('navCtrl', ['$scope', '$location', function($scope, $location){
	$scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        console.log("This is " + currentRoute);
        return page === currentRoute ? 'active' : '';
    };
}]);