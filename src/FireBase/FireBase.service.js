(function () {
  "use strict";
  angular.module("FireBase")
  .service('FireBaseService',FireBaseService);
  FireBaseService.$inject=['$window']
  function FireBaseService($window) {
    var service=this;
    service.createUser=function (email,password) {
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch(function(error) {
        alert("Error:"+error.message);
      });
      firebase.auth().onAuthStateChanged(function (user) {
        if(user){
          if(user &&!user.emailVerified){
            user.sendEmailVerification();
            alert("Registered Succesfully. Verfication Link Send to your Email......")
          }
        }
      });
    };
    service.loginUser=function (email,password) {
      firebase.auth().signInWithEmailAndPassword(email,password)
      .catch(function (error) {
        alert(error);
      });
      firebase.auth().onAuthStateChanged(function (user) {
        if(user){
          alert("Login Succesful");
          $window.location.href='/index.html';
        }
        else{
          alert("Please try again");
        }
      })
    }
  }
})();
