// Slide menu
  $(document).ready(function(){  	    				
    $(".toggle-menu-42").click(function () {
        $("ul.dmenu-65").slideToggle("slow");
        $(this).toggleClass("toggle-collapse");								   
      });
      
    $(".toggle-menu-8").click(function () {
        $("ul.dmenu-32").slideToggle("slow");
        $(this).toggleClass("toggle-collapse");								   
      });      
					                      
  });
  

// Login form
    $(document).ready(function() {
        $('#login_btn').click(function() {
          $('#auth_form_frame').toggle();
        }); 
        
        $('.close_btn').click(function() {
          $('#auth_form_frame').toggle();
        });                  
   });
   
  if ( $(".message").hasClass("message-error") ) {
    $('#auth_form_frame').addClass('form-active');
  }  
  
// Animation for sports menu
$(function() {
  var interval = 10;
  var duration= 1000;
  var shake= 3;
  var selector = $('.ports-menu ul li'); /* Your own container ID*/
    $(selector).each(function(){
        var elem = this;
        var vibrateIndex;
        var timeoutIndex;
        $(this).hover( /* The button ID */

        function(){ 
            vibrateIndex = setInterval(function(){
                vibrate(elem); 
            }, interval, 0);
          timeoutIndex = setTimeout(function(){clearInterval(vibrateIndex)},1000);
        },
          function(){
            clearInterval(vibrateIndex);
           clearTimeout(timeoutIndex); 
          }
    );
    })

    var vibrate = function(elem){
        $(elem).stop(true,false)
        .css({position: 'relative', 
        left: Math.round(Math.random() * shake) - ((shake + 1) / 2) +'px', 
        top: Math.round(Math.random() * shake) - ((shake + 1) / 2) +'px'
        });
    }
});

