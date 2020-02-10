function Dollar() {
  var x = document.getElementById("convs");
  if (x.innerHTML === "999</span> DH") {
    x.innerHTML = "99</span> $";
  } else {
    x.innerHTML = "999</span> DH";
  }
    var x = document.getElementById("convs1");
  if (x.innerHTML === "1499</span> DH") {
    x.innerHTML = "155</span> $";
  } else {
    x.innerHTML = "1499</span> DH";
  }
    var x = document.getElementById("convs2");
  if (x.innerHTML === "4999</span> DH") {
    x.innerHTML = "499</span> $";
  } else {
    x.innerHTML = "4999</span> DH";
  }
}


function Dollar2() {
 
  
    var str = document.getElementById("convs3").innerHTML; 
  var res = str.replace("399</span> DH", "39</span> $");
  document.getElementById("convs3").innerHTML = res;
  
    var str = document.getElementById("convs4").innerHTML; 
  var res = str.replace("599</span> DH", "59</span> $");
  document.getElementById("convs4").innerHTML = res;
  
    var str = document.getElementById("convs5").innerHTML; 
  var res = str.replace("999</span> DH", "99</span> $");
  document.getElementById("convs5").innerHTML = res;
  
 var str = document.getElementById("convs6").innerHTML; 
  var res = str.replace("799</span> DH", "80</span> $");
  document.getElementById("convs6").innerHTML = res;
  
  var str = document.getElementById("convs7").innerHTML; 
  var res = str.replace("1999</span> DH", "200</span> $");
  document.getElementById("convs7").innerHTML = res;
  
  var str = document.getElementById("convs8").innerHTML; 
  var res = str.replace("3999</span> DH", "399</span> $");
  document.getElementById("convs8").innerHTML = res;
}
