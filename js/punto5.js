//Ejercicio 5 Pintar un rectángulo en pantalla, utilizando un gradiente que vaya de negro a amarillo en la primera
//mitad del ancho del rectángulo, y de amarillo a rojo, en la segunda mitad. Por otro lado, en Y el
//degrade se mantiene constante.
function degradeColores(){
  let ctx = document.getElementById("canvas").getContext("2d");

  let imageData = ctx.createImageData(canvas.width, canvas.height);
  let primeraMitad = canvas.width / 2;
  for (let x = 0; x< primeraMitad; x++){
    for(let y = 0; y<imageData.heigth; y++){
      let colorprimeraMitad = (x / primeraMitad) * 255;
      setDegrade(imageData, x, y, colorprimeraMitad, colorprimeraMitad, 0, 255);
    }
    
  }
  for(let x = primeraMitad; x < imageData.width; x++ ){
    for(y = 0; y < imageData.height; y++){
      let colorSegundaMitad = 255 - (x - primeraMitad) / primeraMitad * 255;
      setDegrade(imageData, x, y, 255, colorSegundaMitad, 0, 255);
    }
  }
  ctx.putImageData(imageData, 0, 0);
  
  function setDegrade(imageData, x, y, r, g, b, a){
    index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index+ 3] = a;
  } 
}
degradeColores();