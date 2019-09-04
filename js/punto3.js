//Ejercicio 3 Pintar una región rectangular de un color utilizando la estructura de ImageData.

function imgData(){
   
    let ctx = document.getElementById("canvas").getContext("2d");
    let imageData = ctx.createImageData(canvas.width, canvas.height);
    for (let x = 0; x< canvas.width; x++){
      for(let y = 0; y<canvas.height; y++){
        setPixel(imageData, x, y, 0, 255, 0, 255);
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
  imgData();    