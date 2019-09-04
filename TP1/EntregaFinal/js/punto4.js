//Ejercicio 4 Especificar la función para pintar un rectángulo utilizando un gradiente
function imgDataDegrade(){
    let ctx = document.getElementById("canvas").getContext("2d");
    let imageData = ctx.createImageData(canvas.width, canvas.height);
    for (let x = 0; x< canvas.width; x++){
      for(let y = 0; y<canvas.height; y++){
        let color = (y / canvas.height ) * 255;
        setPixel(imageData, x, y, color, color, color, 255);
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }
  function setPixel(imageData, x, y, r, g, b, a){
    index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
  }
  imgDataDegrade();
  