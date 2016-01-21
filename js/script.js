
var BakeryApp = angular.module('BakeryApp',['ngMaterial','ngAnimate','ngRoute']);

BakeryApp.run([function(){

}]);

BakeryApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

  $locationProvider.html5Mode(false);

  $routeProvider
  .when('/bakery/#/',{
    templateUrl: '/views/home.html'

  })
  .when('/bakery/#/menu',{
    templateUrl: '/views/menu.html'

  })
  .when('/bakery/#/about',{
    templateUrl: '/views/about.html'

  })
  .when('/bakery/#/current',{
    templateUrl: '/views/current.html'

  })
  .when('/bakery/#/history',{
    templateUrl: '/views/history.html'

  })
  .when('/bakery/#/login',{
    templateUrl: '/views/admin.html'

  })
  .otherwise({
    templateUrl:'/views/404.html'
  })

}])




