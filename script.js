$(document).ready(function() {
	$('.enter-button').on('click', function(e) {
		e.preventDefault();
		var shoppingItem = $('.enter-item-box').val()
		if (shoppingItem) {
			var element = "<li class=\'mdl-list__item\'>"+
				"<span class=\'mdl-list__item-primary-content\'>"+
				 shoppingItem+
				 "</span>"+
				 "<span class='mdl-list__item-secondary-content'>"+
				 "<button class='mdl-button mdl-js-button mdl-button--fab mdl-button--colored btn-remove'>"+
				 "<i class='material-icons'>remove</i>"+
				 "</button></span></li>";

			$(element).hide().appendTo('.shopping-list ul:first').show('normal');
			$('.enter-item-box').val("");
		}
	});

	$('.shopping-list ul').on('click', 'li', function() {
		$(this).toggleClass('checked', 400);	
	});

	$('.shopping-list ul').on('click', '.btn-remove', function(){
		var parent = $(this).parent().parent();
		parent.fadeOut(400, function() {parent.remove();});
	});

	$('.clear-all-btn').on('click', function() {
		var x = $('.shopping-list li')
		x.fadeOut(400, function() {x.remove();});
	});
});