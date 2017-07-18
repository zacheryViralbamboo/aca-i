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
function homeAnimation() {


	// RESET: { opacity:0; }
   $("#animationHeaderContainerHome").css("opacity", "0");
   $("#projectImg").css("opacity", "0");

	// get Browser Height
	var container = document.getElementById('animationHeaderContainerHome');
	var containerHeight = container.clientHeight;

	// get Building Image Height
	var img = document.getElementById('projectImg');
    var buildingHeight = img.clientHeight;

	var marginTop = (containerHeight-buildingHeight);

	// console.log('containerHeight=' + containerHeight);
    // console.log('Image=' + buildingHeight);
    // console.log('Total=' + marginTop);

	$("#animationHeaderContainerHome").css("padding-top", marginTop + "px");

	var aniHeader = new TimelineMax({delay:0.5})
	aniHeader.to("#animationHeaderContainerHome" , 0.5, {  opacity:1 , ease:Power1.easeInOut })


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
			homeAnimation();

		}


	});


    $(document).ready(function() {

   //Listen for the mouse over
    $('a.tablinks').mouseover(function(){

    	//Set the pointer
    	$(this).css('cursor','pointer');

    	//Listen for the click
    	$(this).click(function(e){

    		if (e.originalEvent !== undefined) {

    		//Get the link we need to go to
    	     var urlLink = $(this).attr('data-url');

    		//Redirect the user
    		location.href = urlLink;

    		}

    	})

    })



    /**
     * Click binder for the tab section
     */

    $('button.cntrls').click(function(e){

    	//Prevent the default click action
    	e.preventDefault;

    	// Set the directional params.
    	var direction = parseInt($(this).attr('data-direction'));

    	//Set the index
    	var index;

    	$('ul.homeTabs li').each(function(i) {

    		//create an instance of this
    		var $this = $(this);

    		//Have we got an active state
    		if($this.hasClass('active')) {

    			switch(direction) {

    				//Going left
    				case 1:

    				    //deduct 1 from element index to get previous
    				    index = i - 1;

    					//Are we on the first element
    					if(i == 0) {

    						//Reset index to get the last, so we cycle correct
    						index = 3;

    						}

    				break;

    				//going right
    				case 2:

    					//add 1 to element index to get next
    					index = i + 1;

    				     //Are we on the last one
    					if(i == 3) {

    					    //set index to first one then we cycle back to begining
    						index = 0;

    						}

    				break;

    			}

    		}

    	})

    	//Initiate a fake click
    	$('ul.homeTabs li a').eq(index).trigger('click');

    	return false;
    })

    if(viewport.is('xs')) {

	//	console.log('doc ready mobile height');
	//	 mobileHeight = ($(window).height()-35);
	//	 $("#animationHeaderContainerHome").css("border",  "2px solid #333399");
	//	 $("#animationHeaderContainerHome").css("height", mobileHeight + "px");





	}

	// Executes once whole document has been loaded

	// First check to see it not a mobile device
	if(viewport.is('>=sm')) {



	}



	// ---------------------------------------------- //
	// Execute code each time window size changes     //
	// ---------------------------------------------- //
    $(window).resize(
    	viewport.changed(function() {

    	if(viewport.is('xs')) {

    	}

    	if(viewport.is('sm')) {
    		 $("#animationHeaderContainerHome").css("padding-top",  "0px");
			  $("#projectImg").css("opacity", "1");
		}

    	if(viewport.is('>sm')) {
    		$("#animationHeaderContainerHome").css("opacity",  "0");
			$("#projectImg").css("opacity", "0");
			homeAnimation();

		}



        })
    );
	// END Window size changes



     });
})(jQuery, ResponsiveBootstrapToolkit);
