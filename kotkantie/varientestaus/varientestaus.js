//vaihda seinä valkoiseksi klikkaamalla seinää

    $(document).ready(function(){
    $("#seina").click(function(){
      $("#seina").attr("fill", "white");
    });
    $("#seina2").click(function(){
      $("#seina2").attr("fill", "white");
    });
  });

    //klikkaamalla svg-elementtiä kutsutaan seuraavia funktioita ja viedään väri seinään
  function vaihdaVari(vari){
    var x = vari;
    document.getElementById("seina").setAttribute('fill', x);
  }
  function vaihdaVari2(vari2){
    var y = vari2;
    document.getElementById("seina2").setAttribute('fill', y);
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