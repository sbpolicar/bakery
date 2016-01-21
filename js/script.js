
var BakeryApp = angular.module('BakeryApp',['ngMaterial','ngAnimate','ngRoute']);

BakeryApp.run([function(){

}]);

BakeryApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

  $locationProvider.html5Mode(false);

  $routeProvider
  .when('/bakery/#/',{
    templateUrl: '/bakery/views/home.html'

  })
  .when('/bakery/#/menu',{
    templateUrl: '/bakery/views/menu.html'

  })
  .when('/bakery/#/about',{
    templateUrl: '/bakery/views/about.html'

  })
  .when('/bakery/#/current',{
    templateUrl: '/bakery/views/current.html'

  })
  .when('/bakery/#/history',{
    templateUrl: '/bakery/views/history.html'

  })
  .when('/bakery/#/login',{
    templateUrl: '/bakery/views/admin.html'

  })
  .otherwise({
    templateUrl:'/bakery/views/404.html'
  })

}])




