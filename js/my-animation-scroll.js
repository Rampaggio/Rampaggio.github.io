$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 20) {

            $('.titlesrt').addClass('fadeInRight');
        }

    });
});