'use strict'

// $.getJSON('./data.json')
// .then(
//   function(data) {
//     console.log('This was success:', data);
//     // data.forEach(function(ele) {
//     //   ele.topping.forEach(function(topping) {
//     //     $('#result').append(`<h3>${topping.type}</h3>`)
//     //   })
//     // })
//   },
//   function(err){
//     console.error('This is an error:', err);
//   }
// );

$.getJSON('./data1.json')
.done(
  function(data) {
    console.log('01 This was success:', data);
    // data.forEach(function(ele) {
    //   ele.topping.forEach(function(topping) {
    //     $('#result').append(`<h3>${topping.type}</h3>`)
    //   })
    // })
  })
 .fail( 
  function(err){
    console.error('02 This is an error:', err);
  })
  .always(
    function(){
      console.log('03 always gets called');
    }
  )
;

