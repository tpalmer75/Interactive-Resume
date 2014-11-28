$(document).ready(function() {

	var tabLink = $('#menu li a');
	var allTabs = $('#menu li');
	var container = $('#container');

	var initialHeight = $('.col-1').height();
	container.css('height', initialHeight);

	tabLink.click(function(e) {
		
		// Set the data value as a variable
		var placement = $(this).data('left');
		var column = $(this).data('col');

		// Slide the container
		container.css('left', placement);

		// Clear all tabs
		allTabs.removeClass('active');
		// Activate the clicked tab
		var thisTab = $(this).parent('li');
		thisTab.addClass('active');

		var newHeight = $('.col-' + column).height();
		container.css('height', newHeight);

		// Keep the link from activating
		e.preventDefault();
	});

	var indirect = $('.indirect');

	indirect.click(function() {

		// Set the data value as a variable
		var placement = $(this).data('left');
		var column = $(this).data('col');

		// Slide the container
		container.css('left', placement);

		// Adjust the height
		var newHeight = $('.col-' + column).height();
		container.css('height', newHeight);

		// Clear all tabs
		allTabs.removeClass('active');
		// Activate the clicked tab
		$('#menu li:nth-of-type(' + column + ')').addClass('active');

	});

	// Swipe left 
	container.swipe({
		swipe:function(swipe, direction, distance, duration, fingerCount) {

			var currentLeft = container[0].style.left;

			if (direction == 'left') {

				// Up it by 100
				var newLeft = parseInt(currentLeft) - 100;

				// Apply it
				container.css('left', newLeft + '%');

			} else if (direction == 'right') {

				// Up it by 100
				var newLeft = parseInt(currentLeft);

				// Up it by 100
				var newLeft = parseInt(currentLeft) + 100;

				// Apply it
				container.css('left', newLeft + '%');
			}
		}
	});

});


