$(document).ready(function() {
	$('.remove').hide();

	$('.remove-box').on('hover', function() {
		console.log('remove');
		$('remove').show();
	});
	$('.enter-button').on('click', function() {
		var shoppingItem = $('.enter-item-box').val()
		if (shoppingItem) {
			$('.shopping-list ul:first').append('<li> <img class="checkoff" src="images/check.png">'+ shoppingItem + '<div class="remove-box"><img class="remove" src="images/x.png"></div> </li>');
		}
	});

	// $('.enter-item-box').val().append

});