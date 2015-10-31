$(document).ready(function() {
	$('.remove').hide();
	$('.enter-button').on('click', function() {
		var shoppingItem = $('.enter-item-box').val()
		if (shoppingItem) {

			$('.shopping-list ul:first').append('<li> <img class="checkoff" src="images/check.png">'+ shoppingItem + '<div class="remove-box"><img class="remove" src="images/x.png"></div> </li>');
			$('.remove').hide();
			$('.enter-item-box').val("");
		}
	});

	$('.shopping-list ul').on('mouseenter', '.remove-box', function() {
		$(this).find('.remove').show();

	});

	$('.shopping-list ul').on('mouseleave', '.remove-box', function() {
		$(this).find('.remove').hide();
	});

	$('.shopping-list ul').on('mouseenter', '.checkoff', function() {
		$(this).css({'width': '1.5em', 'height': '1.2em'});
	});

	$('.shopping-list ul').on('mouseleave', '.checkoff', function() {
		$(this).css({'width': '1.3em', 'height': '1em'});
	});

	$('.shopping-list ul').on('click', '.checkoff', function() {
		var x = $(this).parent()
		x.toggleClass('checked');

	});

	$('.shopping-list ul').on('click', '.remove-box', function(){
		var x = $(this).parent()
		x.remove();
	});

	$('.clear-all-btn').on('click', function() {
		$('.shopping-list li').remove();
	});





});