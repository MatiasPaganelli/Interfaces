let canvas = document.getElementById("canvas");
let ctx = document.getElementById("canvas").getContext("2d");
let imageData = ctx.createImageData(canvas.width, canvas.height);

let color = 50;
let poligono1 = new Poligono();    
let active = false;
let move = false;
let clickeo = false;
let teclac = false;
let xInicial , yInicial;
document.getElementById('cerrarPoligono').addEventListener("click",()=>{
    poligono1.closePoligono()
})


canvas.addEventListener("mousedown", (event)=>{
    active = true;
    
    
    xInicial = event.layerX;
    yInicial = event.layerY;
})

canvas.addEventListener("mouseup", (event)=>{
    if(active && !move && !clickeo){
        var eX = event.layerX;
        var eY = event.layerY;
        let circulo1 = new Circulo(10, eY, eX, "#ff0000");
        console.log("El valor X es:" +eX);
        console.log("El valor Y es:" +eY);
        circulo1.dibujar();
        poligono1.addCirculo(circulo1);
        poligono1.dibujarLineas();
    }
    active = false;
    move = false;
    clickeo = false;
    teclac=false;
    
})

canvas.addEventListener("mousemove", (event)=>{
    if(active){
        move = true;
        if(poligono1.getCentro().clickenCirculo(event.layerX,event.layerY)){
            let diferenciaX =  event.layerX - poligono1.getCentro().getX();
            let diferenciaY =  event.layerY - poligono1.getCentro().getY();
            poligono1.coleccionCirculos.forEach(element => { 
                element.setX(element.getX() + diferenciaX);   
                element.setY(element.getY() + diferenciaY);
            })
            poligono1.setCentroX(event.layerX);
            poligono1.setCentroY(event.layerY); 
            poligono1.clearCanvas();
            poligono1.redrawCanvas(); 
        }
        poligono1.getCirculos().forEach(element => {
            if(element.clickenCirculo(event.layerX, event.layerY)){
                element.setX(event.layerX);
                element.setY(event.layerY);
                poligono1.clearCanvas();
                poligono1.redrawCanvas();                 
            }
        });
    }
    
})

window.addEventListener("keydown", (event) =>{    
    if(event.key == "c"){
        teclac = true;
    canvas.addEventListener("mousewheel", (event2) =>{       
    if(event2.deltaY > 0 && color < 100){
        color += 0.05;
    } else  if(event2.deltaY < 0 && color > 0){
        color -= 0.05;
    }

    if(color >= 0 && color <= 15){
         cambiarColor("#350101","#162801", "#8D8D00"  )
    }else if(color >15 && color<=35){
        cambiarColor("#6C0202","#203B01","#A9A900")
    }else if(color >35 && color <=50){
        cambiarColor("#C20202","#305A02","#C8C800")
    }else if(color >50 && color <=65){
        cambiarColor("#ff0000","#458301","#ffff00")
    }else if( color >65 && color <=80){
        cambiarColor("#FF8686","#57A601","#FFFF46" )
    }else if (color >80 && color <=90){
        cambiarColor("#FFADAD","#6CCD01","#FFFF6F")
    }else if (color >90 && color <=100){
        cambiarColor("#FFE5E5","#BAFF6D","#FFFFA5")
    }
    })
}
window.addEventListener("keyup", (event) =>{
    if(event.key == "c"){
    teclac= false;
    }
})

});

function cambiarColor(colorCirculos,colorCentro,colorLineas){
    poligono1.getCirculos().forEach(element => {
        element.setColor(colorCirculos);
    });
    poligono1.setColorLinea(colorLineas);
    poligono1.setColorCentro(colorCentro);
    poligono1.clearCanvas();
    poligono1.redrawCanvas();
}

canvas.addEventListener("dblclick", (event) =>{  
    for(let i = 0; i < poligono1.getCirculos().length; i++){
        if(poligono1.getCirculos()[i].clickenCirculo(event.layerX,event.layerY)){   
            clickeo = true;      
        poligono1.borrarCirculo(i);
        poligono1.clearCanvas();
        poligono1.redrawCanvas()
};
    }
    
});

//Color circulos
// ROJO
// 50 = ff0000
// 35= C20202
// 15= 6C0202
// 0= 350101


// 65 = FF8686
// 80=FFADAD
// 100= FFE5E5



//Color centro
//Verde
//50 = #458301
//35 = #305A02
//15 = #203B01
//0 = #162801

//65 = #57A601
//80 = #6CCD01
//100 = #BAFF6D

//Color lineas
//50 = ffff00
//35 = C8C800
//15= A9A900
//0 = 8D8D00

//65= FFFF46
//80= FFFF6F
//100 =FFFFA5