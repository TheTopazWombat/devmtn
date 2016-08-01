angular.module('dojoApp')
.controller('zenCtrl', function($scope){
  $scope.photos = [
        {src: 'http://cdn.thedailybeast.com/content/dailybeast/articles/2013/08/02/the-9-hottest-power-cats-of-instagram/jcr:content/image.crop.800.500.jpg/46676791.cached.jpg', desc: 'Image 01'},
        {src: 'http://static.spiceworks.com/shared/post/0010/0020/pics-for-gt-space-cat-iphone-wallpaper-wallpaper-cats-in-space-direct-hd-download-for-iphone-ipad-borders-free-naruto-mobile-3d.jpg', desc: 'Image 02'},
        {src: 'http://s1.cdn.autoevolution.com/images/news/yamaha-scraps-off-valentino-rossi-s-superbike-project-3726_1.jpg', desc: 'Image 03'},
        {src: 'http://motorcyclephotooftheday.files.wordpress.com/2010/04/rossi-qatar-test.jpg', desc: 'Image 04'},
        {src: 'http://fc07.deviantart.net/fs71/i/2013/080/7/c/the_black_mamba__return_by_lisong24kobe-d5yt129.jpg', desc: 'Image 05'},
        {src: 'http://www.desktopimages.org/pictures/roger-federer-2013-tennis-wallpaper-57272.jpg',
        desc: 'Image 06'},
         {src: 'http://images.mcn.bauercdn.com/upload/209223/images/Chad%20Reed.jpg',
        desc: 'Image 06'}
    ];


   

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        ;
        ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };




})
