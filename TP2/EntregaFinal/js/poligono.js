class Poligono{
    constructor(){
        this.coleccionCirculos = [];
        this.circuloCentral;
        this.colorLineas = "#ffff00";
        this.colorCentro = "#458301";
    }
    
    setColorLinea(color){
        this.colorLineas =color;
    }
    setColorCentro(color){
        this.colorCentro =color;
    }
    addCirculo(circulo){
        this.coleccionCirculos.push(circulo);
    }
    
    getCirculos(){
        return this.coleccionCirculos;
    }

    getCentro(){
        return this.circuloCentral;
    }
    setCentroX(x){
        this.circuloCentral.setX(x);
    }
    setCentroY(y){
        this.circuloCentral.setY(y);
    }
    setColeccionCirculos([]){
        return this.coleccionCirculos;
    }

    
    dibujarLineas(){
        for( let i = 0; i < this.coleccionCirculos.length; i++){
            if(this.coleccionCirculos [i + 1] != null){
                ctx.lineWidth = 3.5;
                ctx.strokeStyle = "#ffff00";
                //dibuja la primera línea 
                ctx.beginPath();
                ctx.moveTo(this.coleccionCirculos[i].getX(), this.coleccionCirculos[i].getY());
                ctx.lineTo(this.coleccionCirculos[i+1].getX(), this.coleccionCirculos[i+1].getY());
                ctx.stroke();
                
            }
        }
    }

    clickCirculoCentro(x,y){
        return this.circuloCentral.clickenCirculo(x,y)
    }
    
    closePoligono(){
        ctx.lineWidth = 3.5;
        ctx.strokeStyle = "#ffff00";
        //dibuja la primera línea 
        ctx.beginPath();
        ctx.moveTo(this.coleccionCirculos[0].getX(), this.coleccionCirculos[0].getY());
        ctx.lineTo(this.coleccionCirculos[this.coleccionCirculos.length -1].getX(), this.coleccionCirculos[this.coleccionCirculos.length -1].getY());
        ctx.stroke();
        this.puntoCentral();
    }
    
    puntoCentral(){
        for( let i = 0; i < this.coleccionCirculos.length; i++){
            let x = 0;
            let y = 0;
            this.coleccionCirculos.forEach(coleccionCirculo => {
                x = x + coleccionCirculo.x
                y = y + coleccionCirculo.y
            });
            x = x/this.coleccionCirculos.length
            y = y/this.coleccionCirculos.length
            this.circuloCentral = new Circulo(7, y, x, this.colorCentro);
            this.circuloCentral.dibujar();
            // ctx.beginPath();
            // ctx.arc(x,y,7,0, 2 * Math.PI);
            // ctx.fillStyle = 'green';
            // ctx.fill();
            // ctx.stroke();
        }
    }
    clearCanvas(){
        let canvas = document.getElementById("canvas");
        let ctx = document.getElementById("canvas").getContext("2d");
        ctx.clearRect(0,0,canvas.width,canvas.height)
        
    }
    redrawCanvas(){
        for( let i = 0; i < this.coleccionCirculos.length; i++){
            if(this.coleccionCirculos [i + 1] != null){
                ctx.lineWidth = 3.5;
                ctx.strokeStyle = this.colorLineas;
                //dibuja la primera línea 
                ctx.beginPath();
                ctx.moveTo(this.coleccionCirculos[i].getX(), this.coleccionCirculos[i].getY());
                ctx.lineTo(this.coleccionCirculos[i+1].getX(), this.coleccionCirculos[i+1].getY());
                ctx.stroke();
                
            }
        }
        ctx.beginPath();
        ctx.moveTo(this.coleccionCirculos[0].getX(), this.coleccionCirculos[0].getY());
        ctx.lineTo(this.coleccionCirculos[this.coleccionCirculos.length -1].getX(), this.coleccionCirculos[this.coleccionCirculos.length -1].getY());
        ctx.stroke();
        this.coleccionCirculos.forEach(element => {
            element.dibujar();
        });
        this.puntoCentral();
    }
    moverDesdeCentro(){
        this.clearCanvas();
        this.redrawCanvas();
    }
    getTotalCirculos(){
        return this.getCirculos.length;
    }

    borrarCirculo(circuloaBorrar){
                this.coleccionCirculos.splice(circuloaBorrar, 1);
    }
}




