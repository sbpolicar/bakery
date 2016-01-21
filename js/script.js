
var BakeryApp = angular.module('BakeryApp',['ngMaterial','ngAnimate','ngRoute']);

BakeryApp.run([function(){

}]);

BakeryApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

  $locationProvider.html5Mode(false);

  $routeProvider
  .when('/',{
    templateUrl: '/views/home.html'

  })
  .when('/menu',{
    templateUrl: '/views/menu.html'

  })
  .when('/about',{
    templateUrl: '/views/about.html'

  })
  .when('/current',{
    templateUrl: '/views/current.html'

  })
  .when('/history',{
    templateUrl: '/views/history.html'

  })
  .when('/login',{
    templateUrl: '/views/admin.html'

  })
  .otherwise({
    templateUrl:'/views/404.html'
  })

}])




