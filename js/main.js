 /*! main.js | MAG Splash Page */

 $(document).ready(function() {
     //*** terms binding
     $("#terms").load("views/terms.html");
     //*** privacy binding
     $("#privacy").load("views/privacy.html");

     $(".version").html("v4.4.6 | 03/25/2016");
     // $(".version").html("v4.4.6 | 03/25/2016");
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
 (function(d, s, id) {
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) return;
     js = d.createElement(s);
     js.id = id;
     js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=218558148336038";
     fjs.parentNode.insertBefore(js, fjs);
 }(document, "script", "facebook-jssdk"));