
$(function(){

  var model = {
    mytext: 'I **really** like live-server auto-reload!!.',
    mylink: 'http://www.yahoo.com'
  };

  var $myTemplate = $('#my-template').clone();

  $myTemplate.append('<hr>');
  $myTemplate.find('h1').html('New improved');
  $myTemplate.find('li:first').html(model.mytext);
  $myTemplate.find('li:last').find('a').attr('href', 
      model.mylink);

  $('main').append($myTemplate.html());

});
