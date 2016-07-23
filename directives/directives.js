angular.module('rhome.directives', [])

    .directive('menuheader', function(){
        return{
			restrict: 'E',
			templateUrl: './pages/header.html',
			controller: function($document){
                window.addEventListener('scroll', function(e){
                    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                    shrinkOn = 300,
                    header = document.querySelector("header");
                    if (distanceY > shrinkOn) {
                        $('.header').addClass('down');
                        $('.logo').attr('src','./assets/images/logo2.svg');
                    } else {
                        $('.header').removeClass('down');
                        $('.logo').attr('src','./assets/images/logo.svg');
                        $('.navbar-nav').find('li').removeClass('focus');
                    }
                });

                $('.navbar ul li').click(function(e){
                    $(this).closest('.navbar-nav').find('li').removeClass('focus');
                    $(e.currentTarget).addClass('focus');
                });

                $('a[href^="#"]').on('click', function (e) {
                    e.preventDefault();
                    $(document).off("scroll");

                    $('a').each(function () {
                        $(this).removeClass('focus');
                    })
                   $(this).addClass('focus');

                    var target = this.hash,
                        menu = target;
                        $target = $(target);
                    $('html, body').stop().animate({
                        'scrollTop': $target.offset.top+2
                    }, 500, 'swing', function () {2
                        window.location.hash = target;
                       $(document).on("scroll", onScroll);
                   });
                });

                function onScroll(event){
                    var scrollPos = $(document).scrollTop();
                    $('.nav > a').each(function () {
                        var currLink = $(this);
                        var refElement = $(currLink.attr("href"));
                        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                            $('.navbar ul li a').removeClass("focus");
                            currLink.addClass("focus");
                        }
                        else{
                            currLink.removeClass("active");
                        }
                    });
                }
			}
		}
    })
    .directive('quienesomos', function(){
        return{
			restrict: 'E',
			templateUrl: './pages/quinesomos.html',
			controller: function($document){

			}
		}
    })
    .directive('proyectos', function(){
        return{
			restrict: 'E',
			templateUrl: './pages/proyectos/grid.html',
			controller: function($document){

			}
		}
    })
    .directive('desarrollos', function(){
        return{
			restrict: 'E',
			templateUrl: './pages/desarrollos/grid.html',
			controller: function($document){

			}
		}
    })
    .directive('contacto', function(){
        return{
			restrict: 'E',
			templateUrl: './pages/contacto.html',
			controller: function($document){

			}
		}
    })

    .directive('footer', function(){
        return{
			restrict: 'E',
			templateUrl: './pages/footer.html',
			controller: function($document){

			}
		}
    })
