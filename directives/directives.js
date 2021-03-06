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
                        $('.header').find('.logo').attr('src','./assets/images/logo2.svg');
                        $('.navbar-default .navbar-toggle').css('border-color', '#6EB253');
                        $('.navbar-default .navbar-toggle .icon-bar').css('background-color','#6EB253')
                        if (document.documentElement.clientWidth < 750){
                            $('.down .container ul li a').css('color', '#fff');
                            $('.down .container ul li').click(function(){

                            })
                        }else{
                            $('.down .container ul li a').css('color', '#6EB253')

                        }

                    } else {
                        $('.container ul li a').css('color', '#fff')
                        $('.header').removeClass('down');
                        $('.logo').attr('src','./assets/images/logo.svg');
                        $('.navbar-nav').find('li').removeClass('focus');
                        $('.navbar-default .navbar-toggle .icon-bar').css('background-color','#fff')
                        $('.navbar-default .navbar-toggle').css('border-color', '#fff');
                    }
                });

                $(window).resize(function(){
                    if (document.documentElement.clientWidth < 750){
                        $('.down .container ul li a').css('color', '#fff');

                    }else{
                        $('.down .container ul li a').css('color', '#6EB253');
                    }
                })

                $('.navbar ul li').click(function(e){
                    e.preventDefault();
                    if(document.documentElement.clientWidth < 750){
                        $('.navbar-toggle').click();
                    }
                    if($('.navbar').hasClass('down')){
                        $(this).closest('.navbar-nav').find('li').removeClass('focus');
                        $(e.currentTarget).addClass('focus');
                    }
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
    .directive('propiedades', function(){
        return{
			restrict: 'E',
			templateUrl: './pages/propiedades/grid.html',
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
