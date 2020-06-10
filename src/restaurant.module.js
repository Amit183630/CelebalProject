(function () {
  angular.module('restaurant',['public','FireBase'])
  .config(config);
  config.$inject=['$urlRouterProvider'];
  function config($urlRouterProvider) {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        console.log(firebase.auth().currentUser);
        $urlRouterProvider.otherwise('/');
      }
      else{
        $urlRouterProvider.otherwise('/login');
      }
    });
  }
})();
