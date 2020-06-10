(function () {
	"use strict";
	angular.module('FireBase')
	.controller('CreateAccController',CreateAccController);
	CreateAccController.$inject=['FireBaseService']
	function CreateAccController(FireBaseService) {
		var CreateAccCtrl=this;
		CreateAccCtrl.email="";
		CreateAccCtrl.password=""
		CreateAccCtrl.createUser=function () {
			FireBaseService.createUser(CreateAccCtrl.email,CreateAccCtrl.password);
		}
	}
})();
