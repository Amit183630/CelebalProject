(function () {
	"use strict";
	angular.module('FireBase')
	.controller('LoginController',LoginController);

	LoginController.$inject=['FireBaseService','$window'];
	function LoginController(FireBaseService,$window) {
		firebase.auth().onAuthStateChanged(function(user) {
      if(user){
				alert('already Logged in');
				console.log($window.location);
        $window.location.href="#/";
      }
    })
		var LoginCtrl=this;
		LoginCtrl.email="";
		LoginCtrl.password="";
		LoginCtrl.loginUser=function () {
			FireBaseService.loginUser(LoginCtrl.email,LoginCtrl.password);
		}

	}
})();
