
var BakeryApp = angular.module('BakeryApp',['ngMaterial','ngAnimate','ngRoute']);

BakeryApp.run([function(){

}]);

BakeryApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

  $locationProvider.html5Mode(false);

  $routeProvider
  .when('/#/',{
    templateUrl: '/bakery/views/home.html'

  })
  .when('/#/menu',{
    templateUrl: '/bakery/views/menu.html'

  })
  .when('/#/about',{
    templateUrl: '/bakery/views/about.html'

  })
  .when('/#/current',{
    templateUrl: '/bakery/views/current.html'

  })
  .when('/#/history',{
    templateUrl: '/bakery/views/history.html'

  })
  .when('/#/login',{
    templateUrl: '/bakery/views/admin.html'

  })
  .otherwise({
    templateUrl:'/bakery/views/404.html'
  })

}])




