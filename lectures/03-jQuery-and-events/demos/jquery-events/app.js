//nav handler
$('nav a').on('click', function() {
  //gives us 'delegation' or 'attributes'
  var $whereToGo = $(this).attr('data-tab') 
  console.log('whereToGo >>' + $whereToGo  + '<<');
  $('.tab-content').hide()
  //we want $('#delegation')
  $('#' + $whereToGo).fadeIn(750)
})

//event logger
function logTarget() {
  console.log(this);
  console.log($(this));

  var $target = $(this).text();
  var $newFeedback = $('#feedback section:first-child').clone();
  $newFeedback.find('ul li').text('You clicked on ' + $target);

  //$newFeedback.text('You clicked on ' + $target);
  $('#feedback').append($newFeedback);
}


//not delegated - event bound to all the 'li's
//no selector specified in .on() method
$('#menu1 li').on('click', logTarget)

//delegated - event is bound to parent
//'li' is specified in .on()
$('#menu2').on('click', 'li', logTarget)

//button handlers
$('button[name=adder1]').on('click', function() {
  var $newLi1 = $('#menu1 li:first').clone();
  $newLi1.text('newLi1');
  $('#menu1').append($newLi1);
});

$('button[name=adder2]').on('click', function() {
  var $newLi2 = $('#menu2 li:first').clone();
  $newLi2.text('newLi2');
  $('#menu2').append($newLi2);
});

$('button[name=clear]').on('click', function() {
  $('.log-item:first').siblings().remove();
  //$('.log-item').remove();
});

//checkbox handler - change event.
//shows difference between attr & prop
$('input[name=check]').on('change', function() {
  var $checkbox = $(this);

  $('#checked-state').html('.attr("checked"): ' + $checkbox.attr('checked') + '<br>.prop( "checked" ): ' + $checkbox.prop('checked'));

}).change();

//select box filtering
$('select[name="icecream"]').on('change', function() {
  var $selection = $(this).val();
  console.log('selection=', $selection);
  $('img').hide()
  $('img[data-flavor="' + $selection + '"]').show()
})

//DOM-ready function
$(document).ready(function() {
  $('.tab-content').hide()
})
