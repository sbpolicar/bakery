BakeryApp
.controller('HomeCtrl', ['$scope', '$location', '$timeout', '$http', function($scope, $location, $timeout, $http){
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

    var imageData = resource.resources;
    $scope.defaultSlide = [{name:"Select a category and start exploring", url:"http://res.cloudinary.com/spolicar/image/upload/v1456555051/seasonal/Valentines.jpg"}];

    $scope.showToggle = ' ';
    $scope.doughnuts = [];
    $scope.pastries = [];
    $scope.cookies = [];
    $scope.pies = [];
    $scope.savories = [];
    $scope.misc = [];
    $scope.seasonal = [];
    $scope.quiche = [];
    $scope.sandwiches = [];
    $scope.bread = [];
    $scope.salad = [];
    $scope.slides = $scope.defaultSlide;
    $scope.url = '';
    $scope.whichMenu = 'Sweets';
    $scope.whichEvent = 'videos';

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
            } else if (image.public_id.indexOf('savories') != -1) {
                $scope.savories.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('misc') != -1) {
                $scope.misc.push(image.url);
            } else if (image.public_id.indexOf('seasonal') != -1) {
                $scope.seasonal.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('quiche') != -1) {
                $scope.quiche.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('sandwiches') != -1) {
                $scope.sandwiches.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('salad') != -1) {
                $scope.salad.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('bread') != -1) {
                $scope.bread.push({name: image.name, url: image.url});
            }
        });
    }

    $scope.loadImages = function(arr){
        $scope.slides = [];
        $scope.slides = arr;
    };

    $scope.$watch(function() {
        return $location.path();
    }, function(){
        if($location.path() === '/menu') {
            $scope.url = $location.path();
        } else if ($location.path() === '/' && $scope.url !== ''){
            $scope.url = $location.path();
        } else if ($location.path() === '/about'){
            $scope.url = $location.path();
        } else if ($location.path() === '/events'){
            $scope.url = $location.path();
        }
    });

    buildImages();

}]);

