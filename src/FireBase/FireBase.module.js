(function() {
	"use strict";
	angular.module('FireBase',[])
	.config(Config);
	function Config() {
		var firebaseConfig = {
			apiKey: "AIzaSyD2HWMWJuRcg2qvymsAquvvspgfpol8VP4",
			authDomain: "test-225c9.firebaseapp.com",
			databaseURL: "https://test-225c9.firebaseio.com",
			projectId: "test-225c9",
			storageBucket: "test-225c9.appspot.com",
			messagingSenderId: "485868681806",
			appId: "1:485868681806:web:779268dd4e5ac5fd04e11f",
			measurementId: "G-82X6JFN2S0"
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
		firebase.analytics();
		console.log("Connected");
	}
})();
