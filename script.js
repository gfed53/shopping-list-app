$(document).ready(function() {
	var itemCount = 0
	$('.enter-button').on('click', function() {
		var shoppingItem = $('.enter-item-box').val()
		if (shoppingItem) {

			$('.shopping-list ul:first').append('<li> <img class="checkoff" src="images/check.png">'+ shoppingItem + '<div class="remove-box"><img class="remove" src="images/x.png"></div> </li>');
			$('.remove').hide();
		}
	});

	$('.shopping-list ul').on('mouseenter', '.remove-box', function() {
		$(this).find('.remove').show();

	});

	$('.shopping-list ul').on('mouseleave', '.remove-box', function() {
		$(this).find('.remove').hide();
	});





});