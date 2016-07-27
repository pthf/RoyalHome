app.controller('mainController', function($scope, $timeout){
    function isScrolledIntoView(elem) {
        view = false;
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        if( ((elemBottom-500 <= docViewBottom) && (elemTop+320 >= docViewTop)) ){
            view = true;
        }
        return view;
    }

    $(window).scroll(function () {
        $('.grid > .b-grid').each(function () {
            if (isScrolledIntoView(this) === true)
                $(this).addClass('in-view');
            else
                $(this).removeClass('in-view');
        });
    });

    $scope.getDetailGrid = function(){
        $('#myModal').modal({
            show: true,
            backdrop: true
        });

        $('#myModal').on('shown.bs.modal', function(event){
                $('body').css('overflow','hidden');
                var galleryTop = new Swiper('.gallery-top', {
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    spaceBetween: 10,
                    setWrapperSize: true
                });
                var galleryThumbs = new Swiper('.gallery-thumbs', {
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    touchRatio: 0.2,
                    slideToClickedSlide: true,
                    autoHeight: true,
                    freeMode: true

                });
                galleryTop.params.control = galleryThumbs;
                galleryThumbs.params.control = galleryTop;

        });
        $('#myModal').on('hide.bs.modal	', function(event){
            $('body').css('overflow','visible');
        })
    }




});
