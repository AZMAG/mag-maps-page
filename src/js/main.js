 /* ========================================================================
 * MAG Main Map Page
 * Maricopa Association of Governments
 * JavaScript file for MAG Main Map Page
 * =========================================================================
 * @project		MAG Main Map Page
 * @file		main.js
 * @version 	4.6.4
 * @date 		08/07/2017
 * @copyright 	2017 MAG
 * @licensed 	MIT
 * =========================================================================
 */

 $(document).ready(function() {
     //*** terms binding
     $("#terms").load("views/terms.html");
     //*** privacy binding
     $("#privacy").load("views/privacy.html");
     //*** version binding
     $(".version").html("v4.6.4 | 08/07/2017");
     //*** copy write binding
     $(".copyright").html("2017");
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
