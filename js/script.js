var BakeryApp = angular.module('BakeryApp',['ngMaterial','ngAnimate','ngRoute']);

BakeryApp.run([function(){
  // console.log('Bakery angular init');
}]);

BakeryApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

  // $locationProvider.html5Mode(true);

  $routeProvider
  .when('/bakery/' || '/bakery/#/',{
    templateUrl: '/bakery/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/bakery/#/special',{
    templateUrl: '/bakery/views/special.html',
    controller: 'HomeCtrl'
  })
  .when('/bakery/#/about',{
    templateUrl: '/bakery/views/about.html',
    controller: 'HomeCtrl'
  })
  .when('/bakery/#/current',{
    templateUrl: '/bakery/views/current.html',
    controller: 'HomeCtrl'
  })
  .when('/bakery/#/history',{
    templateUrl: '/bakery/views/history.html',
    controller: 'HomeCtrl'
  })
  .when('/bakery/#/login',{
    templateUrl: '/bakery/views/admin.html',
    controller: 'HomeCtrl'
  })
  .otherwise({
    templateUrl:'/bakery/views/404.html'
  })

}])

