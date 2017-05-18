// Link and run this script to demo fail and always methods.
$.get('dialog/speech2.txt', function (data) {
  console.log('I am the data');
  console.log(data);
}).always(function () {
  console.log('I should come always!');
}).fail(function () {
  console.log('I should come if it fails!');
});


  console.log('I should come last!');
