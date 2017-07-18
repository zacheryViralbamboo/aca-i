/*!
 * Double Click Custom JS Theme
 *
 * Copyright Double Click Design 2016 All Rights Reserved.
 *
 * Author: Mark Barton, Paul Stevenson
 *
 * November 21th 2016
 */

// Home Animation Header
function projectAnimation() {


	// RESET: { opacity:0; }
   $("#animationHeaderContainerProject").css("opacity", "0");
   $("#projectImg").css("opacity", "0");



	var aniHeader = new TimelineMax({delay:0.5})
	aniHeader.to("#animationHeaderContainerProject" , 0.5, {  opacity:1 , ease:Power1.easeInOut })


	var projectImg = new TimelineMax({delay:1.5})
	projectImg.to("#projectImg" , 0.8, {  opacity:1 , ease:Power1.easeInOut });
	//	.fromTo("#projectImg" , 0.8, {y:-150}, {y:0}, { delay:1, ease:Back.easeInOut });


	return true;
}


// Responsive Bootrstrap Function Go Here
// ---------------------------------------

(function($, viewport){

	$(window).bind("load", function() {

		if(viewport.is('sm')) {
			  $("#projectImg").css("opacity", "1");
		}


	   	// on Image Load
	   	if(viewport.is('>sm')) {
			projectAnimation();

		}


	});


    $(document).ready(function() {


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

    	if(viewport.is('xs')) {

    	}

    	if ($(window).width() != windowWidth) {

	    	if(viewport.is('sm')) {
	    		 $("#animationHeaderContainerProject").css("padding-top",  "0px");
				  $("#projectImg").css("opacity", "1");
			}

	    	if(viewport.is('>sm')) {
	    		$("#animationHeaderContainerProject").css("opacity",  "0");
				$("#projectImg").css("opacity", "0");
				projectAnimation();

			}

			// Update the window width for next time
            	windowWidth = $(window).width()

		}

        })
    );
	// END Window size changes



     });
})(jQuery, ResponsiveBootstrapToolkit);
