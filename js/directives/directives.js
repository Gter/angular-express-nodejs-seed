cneeStorefront.directive('passwordValidate', function(){

});

cneeStorefront.directive('drink', function(){
	return {
		scope: {
		//	bind isolate scope property to a DOM attribute
		//	flavor in this case, <div drink flavor="strawberry"></div>
			flavor: '@'
		},
		template: '<div>{{flavor}}</div>'
		/*
		link: function(scope, element, attrs){
			//	here scope pertains to the directive
			scope.flavor = attrs.flavor;
		}
		*/
	};
});

cneeStorefront.directive('phone', function(){
	return {
		restrict: 'E',
		scope: {
			number: '@',	//	one way attribute binding
			network: '=',	//	setup bi-directional binding
			makeCall: '&'	//	call a method on the parent scope
		},
		template: '<div>Number: {{number}}</div>' +
					'Network: <select ng-model="network" ng-options="network for network in networks"></select>' +
					'<input type="text" ng-model="value">' +
					'<div class="btn" ng-click="makeCall({number: number, message:value})">Call home!</div>',
		link: function(scope){
			scope.networks = ['Verion', 'AT&T', 'Sprint'];
			scope.network = scope.networks[0];
		}
	};
});