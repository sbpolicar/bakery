var BakeryApp = angular.module('BakeryApp',['ngMaterial','ngAnimate','ngRoute']);

BakeryApp.run([function(){

}]);

BakeryApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider
    .when('/',{
      templateUrl: 'views/home.html'
    })
    .when('/menu',{
      templateUrl: 'views/menu.html'
    })
    .when('/contact',{
      templateUrl: 'views/contact.html'
    })
    .when('/events',{
      templateUrl: 'views/events.html'
    })
    .otherwise({
      templateUrl:'views/404.html'
    });

}]);

