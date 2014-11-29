$(document).ready(function() {

	var tabLink = $('#menu li a, .indirect');
	var allTabs = $('#menu li');
	var container = $('#container');

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

		// Change page height based on current-col class
		$('.col').removeClass('current-col');
		$('.col-' + column).addClass('current-col');
		var currentCol = $('.current-col');
		var newHeight = currentCol.height();
		container.css('height', newHeight);

		// Keep the link from activating
		e.preventDefault();
	});

	$('.indirect').click(function() {
		var column = $(this).data('col');
		$('#menu li:nth-of-type(' + column + ')').addClass('active');
	});


	// Swipe left 
	container.swipe({
		swipe:function(swipe, direction, distance, duration, fingerCount) {

			var currentLeft = parseInt(container[0].style.left);
			var currentTab = $('li.active');

			if (direction == 'left' && currentLeft < 400) {

				// Up it by 100
				var newLeft = currentLeft - 100;

				// Apply it
				container.css('left', newLeft + '%');

				// Change the tabs
				currentTab.next('li').addClass('active');
				currentTab.removeClass('active');

			} else if (direction == 'right' && currentLeft < 0) {

				// Up it by 100
				var newLeft = currentLeft + 100;

				// Apply it
				container.css('left', newLeft + '%');

				// Change the tabs
				currentTab.prev('li').addClass('active');
				currentTab.removeClass('active');
			}

			var column = $('#menu li.active a').data('col');
			// Change page height based on current-col class
			$('.col').removeClass('current-col');
			$('.col-' + column).addClass('current-col');
			var currentCol = $('.current-col');
			var newHeight = currentCol.height();
			container.css('height', newHeight);
		}
	});

});


