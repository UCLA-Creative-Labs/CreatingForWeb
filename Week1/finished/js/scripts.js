$(document).ready(function(){ // Boilerplate wrapper for jQuery
	$( "#bounce-button" ).click(function() { // We use #, just like in CSS, to select by ID
		// console.log("Clicked!"); // Use this to test the click handler
		let ball = $( ".ball" ); // We can use jQuery to store DOM elements in normal variables
		ball.animate({
        'marginBottom' : "+=70vh" // Moves up
        });
        ball.animate({
        'marginBottom' : "-=70vh" // Moves down
        });
	});
});
