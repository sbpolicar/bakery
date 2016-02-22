var SlideShow = angular.module('simple-slideshow', ['template/slideshow.html', 'template/slide.html']);

SlideShow.directive('slideshow', function(){
    return {
        scope: {

        },
        controller: function($scope, $element, $attrs, $transclude) {
            var ctrl = this,
                slides = ctrl.slides = $scope.slides = [];

            ctrl.addSlide = function addSlide(slide){
                slides.push(slide);
            };

            ctrl.select = function(slide){
                $scope.currentslide = slide;
            };
        },
        controllerAs: 'slideshowCtrl',
        restrict: 'AE',
        templateUrl: 'template/slideshow.html',
        transclude: true,
        link: function($scope, iElm, tAttrs){

        }
    };
});

SlideShow.directive('slide', ['$parse', function($parse){
    return {
        require: '^slideshow',
        restrict: 'AE',
        templateUrl: 'template/slide.html',
        transclude: true,
        replace: true,
        compile: function(elm, attrs, transclude){
            return {
                pre: function preLink(scope, elm, attrs, slideshowCtrl){
                    scope.$watch('slide', function() {
                        scope.select(scope.slide);
                        if(elm){
                            elm.on('click', function(elm){

                                scope.$apply(scope.select(scope.slide));
                            });
                        }
                    })
                    scope.select = function(slide){
                        slideshowCtrl.select(slide);
                    };

                    slideshowCtrl.addSlide(scope.slide);
                },
                post: function postLink(scope, elm, attrs, slideshowCtrl){
                    slideshowCtrl.select(slideshowCtrl.slides[0]);
                }
            };
        }
    };
}]);

angular.module("template/slideshow.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("template/slideshow.html",
        '<div class="slide-container">' +
        '<div class="slide-image-wrap"><img class="slide-image slide" ng-src="{{currentslide.url}}" alt="{{currentslide.name}}" /><h3 class="subtitle">{{currentslide.name}}</h3></div>' +
        '</div>' +
        '<div class="slides-wrap"><span ng-transclude></span></div>'
    );
}]);

angular.module("template/slide.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("template/slide.html",
        '<a class="dot" href><i class="fa fa-circle fa-fw"></i>{{slide.name}}</a>'
    );
}]);