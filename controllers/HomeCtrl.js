BakeryApp.controller('HomeCtrl', ['$scope', '$location', '$timeout', function($scope, $location, $timeout){
  $scope.whichMenu = 'Menu';

  // console.log($location.path())

  images = ['bakery/images/door.jpg', 'bakery/images/exteriorcenter.jpg', 'bakery/images/exteriorleft.jpg', 'bakery/images/menuwall.jpg', 'bakery/images/menuwall2.jpg', 'bakery/images/mt_si.jpg', 'bakery/images/wide.jpg'];

  var indexer = 0;

  $scope.currentImage = images[indexer];

  var loadImages = function(){
    console.log('fired off function')
    if(indexer === images.length-1){
    console.log('end of array')
      $timeout(function(){
        console.log('waited 3 seconds after end off array')
        indexer = 0;
        $scope.currentImage = images[indexer];
        loadImages();
      }, 3000);
    } else if ($location.path() !== '/menu'){
      return
    }
    else {
      console.log('round '+indexer)
      indexer++;
      $scope.currentImage = images[indexer];
      $timeout(function(){
      console.log('waited 3 seconds round '+indexer)
        loadImages()
      }, 3000);
    }
  };
  $scope.$watch(function() {
    return $location.path();
  }, function(){
    if($location.path() === '/menu') {
      loadImages();
    }
 });
}])

