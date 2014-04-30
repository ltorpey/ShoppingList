
$(document).ready(function(){
	$('.button').click(function(){
		$('.items').append($('<li>', {
			text: $('.texts').val()
		}));
		$('form').on('click', function(event){
			event.preventDefault();
			$('.texts').val('');
		});
		var new_Item = $('.texts').val();
		if (new_Item == ''){
			alert('Please Enter a Valid Item');
			return $('li').last().remove();
		}
		else if (new_Item == ' '){
			alert('Please Enter a Valid Item');
			return $('li').last().remove();
		}
	});
	$('ul').on('click', 'li', function(){
		$(this).toggleClass('complete');
	});
	$('div').on('click', '.delete', function(){
		$('li').hide();
	});
	$('div').on('click', '.reset', function(){
		$('li').removeClass();
	});

});