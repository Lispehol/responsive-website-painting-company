
// when user clicks "lue lisää" button, modal opens
$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").css("display", "block");
  });
  $("#myBtn2").click(function(){
    $("#myModal2").css("display", "block");
  });
  $("#myBtn3").click(function(){
    $("#myModal3").css("display", "block");
  });
  // when user clicks span-element or button, modal closes 
  $(".close, .tarjous, .modal").click(function(){
    $(".modal").css("display", "none");
  });

});


// Galleria slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demodots");
  if (n > x.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}



// Used to toggle the menu on small screens when clicking on the menu button
function toggleMenu() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
