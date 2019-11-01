/* ========================================================================
 * Maricopa Association of Governments
 * JS document
 * @project     MAG Main Map Page
 * ========================================================================
 * @file        main.js
 * @summary     main JavaScript files for project
 * ========================================================================
 */

$(document).ready(function() {
    "use strict";
    //*** Load page sections

    //Load nav bar then run function that adds active to nav link
    $("#navbar-section").load("app/views/section-navbar.html", function() {
        $("#magNavbar .nav li a").each(function() {
            if ($(this).prop("href") === window.location.href) {
                $(this).parent("li").addClass("active");
            }
        });

        /*twitter share button href*/
        var baseUrl = 'https://twitter.com/intent/tweet';
        var text = "MAG%20%7C%20Mapping%20Center";
        var thisPageUrl = "https://maps.azmag.gov/";
        var hashTag = "MAGmaps";
        var via = "MAGregion";

        var twitterHref = (baseUrl + "?text=" + text + "&url=" + thisPageUrl + "&hashtag=" + hashTag + "&via=" + via);

        $('#TWshareButton').attr('href', twitterHref);
    });

    $("#carousel-section").load("app/views/section-carousel.html");
    $("#maps-section").load("app/views/section-maps.html");
    $("#video-section").load("app/views/section-video.html");
    $(".footer-section").load("app/views/section-footer.html", function() {
        //*** terms binding
        $("#termsModal").load("app/views/modal-terms.html");
        //*** privacy binding
        $("#privacyModal").load("app/views/modal-privacy.html");
        //*** version binding
        $(".version").html("v5.0.18 | 2019-11-01");
        //*** copy write binding
        $(".copyright").html("2019");
    });
    $("#pastUpdates").load("app/views/section-pastUpdates.html");
    $("#mostRecent").load("app/views/section-recentUpdates.html");

    //*** Modals ***
    $("#stateDemographics").load("app/views/modal-stateDemographics.html");
    $("#rad").load("app/views/modal-rad.html");
    $("#readOnAZ").load("app/views/modal-readOnAZ.html");
    $("#employment").load("app/views/modal-employment.html");
    $("#stateEmployment").load("app/views/modal-stateEmployment.html");
    $("#bikeways").load("app/views/modal-bikeways.html");
    $("#landUse").load("app/views/modal-landUse.html");
    $("#projections").load("app/views/modal-projections.html");
    $("#neighborhood").load("app/views/modal-neighborhood.html");
    // $("#spineStudy").load("app/views/modal-spineStudy.html");
    $("#atp").load("app/views/modal-atp.html");
    $("#tip").load("app/views/modal-tip.html");
    $("#schoolsDataCenter").load("app/views/modal-schoolsDataCenter.html");
    $("#urbanAreas").load("app/views/modal-urbanAreas.html");
    $("#heatRelief").load("app/views/modal-heatRelief.html");
});

/*
 ***********************************
 * social pluggins
 ***********************************
 */

// twitter widget js loading
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

//LinkedIn
$(document).on('click', '#INshareButton', function() {
    window.open("https://www.linkedin.com/shareArticle?url=http://maps.azmag.gov/", "shareLinkedIn", 'width=650, height=700');
});

// google +1
(function() {
    var po = document.createElement("script");
    po.type = "text/javascript";
    po.async = true;
    po.src = "https://apis.google.com/js/platform.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(po, s);
})();

$(document).on('click', '#GPlusShareButton', function() {
    window.open("//plus.google.com/share?url=http%3A%2F%2Fmaps.azmag.gov%2F", 'shareGooglePlus', 'width=400, height=700');
});

// facebook
//share dialog - use on('click') for it to work afte loading html
$(document).on('click', '#FBshareButton', function() {
    FB.ui({
        method: 'share',
        mobile_iframe: true,
        href: 'https://maps.azmag.gov/',
    }, function(response) {});
});

window.fbAsyncInit = function() {
    FB.init({
        appId: "929950963769905",
        cookie: true,
        xfbml: true,
        version: "v2.12"
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


$(document).on('click', '.shareButton button', function(e) {

    e.preventDefault();
    $(this).toggleClass('active');
    var shareBox = $(this).attr('data-target');

    if ($(this).hasClass('active')) {
        $(shareBox).show();
    }
});

$('body').mouseup(function(e) {
    var parentTarget = $(e.target).parents('#shareBox');

    if (e.target.id !== 'shareBox' && parentTarget.length < 1 && $(e.target).hasClass('shareButton') == false) {
        $('#shareBox').hide();
        $('.shareButton button').removeClass('active');
    }
});

//Open email window
function openNewWindow(obj) {
    "use strict";
    var thisHref = obj.href;
    window.open(thisHref, 'popup', 'width=600,height=600');
    // <!-- comments:uncomment // -->
    // ga("send", "event", "Click", "Email-Button", "Email-Button");
    // <!-- endcomments -->
}

//collapse one at a time
$(".toggle-links").click(function() {
    "use strict";
    $(".collapseGroup .collapse").collapse("hide");
    var showTarget = $(this).attr("href");

    $(showTarget).collapse("show");

    if (!$(this).hasClass("active")) {
        $(".toggle-links").removeClass("active");
        $(this).addClass("active");
    }
});

$(window).scroll(function() {
    "use strict";
    if ($(document).scrollTop() > 20) {
        $(".scrollTop").css("opacity", "1");
    } else {
        $(".scrollTop").css("opacity", "0");
    }

});

$(".scrollTop").click(function() {
    "use strict";
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

// ------------------------------
// GOOGLE ANALYTICS CTA TRACKING
// -----------------------------
$(document).on('click', '.track', function(e) {
    var text = $(this).text(); // Grab the text from the button
    // console.log(text);
    // <!-- comments:uncomment // -->
    // ga('send', 'event', 'Button', 'Click', text);
    // <!-- endcomments -->
});
