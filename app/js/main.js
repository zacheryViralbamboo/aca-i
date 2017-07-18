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

//Equal Column Height Function
function equalHeight() {

	// MatchHeight row > div
	$('.equalHeight').matchHeight({
		byRow : true,
		property : 'height',
		target : null,
		remove : false
	});
}

// Remove Function
function removeElement(event) {

	//	console.log('element=' + event );
	$("" + event ).css("display", "none");

}

function topTriangle() {

	// Get Screen Width
	var screenWidth = $( window ).width();

	// Change ALL class="topTriangle" into top Triangle div on the page
	$(".topTriangle").css("border-left", screenWidth  + "px solid transparent");
	$(".topTriangleReverse").css("border-right", screenWidth  + "px solid transparent");

}

function bottomTriangle() {

	// Get Screen Width
	var screenWidth = $( window ).width();

	// Change ALL class="topTriangle" into top Triangle div on the page
	// $(".bottomTriangle").css("border-right-width", screenWidth  + "px");
	$(".whiteTriangle").css("border-left", screenWidth  + "px solid #ffffff");
	$(".whiteTriangleReverse").css("border-right", screenWidth  + "px solid #ffffff");

}



// Pre Set Timelines
function menuAnimation() {

   // RESET: #nav1, #nav2, #nav3, #nav4, #nav5 { opacity:0; }
   $("#nav1").css("opacity", "0");
   $("#nav2").css("opacity", "0");
   $("#nav3").css("opacity", "0");
   $("#nav4").css("opacity", "0");
   $("#nav5").css("opacity", "0");
   $("#nav6").css("opacity", "0");

//  Menu Items fade and slide in to screen
var nav1 = new TimelineMax({delay:1})
	nav1.to("#nav1" , 0.5, {  opacity:1 , ease:Power1.easeInOut })
		.fromTo("#nav1" , 1, {x:-150}, {x:0}, { delay:2, ease:Back.easeInOut });

var nav2 = new TimelineMax({delay:1.5})
	nav2.to("#nav2" , 0.5, {  opacity:1 , ease:Power1.easeInOut })
		.fromTo("#nav2" , 1, {x:-150}, {x:0}, { delay:2, ease:Back.easeInOut });

var nav3 = new TimelineMax({delay:2})
	nav3.to("#nav3" , 0.5, {  opacity:1 , ease:Power1.easeInOut })
    	.fromTo("#nav3" , 1, {x:-150}, {x:0}, { delay:2, ease:Back.easeInOut });

var nav4 = new TimelineMax({delay:2.5})
	nav4.to("#nav4" , 0.5, {  opacity:1 , ease:Power1.easeInOut })
		.fromTo("#nav4" , 1, {x:-150}, {x:0}, { delay:2, ease:Back.easeInOut });

var nav5 = new TimelineMax({delay:3})
	nav5.to("#nav5" , 0.5, {  opacity:1 , ease:Power1.easeInOut })
		.fromTo("#nav5" , 1, {x:-150}, {x:0}, { delay:2, ease:Back.easeInOut });

var nav6 = new TimelineMax({delay:3.5})
	nav6.to("#nav6" , 0.5, {  opacity:1 , ease:Power1.easeInOut })
		.fromTo("#nav6" , 1, {x:-150}, {x:0}, { delay:2, ease:Back.easeInOut });

//  END - Menu Items fade and slide in to screen
}

function twitterAnimation() {

    // RESET: { opacity:0; }
    $("#tweet1").css("opacity", "0");
    $("#tweet2").css("opacity", "0");
    $("#tweet3").css("opacity", "0");

    //  Twitter Animation

	var tweet1 = new TimelineMax({delay:1.3})
	tweet1.to("#tweet1" , 0.8, {  opacity:1 , ease:Power1.easeInOut })
		.fromTo("#tweet1" , 0.3, {x:100}, {x:0}, { delay:2, ease:Back.easeInOut });

	var tweet2 = new TimelineMax({delay:2.3})
	tweet2.to("#tweet2" , 0.8, {  opacity:1 , ease:Power1.easeInOut })
		.fromTo("#tweet2" , 0.3, {x:-100}, {x:0}, { delay:2, ease:Back.easeInOut });

	var tweet3 = new TimelineMax({delay:3.3})
	tweet3.to("#tweet3" , 0.8, {  opacity:1 , ease:Power1.easeInOut })
		.fromTo("#tweet3 " , 0.3, {x:100}, {x:0}, { delay:2, ease:Back.easeInOut });

	//  END - Twitter Animation

}

