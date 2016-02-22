BakeryApp
.controller('HomeCtrl', ['$scope', '$location', '$timeout', '$http', function($scope, $location, $timeout, $http){
    console.log(isOpera, isFirefox, isSafari, isIE, isEdge, isChrome, isBlink, isMobile);

    if(isOpera === true){
      $scope.browserEnabled = false;
    } else if (isFirefox === true) {
      $scope.browserEnabled = false;
    } else if (isSafari === true) {
      $scope.browserEnabled = false;
    } else if (isIE === true) {
      $scope.browserEnabled = false;
    } else if (isEdge === true) {
      $scope.browserEnabled = false;
    } else if (isChrome === true) {
      $scope.browserEnabled = true;
    } else if(isMobile === true) {
      $scope.browserEnabled = false;
    }

    var indexer = 0;
    var imageData = resource.images;

    $scope.showToggle = ' ';
    $scope.doughnuts = [];
    $scope.pastries = [];
    $scope.cookies = [];
    $scope.pies = [];
    $scope.slides = [];
    $scope.url = '';
    $scope.whichMenu = 'Sweets';

    var buildImages = function(){
        imageData.forEach(function(image){
            if(image.public_id.indexOf('doughnuts') != -1){
                $scope.doughnuts.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('pastries') != -1){
                $scope.pastries.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('cookies') != -1){
                $scope.cookies.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('pies') != -1){
                $scope.pies.push({name: image.name, url: image.url});
            }
        });
    }

    $scope.loadImages = function(arr){
        $scope.slides = [];
        $scope.slides = arr;
        // console.log(arr)
        // console.log('load called')
        // if(arr.length === 1 || $location.path() !== '/menu'){
        //     console.log('single item array - returned')
        //     $scope.currentImage = arr[0];
        //     return;
        // }else if(indexer === arr.length-1){
        //     console.log('end of array - recalling');
        //     $timeout(function(){
        //         indexer = 0;
        //         $scope.loadImages(arr);
        //     }, 3000);
        // }else{
        //     console.log('current image loaded')
        //     $scope.currentImage = arr[indexer];
        //     indexer++;
        //     $timeout(function(){
        //         $scope.loadImages(arr);
        //     }, 4000);
        // }
    };

    $scope.$watch(function() {
        return $location.path();
    }, function(){
        if($location.path() === '/menu') {
            $scope.url = $location.path();
            console.log($scope.url);
            // $scope.loadImages($scope.doughnuts);
        } else if ($location.path() === '/' && $scope.url !== ''){
            $scope.url = $location.path();
            console.log($scope.url);
        } else if ($location.path() === '/about'){
            $scope.url = $location.path();
            console.log($scope.url);
        } else if ($location.path() === '/events'){
            $scope.url = $location.path();
            console.log($scope.url);
        }
    });

    buildImages();

}]);

