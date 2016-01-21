
var BakeryApp = angular.module('BakeryApp',['ngMaterial','ngAnimate','ngRoute']);

BakeryApp.run([function(){

}]);

BakeryApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

  $locationProvider.html5Mode(false);

  $routeProvider
  .when('/',{
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/menu',{
    templateUrl: '/views/menu.html',
    controller: 'HomeCtrl'
  })
  .when('/about',{
    templateUrl: '/views/about.html',
    controller: 'HomeCtrl'
  })
  .when('/current',{
    templateUrl: '/views/current.html',
    controller: 'HomeCtrl'
  })
  .when('/history',{
    templateUrl: '/views/history.html',
    controller: 'HomeCtrl'
  })
  .when('/login',{
    templateUrl: '/views/admin.html',
    controller: 'HomeCtrl'
  })
  .otherwise({
    templateUrl:'/views/404.html'
  })

}])




