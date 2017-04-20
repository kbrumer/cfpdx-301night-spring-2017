
$(function(){

  var model = {
    mytext: 'I **really** like live-server auto-reload!!.',
    mylink: 'http://www.yahoo.com'
  };

  //$myTemplate.append('<hr>');
  //$myTemplate.find('h1').html('New improved');
  //$myTemplate.find('li:first').html(model.mytext);
  //$myTemplate.find('li:last').find('a').attr('href', model.mylink);
  //$myTemplate.find('li:last a').attr('href', 'https://twitter.com/kbrumer');

  var $myTemplate = $('#my-template').clone();
  $('main').append($myTemplate.html());

});
