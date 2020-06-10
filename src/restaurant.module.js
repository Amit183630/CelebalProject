(function () {
  angular.module('restaurant',['public','FireBase'])
  .config(config);
  config.$inject=['$urlRouterProvider'];
  function config($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
  }
})();
