(function () {
  "use strict";
  angular.module('restaurant')
  .controller('HomeController',HomeController);
  HomeController.$inject=['$window']
  function HomeController($window) {
    firebase.auth().onAuthStateChanged(function(user) {
      if(!user){
        $window.location.href="#/login";
      }
    });
  }
})();
