//Function for HIDE and SHOW Effect
function myFunction() {
  var block = document.getElementById("myDiv");
  if (block.style.display === "none") {
    block.style.display = "block";
  } else {
    block.style.display = "none";
  }
}

//HIDE Effect
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function() {
      div.style.display = "none";
    }, 600);
  };
}
