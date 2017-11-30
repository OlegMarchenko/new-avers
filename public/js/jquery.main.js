$(document).ready(function () {
    // cache the window object

    if ($('.v-header').length) {
        var $window = $(window);

        // Parallax background effect

        $('.v-header[data-type="background"]').each(function () {

            var $bgobj = $(this); // assigning the object

            $(window).scroll(function () {

                // scroll the background at var speed
                // The yPos is a negative value because we're scrolling iy UP!

                var yPos = -($window.scrollTop() / $bgobj.data('speed'));

                // Put together out final background position
                var coords = '50% ' + yPos + 'px';

                // Move the background
                $bgobj.css({backgroundPosition: coords});

            }); // end window scroll

        });
    }

    if($('.secondary-image').length) {
        $('.secondary-image').slick({
            slidesToShow: 4,
            asNavFor: '.bb',
        });
        $('.bb').slick({
            slidesToShow: 1,
            asNavFor: '.secondary-image',
            arrows: true,
            adaptiveHeight: true,
            fade: true
        });
    }

    $(".holder-similar-searches").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});
