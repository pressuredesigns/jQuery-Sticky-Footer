$(document).ready(function() { 


       
       var footerHeight = 0,
           footerTop = 0,
           $footer = $("#footerContain");
           
       positionFooter();
       
       function positionFooter() {
       
                footerHeight = $footer.height();
                footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
       
               if ( ($(document.body).height()+footerHeight) < $(window).height()) {
                   $footer.css({
                        position: "absolute"
                   }).animate({
                        top: footerTop
                   }, -1)
               } else {
                   $footer.css({
                        position: "static"
                   })
               }
               
       }
       
	$(window).resize(function() {
  		 positionFooter();
	});
               
});
