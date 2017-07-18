/*!
 * Double Click Custom JS Theme
 *
 * Copyright Double Click Design 2016 All Rights Reserved.
 *
 * Author: Mark Barton, Paul Stevenson
 *
 * November 21th 2016
 */


/* Function START HERE */
// --------------------



// Project Animation Header
function projectAnimation() {


   // RESET: { opacity:0; }
   $("#animationHeaderContainer").css("opacity", "0");
   $("#projectImg").css("opacity", "0");

	// get Browser Height
	var container = document.getElementById('animationHeaderContainer');
	var containerHeight = container.clientHeight;

	// get Building Image Height
	var img = document.getElementById('projectImg');
        var buildingHeight = img.clientHeight;

	var marginTop = (containerHeight-buildingHeight);

 //  console.log('containerHeight=' + containerHeight);
 //  console.log('Image=' + buildingHeight);
 //  console.log('Total=' + marginTop);

	$("#animationHeaderContainer").css("padding-top", marginTop + "px");

	var aniHeader = new TimelineMax({delay:0.5})
	aniHeader.to("#animationHeaderContainer" , 0.5, {  opacity:1 , ease:Power1.easeInOut })


	var projectImg = new TimelineMax({delay:1.5})
	projectImg.to("#projectImg" , 0.5, {  opacity:1 , ease:Power1.easeInOut })
		.fromTo("#projectImg" , 0.8, {y:-150}, {y:0}, { delay:1, ease:Back.easeInOut });


	return true;
}



// Responsive Bootrstrap Function Go Here
// ---------------------------------------

(function($, viewport){

	$(window).bind("load", function() {

	   	// on Image Load
	   	if(viewport.is('>=sm')) {
			projectAnimation();

		}


	});


    $(document).ready(function() {



    	// Smooth scrolling - scroll page smoothly to the information
		$('.anchorLink').click(function() {

			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		    	var target = $(this.hash);

		       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		       if (target.length) {

		       	$('html, body').animate({
		        	scrollTop: target.offset().top
		         }, 1000);

		         return false;


		       	}
		       }
		 });

    if(viewport.is('xs')) {




	}

	// Executes once whole document has been loaded

	// First check to see it not a mobile device
	if(viewport.is('>=sm')) {



	}



	//  The window width
    var windowWidth = $(window).width();


	// ---------------------------------------------- //
	// Execute code each time window size changes     //
	// ---------------------------------------------- //
    $(window).resize(
    	viewport.changed(function() {




    	if(viewport.is('>=sm')) {
    		// on Image Load

		if ($(window).width() != windowWidth) {

	    		projectAnimation();
				// Update the window width for next time
            	windowWidth = $(window).width();

		}
	}



        })
    );
	// END Window size changes



     });
})(jQuery, ResponsiveBootstrapToolkit);
