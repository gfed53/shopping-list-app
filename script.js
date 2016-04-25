$(document).ready(function() {
	$('.enter-button').on('click', function(e) {
		e.preventDefault();
		var shoppingItem = $('.enter-item-box').val()
		if (shoppingItem) {
			// var item = document.createElement('li');
			// item.className = "mdl-list__item";
			// item.innerHTML = "<span class=\'mdl-list__item-primary-content\'>"+
			// 	 shoppingItem+
			// 	 "</span>"+
			// 	 "<span class='mdl-list__item-secondary-content'></span></li>";
			// var button = document.createElement('button');
			// button.className = "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored btn-remove";
			// button.innerHTML = "<i class='material-icons'>remove</i>";
			var element = "<li class=\'mdl-list__item\'>"+
				"<span class=\'mdl-list__item-primary-content\'>"+
				 shoppingItem+
				 "</span>"+
				 "<span class='mdl-list__item-secondary-content'>"+
				 "<button class='mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored btn-remove'>"+
				 "<i class='material-icons'>remove</i>"+
				 "</button></span></li>";

			$(element).hide().appendTo('.shopping-list ul:first').show('normal');
			// componentHandler.upgradeElement($('.shopping-list ul:last button'));
			// $('.remove').hide();
			$('.enter-item-box').val("");
			console.log($('.shopping-list ul:last'));
		}
	});

	$('.shopping-list ul').on('click', 'li', function() {
		$(this).toggleClass('checked', 400);
		
	});
/*
	$('.shopping-list ul').on('click', 'li', function() {
		$(this).animate({ 'text-decoration': 'line-through',
	'background-color': 'Black',
	'color' : 'White',
	'font-weight': '100'}, 400);
	});  Can't work without jQuery.Color plugin */

	$('.shopping-list ul').on('click', '.btn-remove', function(){
		var parent = $(this).parent().parent();
		parent.fadeOut(400, function() {parent.remove();});
	});

	$('.clear-all-btn').on('click', function() {
		var x = $('.shopping-list li')
		x.fadeOut(400, function() {x.remove();});
	});





});