BakeryApp.controller('HomeCtrl', ['$scope', '$location', '$timeout', function($scope, $location, $timeout){
    var images = ['https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150', "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150", "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150", "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150" ];
    var indexer = 0;


    $scope.loadImages = function(images){
        if(indexer === images.length-1){
            $timeout(function(){
                indexer = 0;
                $scope.currentImage = images[indexer];
                $scope.loadImages();
            }, 3000);
        } else if ($location.path() !== '/menu'){
            return
        } else {
            indexer++;
            $scope.currentImage = images[indexer];
            $timeout(function(){
            $scope.loadImages()
            }, 3000);
        }
    };

    $scope.whichMenu = 'Menu';
    $scope.currentImage = images[indexer];

    $scope.$watch(function() {
        return $location.path();
    }, function(){
        if($location.path() === '/menu') {
        $scope.loadImages();
        }
    });
}])

