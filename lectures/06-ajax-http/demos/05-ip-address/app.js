var url="https://api.ipify.org/?format=json";

document.getElementById('getXhrData').onclick = function(){
  var xhr = new XMLHttpRequest();

  xhr.onload = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      document.getElementById('myIPAddress').innerHTML = xhr.responseText;
    }
  };

  xhr.open('GET', url, true);
  xhr.send();
}

document.getElementById('reset').onclick = function(){
  document.getElementById('myIPAddress').innerHTML = "____________";
}
