sketchColumn = '<div class="column"></div>';
sketchDiv = '<div class="sketchdiv"></div>';
pixelCount = 0;

$(document).ready(function() {
// creates the initial grid
	for (var i = 0; i < 16; i++) {
		$('#sketchpad').append(sketchColumn);
		for (var j = 0; j < 16; j++) {
			$('.column').last().append(sketchDiv);
		}
	};
// hovering function that colors the hovered pixels
	$('.sketchdiv').hover(function() {
		$(this).addClass('on');
		}, function() {
		$(this).addClass('onpast');
	})
});


// prompts the user for input and creates custom grid
function getPixelCount() {
	pixelCount = prompt("Input a pixel count! It will be a square of your number.");
		if (pixelCount != null) {
			customSketchPad();
		};
};

// custom grid function
function customSketchPad() {
	$('#sketchpad').empty();
	for (var i = 0; i < pixelCount; i++) {
		$('#sketchpad').append(sketchColumn);
		for (var j = 0; j < pixelCount; j++) {
			$('.column').last().append(sketchDiv);
		}
	};
	$('.sketchdiv').hover(function() {
		$(this).addClass('on');
		}, function() {
		$(this).addClass('onpast');
	})
}