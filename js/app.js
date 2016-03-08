var BakeryApp = angular.module('BakeryApp',['ngAnimate','ngRoute', 'simple-slideshow']);

BakeryApp.run([function(){
}]);

BakeryApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(false);
    $routeProvider
    .when('/',{
      templateUrl: 'bakery/views/home.html'
    })
    .when('/menu',{
      templateUrl: 'bakery/views/menu.html'
    })
    .when('/about',{
      templateUrl: 'bakery/views/about.html'
    })
    .when('/events',{
      templateUrl: 'bakery/views/events.html'
    })
    .otherwise({
      templateUrl:'bakery/views/404.html'
    });
}]);

