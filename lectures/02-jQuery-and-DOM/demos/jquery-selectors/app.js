//*****basic selectors*****//

//element
$('li')  //returns an array of all matching elements

//class
// console.log('The form element is : ', $('.form-element'));
// console.log('The beautiful list is : ', $('#beautiful-list'));

//id
$('#beautiful-list')

//parent descendent
$('#list-container li')  //returns all <li>s anywhere inside the #list-container element

// parent > child
$('#list-container > p')  //returns any <p> that is a DIRECT child of #list-container

//attribute
//console.log('This is my text box : ', $('input[name="textbox"]'));
$('li[data-category="list-item"]')

//another way to do the previous selection
var category = 'list-item';
$('li[data-category="' + category + '"]')

//get text of the matched element(s)
console.log('The h1 text is : ', $('h1').text());

//set text of the matched element(s)
$('h1').text('this is some new text')
console.log('The h1 text is : ', $('h1').replaceWith('<h2>Some different markup</h2>'));

//get the data-category attribute of an li
$('li').data('category')

//set the data-category attribute of an li
$('li').data('category', 'new-value')

//make a new <li> and append it to the <ul>
var $newLi = $('.li-template').clone();
$newLi.text('this is different text');
$('ul').append($newLi);

$('#list-container').prepend('<section id="clone-container"></section>');

var $newListContainer = $('#list-container').clone();
$('#clone-container').append($newListContainer);

//remove an element from the DOM
//$('button').remove()

//run a command as soon as the DOM loads
$(function() {
  // console.log('the DOM is ready now!');

  // $('li').each(function(index, element){
  //   console.log('This is the index = ', index);
  //   console.log('This is the element = ', element);
  // });

  // //$('ul').hide();
  // $('ul').toggleClass('hidden');

  // console.log('These elements are hidden : ', $('body').find(':hidden'));

  // //$('ul').show();

  // console.log('These elements are hidden : ', $('body').find(':hidden'));


});
