   $(document).ready(function () {
      $("#textsizer-classnames a").textresizer({
         target: "#content",
         type: "cssClass",
         sizes: [ 
            "medium-text", 
            "large-text", 
            "larger-text" 
         ],
         selectedIndex: 1
      });
      
      $("#lineheight-classnames a").textresizer({
         target: "#content",
         type: "cssClass",
         sizes: [ 
            "line-medium", 
            "line-large", 
            "line-larger" 
         ],
         selectedIndex: 1
      });
      
      $("#color-classnames a").textresizer({
          target: "body",
          type: "cssClass",
          sizes: [ 
             "color-1", 
             "color-2", 
             "color-3" 
          ],
          selectedIndex: 1
       });
       
      $("#media-classnames a").textresizer({
          target: "#content",
          type: "cssClass",
          sizes: [ 
             "media-on",
             "media-off"
          ],
          selectedIndex: 1
       });       

      $('.banner-caption br').replaceWith(' ');
      
      //$('a[href^=class="magnificpopup"]').not('a[href*=gusdecool]').attr('target','_blank');   
      //$("a").removeAttr("href").css("cursor","pointer");
   });
   
 
	if ( $("#content").hasClass("media-off") ) {
		alert("!");
		//$("a").removeAttr("href").css("cursor","pointer");
	}   
   
//$("a").removeAttr("href").css("cursor","pointer");