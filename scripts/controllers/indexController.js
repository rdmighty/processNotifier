app.controller('indexController', ['$scope','$timeout', '$window', function($scope, $timeout, $window){
	var vm = this;


	$timeout(function(){
		$$pn.notify('Searching for a product in CNET database!');
		asyncCall(function(){
			$$pn.hide();		
			$$pn.notify('Data not found in CNET database. Searching in Assets Master!');	
			asyncCall(function(){
				$$pn.hide();				
			});
		});
	}, 2000);
	
	

	function asyncCall(callback){
		$timeout(function(){
			callback();
		}, 8000);
	}
}]);