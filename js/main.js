 /* ========================================================================
 * Maricopa Association of Governments
 * MAG main.js | v4.4.12 | MAG Main Map Page
 * http://ims.azmag.gov/
 * ========================================================================
 * Copyright 2016 MAG
 * Licensed under MIT
 * ======================================================================== */

 $(document).ready(function() {
     //*** terms binding
     $("#terms").load("views/terms.html");
     //*** privacy binding
     $("#privacy").load("views/privacy.html");

     $(".version").html("v4.4.12 | 06/16/2016");
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