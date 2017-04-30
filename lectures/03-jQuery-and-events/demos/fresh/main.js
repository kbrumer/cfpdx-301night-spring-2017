$(document).ready(function(){
	console.log("it works");

	$("#example-1").on('click', function(){
		alert('Clicked');
	});

	$(".green-square").on("mouseenter", function() {
		$(this).toggleClass('red');
	});
	
	$(".blue-square").on({
		"click": function() { $(this).toggleClass('red');},
		"mouseenter": function() { $(this).toggleClass('violet'); }
	});


	$('#drop-down').on('change', function(){
		if($(this).val()) {
			var $selectedOne = $('img#' + $(this).val());

			$('img.example-2').not($selectedOne).hide();
			
		} else {
			$('img.example-2').show();
		}
	});

	$('#dynamic .hero').on('click', function(){
		var liWithDataStuff = $(this).attr('data-stuff');
		var selectedListItem = $('#'+liWithDataStuff);

		$('div.dynamic-content').hide();
		selectedListItem.show();
	});

	$('#dynamic .hero:first').click();

	$('#cool-image .myLink').on('click', function(e) {
		e.preventDefault();
	});

	$('#my-textbox').on('keypress', function(e){
		var charCode = e.charCode;

		if(charCode !== 0) {
			if(charCode < 97 || charCode > 122) {
				e.preventDefault();
				alert("Hey use lowercase letters");
			}
		}

	});

















});