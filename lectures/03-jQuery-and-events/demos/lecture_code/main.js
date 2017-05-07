$(document).ready(function(){
	console.log("it works");

	console.log('outside this', this);

	// Events
	$('#my-textbox').change(function(){
		console.log('the value is', $(this).val());
	});

	$('#example-1').on('click', function(e) {
		$(this).val();
		console.log('e', e);
		console.log('inside this', this);
		console.log('Button Clicked');
	});

	$('.green-square').hover(function(e) {
		console.log('this', this);
		$(this).toggleClass('red');
	});

	$('.blue-square').on({
		'click': function() { 
			$(this).toggleClass('red'); 
		},
		'mouseenter': function() { 
			$(this).toggleClass('violet'); 
		}
	});

	$('.yellow-square').on('click', function() {
		$(this).toggleClass('red');
	});

	// Shorthand version
	// $('#example-1').click(function() {
		// alert('Clicked');
	// });

	// $('.square').mouseover(function() {
		// alert('Hover yo!');
	// });


	// Example #2 - .on() Change Example
	$('#drop-down').on('change', function(){
		var myChoice = $(this).val();
		// console.log('myChoice=', myChoice);
		// if (myChoice) {
		// 	console.log('myChoice has a selction');
		// } else {
		// 	console.log('myChoice does not have a selction');
		// }

		if(myChoice) {
			var $selectedImage = $('img[alt="' + myChoice + '"]');

			// .not() => Remove elements from the set of matched elements.
			$('img.example-2').not($selectedImage).hide();
			$selectedImage.show();
		} else {
			$('img.example-2').show();
		}
	});

	// Example #3 - Dynamic rendering with jQuery
	$('#dynamic .hero').on('click', function() {
		var liDataStuff = $(this).attr('data-stuff');
		console.log('liDataStuff=', liDataStuff);
		var selectedListItem = $('#'+liDataStuff);

		$('div.dynamic-content').hide();
		selectedListItem.show();

	});

	$('#dynamic .hero:first').click();


  // Example #4 Prevent Default - Link
  $('#cool-image .myLink').on('click', function(e) {
    e.preventDefault();
    // var $myLink = $(e.target);
    // $myLink.fadeOut();
	$(this).fadeOut(3000);
  });


  //Example #4-2 Prevent Default - Link
  $('#my-textbox').on('keypress', function(e) {
    var charCode = e.charCode;
    if (charCode !== 0) {
        if (charCode < 97 || charCode > 122) {
            e.preventDefault();
            console.log(
                "Please use lowercase letters only." + "\n" + 
				"charCode: " + charCode + "\n"
            );
        }
    }
});



});