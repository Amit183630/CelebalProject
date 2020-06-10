(function () {
	"use strict";
	angular.module('FireBase')
	.controller('LoginController',LoginController);


	LoginController.$inject=['FireBaseService'];
	function LoginController(FireBaseService) {
		var LoginCtrl=this;
		LoginCtrl.email="";
		LoginCtrl.password="";
		LoginCtrl.loginUser=function () {
			FireBaseService.loginUser(LoginCtrl.email,LoginCtrl.password);
		}

	}
})();
