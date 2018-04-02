var fotoIndex = 1;
carousel(fotoIndex);

function veranderFoto(n) {
  carousel(fotoIndex += n);
}

function selectFoto(n) {
  carousel(fotoIndex = n);
}

function carousel(n) {
  var i;
  var fotos = document.getElementsByClassName("mijnFotos");
  var puntjes = document.getElementsByClassName("punt");
  if (n > fotos.length) {fotoIndex = 1}    
  if (n < 1) {fotoIndex = fotos.length}
  for (i = 0; i < fotos.length; i++) {
      fotos[i].style.display = "none";  
  }
  for (i = 0; i < puntjes.length; i++) {
      puntjes[i].className = puntjes[i].className.replace(" active", "");
  }
  fotos[fotoIndex-1].style.display = "block";  
  puntjes[fotoIndex-1].className += " active";
}