// ON Menu Button Click Play open animation
$('.menuCircle').on('click', function()
{

	//  $(".menuCircle").css("display", "none");
	TweenMax.to(".menuCircle", 0.2, {opacity:0, scale:0 ,onComplete:removeElement, onCompleteParams:[".menuCircle"]});
    TweenMax.to(".menuBarContainer", 0.5, {height:"100vh", ease:Power2.easeInOut});

    // Play Button Timelines Animation
    menuAnimation();
    twitterAnimation();

	// Show Close Menu Button
    $(".menuCircleBottom").css("display", "block");
    TweenMax.to(".menuCircleBottom", 0.7, {delay:3.6, opacity:1, scale:1, ease:Power2.easeInOut });

});


 // Menu CLOSE Button Click Play animation
$('.menuCircleBottom, .mobileClose').on('click', function()
{
	TweenMax.to(".menuCircleBottom", 0.2, {opacity:0, scale:0 ,onComplete:removeElement, onCompleteParams:[".menuCircleBottom"]});
	TweenMax.to(".menuBarContainer", 0.5, {height:"6px", ease:Power2.easeInOut});

	// Show Close Menu Button
    $(".menuCircle").css("display", "block");
    TweenMax.to(".menuCircle", 0.7, {delay:1, opacity:1, scale:1, ease:Power2.easeInOut });

});



function copyright() {

console.log("%c © Double Click Design", "color: red; font-family: sans-serif; font-size: 2.0em; font-weight: bolder;");
console.log("%c ...together anything is possible!", "color: black; font-family: sans-serif; font-size: 1.5em; font-weight: bolder;");

}








// Responsive Bootrstrap Function Go Here
// ---------------------------------------

(function($, viewport){

	$(window).bind("load", function() {

		// console.log('Thank you for looking under the hood of ACA+i. If you like what you see come check us out at http://www.double-click-design.com')
		copyright();

	   	// on Image Load
	   	if(viewport.is('>=sm')) {

			// homeAnimation();
			// projectAnimation();
		}

		// Apply Style to page elements
		 topTriangle();
		 bottomTriangle();


	});


    $(document).ready(function() {



    if(viewport.is('xs')) {

		equalHeight();
		// If Mobile menu background overflow scrollable
		 $(".menuBarContainer").css("overflow-y", "scroll");

		 $("#projectImg").css("opacity", "1");


	}

	// Executes once whole document has been loaded

	// First check to see it not a mobile device
	if(viewport.is('>=sm')) {

		equalHeight();

		// Menu Open Button
    	$('.menuCircle').mouseover(function (e){
			 TweenMax.to(".menuArrow", 0.4, { ease:Power4.easeInOut, y: "4px", repeat:-1, yoyo:true});

		});
		$('.menuCircle').mouseout(function (e){
			  TweenMax.to(".menuArrow", 0.2, { ease: Bounce.easeIn, y: "0px" });

		});

		// Menu Close Button
		$('.menuCircleBottom').mouseover(function (e){
			 TweenMax.to(".menuArrow", 0.4, { ease:Power4.easeInOut, y: "-4px", repeat:-1, yoyo:true});

		});
		$('.menuCircleBottom').mouseout(function (e){
			  TweenMax.to(".menuArrow", 0.2, { ease: Bounce.easeIn, y: "0px" });

		});




		// Footer
		$('.twitterFeedContainer div').addClass('twitterGutter');



	}



	// ---------------------------------------------- //
	// Execute code each time window size changes     //
	// ---------------------------------------------- //
    $(window).resize(
    	viewport.changed(function() {



    	if(viewport.is('xs')) {
    		 $("#projectImg").css("opacity", "1");
    	}

    	if(viewport.is('>=sm')) {




		}

		equalHeight();

		// Apply Style to page elements
		topTriangle();
		bottomTriangle();

        })
    );
	// END Window size changes



     });
})(jQuery, ResponsiveBootstrapToolkit);
