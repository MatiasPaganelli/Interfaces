class Circulo{
    constructor(radio, y, x, color){
        this.radio = radio;
        this.y = y;
        this.x = x;
        this.color = color;
    }
    dibujar(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
    getX(){
        return this.x;
    }   
    getY(){
        return this.y;
    }
    setX(x){
         this.x = x;
    }   
    setY(y){
         this.y = y;
    }
    setColor(colorCirculos){
         this.color = colorCirculos;
    }
    clickenCirculo(x,y){
        var dx = Math.abs(x - this.x);
        var dy = Math.abs(y - this.y);
        var distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        if (distance <= this.radio) {
        return true;
        } else {
        return false;
        }
    }
    
}
