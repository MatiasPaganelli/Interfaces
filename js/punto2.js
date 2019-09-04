//Ejercicio 2 Pintar una región rectangular de un color utilizando el Contexto de HTML5.
function contexto(){
    let c = document.getElementById("canvas");
    let context = c.getContext("2d");
    context.fillStyle = 'rgb(255, 0, 0)';
    context.fillRect(20, 20, 250, 150);
    context.beginPath();
    context.strokeStyle = 'rgba(255, 127, 0, 0.5)';
    context.stroke();
  }
  contexto();
  