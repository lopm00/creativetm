function myFunction() {
  var str = document.getElementById("convs").innerHTML; 
  var res = str.replace("999</span> DH", "99</span> $");
  document.getElementById("convs").innerHTML = res;
}
