var url="https://api.ipify.org/?format=json";

// document.getElementById('getXhrData').onclick = function(){
//   var xhr = new XMLHttpRequest();

//   xhr.onload = function(){
//     if(xhr.readyState == 4 && xhr.status == 200){
//       document.getElementById('myIPAddress').innerHTML = xhr.responseText;
//     }
//   };

//   xhr.open('GET', url, true);
//   xhr.send();
// }
$('#getXhrData').click(function(){
    $.getJSON(url)
    .then(
        function(data) {
            console.log('Succeeded', data);
            console.log('Succeeded 2', data.ip);
            $('#myIPAddress').html(data.ip);
        }, 
        function(err) {
            console.error('Error', err);
        })
});

// document.getElementById('reset').onclick = function(){
//   document.getElementById('myIPAddress').innerHTML = "____________";
// }
$('#reset').click(function(){
    $('#myIPAddress').html("____________");
});