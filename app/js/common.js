$(function() {

// animation
  $('.graph_item_line_toch').animated('slideInLeft , slideInLeft');
//slider

	$('.slider_wr').owlCarousel({
		items:1,
	    loop:true,
	    margin:0,
	   	nav:true,
	    dots: true,
	    
	    navText:[
            "<i class='fa fa-angle-left fa-2x'></i>",
            "<i class='fa fa-angle-right fa-2x'></i>"
        ]
        
	  
	});	  

});
