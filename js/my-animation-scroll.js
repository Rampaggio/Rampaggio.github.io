$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 20) {

            $('.titlesrt').addClass('fadeInRight');
        }
        
        if(verticalScroll >= 500) {

            $('.titlesrt2').addClass('fadeInRight');
        }
        
         if(verticalScroll >= 800) {

            $('.titlesrt3').addClass('fadeInRight');
        }
        
        if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }

    });
});