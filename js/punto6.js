// Ejercicio 6 -> Cargar una Imagen desde disco o URL
// a. Dibujar la imagen dentro del canvas
// b. Implementar una función que aplique el filtro de escala de grises y muestre el resultado en el canvas
let canvas = document.getElementById("canvas");
var ctx = document.getElementById("canvas").getContext("2d");

var image1 = new Image();
image1.onload = function(){
      canvas.width = image1.naturalWidth;
      canvas.height = image1.naturalHeight;
     ctx.drawImage(this, 0, 0);
    imageData = ctx.getImageData (0, 0, this.width, this.height);
}

function setearGris(){
  ctx.drawImage(image1, 0, 0);
  imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  for (let x = 0; x< imageData.width; x++){
    for(let y = 0; y<imageData.height; y++){
      setFiltroGrises(imageData, x, y); 
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

//Cuando se hace click en convertir a Gris aplica la funcion
let transformaraGris= document.getElementById("convertiraGris")
convertiraGris.addEventListener("click", setearGris);


//Setea Imagen a Gris
function setFiltroGrises(imageData, x, y){
  index = (x + y * imageData.width) * 4;
  let blancoynegro = (getRed(imageData, x, y) + getGreen(imageData, x, y) + getBlue(imageData, x, y)) /3;
  imageData.data[index + 0] = blancoynegro;
  imageData.data[index + 1] = blancoynegro;
  imageData.data[index + 2] = blancoynegro;
  imageData.data[index + 3] = 255;
  
}

function getRed(imageData, x, y){
  index=(x+y*imageData.width)*4;
  return imageData.data[index+0];
}
function getGreen(imageData, x, y){
  index=(x+y*imageData.width)*4;
  return imageData.data[index+1];
}
function getBlue(imageData, x, y){
  index=(x+y*imageData.width)*4;
  return imageData.data[index+2];
}

function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function (e) {
      var filePreview = document.createElement('img');
      filePreview.id = 'file-preview';
      //e.target.result contents the base64 data from the image uploaded
      filePreview.src = e.target.result;
      console.log(e.target.result);
      image1.src = e.target.result;
    }
    
    reader.readAsDataURL(input.files[0]);
  }
}

var fileUpload = document.getElementById('file-upload');
fileUpload.onchange = function (e) {
  readFile(e.srcElement);
}   