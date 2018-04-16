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
     $(".version").html("v4.7.7 | 2018-04-16");
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
      appId      : '929950963769905',
      xfbml      : true,
      version    : 'v2.6'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
