 $(document).ready(function(){
 	$(".button-collapse").sideNav(); 
 	$('.scrollspy').scrollSpy();    

 	$('.move-to-top').on('click', function(e) {
        $('body, html').stop().animate({scrollTop: 0}, 'slow', 'swing');
        e.preventDefault();
    });

    //lets show the button when the page scroll to about 400 pixels
    //change the value to your desired offset
    $(window).scroll(function() {
        if($(window).scrollTop() > 500){
            //show the button when scroll offset is greater than 400 pixels
            $('.move-to-top').fadeIn('slow');
        }else{
            //hide the button if scroll offset is less than 400 pixels
            $('.move-to-top').fadeOut('slow');
        }
    });


 });