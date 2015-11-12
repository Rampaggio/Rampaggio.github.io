$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 50) {

            $('.titlesrt').addClass('fadeInRight');
        }
        
        if(verticalScroll >= 1000) {

            $('.titlesrt2').addClass('fadeInRight');
        }
        
         if(verticalScroll >= 1500) {

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