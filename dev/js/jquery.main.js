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
            infinite: true,
            focusOnSelect: true,
            speed: 800
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

    if ($('.site-flat').length) {
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);


        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 14,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(49.965640, 36.363534), // localisation position

                // How you would like to style the map.
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [{"weight": "2.00"}]
                }, {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [{"color": "#9c9c9c"}]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [{"visibility": "on"}]
                }, {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{"color": "#f3f3f3"}]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#f3f3f3"}]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#f3f3f3"}]
                }, {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{"visibility": "off"}]
                }, {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{"saturation": -100}, {"lightness": 45}]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#ffffff"}]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#929292"}]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{"color": "#ffffff"}]
                }, {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{"visibility": "simplified"}]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{"visibility": "off"}]
                }, {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{"visibility": "off"}]
                }, {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{"color": "##d1d1d1"}, {"visibility": "on"}]
                }, {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#d1d1d1"}]
                }, {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#070707"}]
                }, {"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{"color": "#ffffff"}]}]
            };

            // Get the HTML DOM element that will contain your map
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(49.965640, 36.363534), // Marker position
                map: map,
                animation: google.maps.Animation.DROP,
                icon: 'images/icons/home-marker.svg'
            });
        }
    }
});
