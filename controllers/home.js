app.controller('mainController', function($scope){
    window.addEventListener('scroll', function(e){

        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 300,
        header = document.querySelector("header");
        if (distanceY > shrinkOn) {

            $('nav > .container > .first ').fadeOut('fast');

            } else {
            $('nav > .container > .first ').fadeIn('fast');


        }
    });
})
