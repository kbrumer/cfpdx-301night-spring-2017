
$(function(){
  //$('#my-template').find('li:first').html('foozie');

  var model = {
    mytext: 'I **really** like live-server auto-reload!!.',
    mylink: 'http://www.yahoo.com'
  };

  var $myTemplate = $('#my-template').clone();
  var myTemplate = $('#my-template').html();
  console.log('mytemplate', $myTemplate);
  //$myTemplate.append('<hr>');
  //$myTemplate.find('h1').html('New improved');
  $myTemplate.find('li:first').html(model.mytext);
  $myTemplate.find('li:last').find('a').attr('href', model.mylink);
  //$myTemplate.find('li:last a').attr('href', 'https://twitter.com/kbrumer');
  $('main').append($myTemplate);
  $('#my-template').remove();

});
