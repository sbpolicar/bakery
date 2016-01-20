var BakeryApp = angular.module('BakeryApp',['ngMaterial','ngAnimate','ngRoute']);

BakeryApp.run([function(){
  // console.log('Bakery angular init');
}]);

BakeryApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

  // $locationProvider.html5Mode(true);

  $routeProvider
  .when('/bakery',{
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/bakery/special',{
    templateUrl: '/views/special.html',
    controller: 'HomeCtrl'
  })
  .when('/bakery/about',{
    templateUrl: '/views/about.html',
    controller: 'HomeCtrl'
  })
  .when('/bakery/current',{
    templateUrl: '/views/current.html',
    controller: 'HomeCtrl'
  })
  .when('/bakery/history',{
    templateUrl: '/views/history.html',
    controller: 'HomeCtrl'
  })
  .when('/bakery/login',{
    templateUrl: '/views/admin.html',
    controller: 'HomeCtrl'
  })
  .otherwise({
    templateUrl:'/views/404.html'
  })

}])

