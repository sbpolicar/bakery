BakeryApp.controller('HomeCtrl', ['$scope', '$location', '$timeout', function($scope, $location, $timeout){

  $scope.whichMenu = 'Menu';

  // console.log($location.path())

  var doughnuts = ['https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150', "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150", "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150", "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150" ];
  var pasteries = ['https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=250', "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=250", "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=250", "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=250" ];
  var images = ['https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=350', "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=350", "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=350", "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=350" ];

  var indexer = 0;

  $scope.currentImage = doughnuts[0];

  var loadImages = function(array){
    if ($location.path() !== '/menu'){
      return
    } else if(indexer === array.length-1){
      $timeout(function(){
        indexer = 0;
        $scope.currentImage = array[indexer];
        loadImages();
      }, 3000);
    } else {
      indexer++;
      $scope.currentImage = array[indexer];
      $timeout(function(){
        loadImages()
      }, 3000);
    }
  };

  // Watch URL, if /menu - begin slideshow. Defaults to doughnuts
  $scope.$watch(function() {
    return $location.path();
  }, function(){
    if($location.path() === '/menu') {
      loadImages(dougnuts);
    }
 });
}])

