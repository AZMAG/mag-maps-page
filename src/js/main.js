/* ========================================================================
 * Maricopa Association of Governments
 * JS document
 * @project     MAG Main Map Page
 * ========================================================================
 * @file        main.js
 * @summary     main javascript files for project
 * ========================================================================
 */

$(document).ready(function() {
    //*** terms binding
    $("#terms").load("views/terms.html");
    //*** privacy binding
    $("#privacy").load("views/privacy.html");
    //*** version binding
    $(".version").html("v4.7.6 | 2018-02-26");
    //*** copy write binding
    $(".copyright").html("2018");
});

// *** social pluggins
// twitter
! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? "http" : "https";
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, "script", "twitter-wjs");
// google +1
(function() {
    var po = document.createElement("script");
    po.type = "text/javascript";
    po.async = true;
    po.src = "https://apis.google.com/js/platform.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(po, s);
})();
// facebook
window.fbAsyncInit = function() {
    FB.init({
        appId: '929950963769905',
        xfbml: true,
        version: 'v2.6'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



//*********** NEW ******

$('.toggle-links').click(function() {

    "use strict";
    $('.collapseGroup .collapse').collapse("hide");
    var showTarget = $(this).attr('href');

    $(showTarget).collapse("show");

    if (!$(this).hasClass('active')) {
        $('.toggle-links').removeClass('active');
        $(this).addClass('active');
    }
});

//Change active on navigation
$(function() {
    "use strict";
    $('#magNavbar .nav li a').each(function() {
        if ($(this).prop('href') === window.location.href) {
            $(this).parent('li').addClass('active');
        }
    });
});


$(window).scroll(function() {

    "use strict";
    if ($(document).scrollTop() > 20) {
        $('.scrollTop').css('opacity', '1');
    } else {
        $('.scrollTop').css('opacity', '0');
    }

});

$('.scrollTop').click(function() {
    "use strict";
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});

$(document).ready(function() {
    $('#playlistOne').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoints: 768,
                setttings: {
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }

        ]
    });
});
