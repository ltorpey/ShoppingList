$(document).ready(function() {

// use enter to add list items

	$(".new_item").keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$(".add_item").click();
		};

//add list items

	$(".add_item").click(function(){
		var txtbox = document.getElementById(".new_item");
		var txtval = txtbox.value;
		event.preventDefault();
	});

});