let dinosaurio = document.getElementsByClassName("dinosaurioCorrer");
var teclaw=false;
var teclad=false;
var globalID;
var vidas = 3;
let colision = false
let roca = document.getElementById("roca"); 
let valorRoca = 2500;
var puntaje = 0;
var start = false;

function gameLoop(){
    start = true;
    puntaje += 1;
    document.getElementById('puntaje').innerHTML = "Puntaje:"+puntaje;
    function update(){
        $(document).keydown(function(event){  
            if(event.key == "w"){
                teclaw = true;
                saltar();
                correrNuevamente();  
            }
        });
        function saltar() {
            $(".dinosaurioCorrer").removeClass("dinosaurioCorrer").addClass("dinosaurioSaltar");
        }
        function correrNuevamente() {
            setTimeout(function() {
                $(".dinosaurioSaltar").removeClass("dinosaurioSaltar").addClass("dinosaurioCorrer");      
            }, 800);
        }
        function traerPiedra(){
            if(valorRoca >= 50){            
                document.getElementById("roca").style.left = (valorRoca)+'px';
                valorRoca = valorRoca - 20;
            }else{
                valorRoca = 2500;
                colision = false;
            } 
        }
        traerPiedra();
        if(DetectarColision() && !colision){
            colision = true;
            if (vidas>1) {
                $(".love"+vidas).hide();
                vidas--;
                $(".dinosaurioCorrer").removeClass("dinosaurioCorrer").addClass("dinosaurioColisionado");
                setTimeout(function(){
                    $(".dinosaurioColisionado").removeClass("dinosaurioColisionado").addClass("dinosaurioCorrer");
                    },80);
               
            } else if (vidas == 1){
                $(".love1").hide();
                $(".dinosaurioCorrer").removeClass("dinosaurioCorrer").addClass("dinosaurioMuerto");
                finalizado();
                puntaje.pause();
                
             
            }
            
        } 
        // Funcion colision
        function DetectarColision(){
            /// "a" y "b" deben ser dos objetos HTMLElement
            var a = $("#dinosaurio");
            var b = $("#roca");
            
            var a_pos = {t : a.position().top, 
                l: a.position().left, 
                r: a.position().left + a.width(), 
                b: a.position().top + a.height()};
                var b_pos =  {t : b.position().top, 
                    l: b.position().left+209, 
                    r: b.position().left + b.width(), 
                    b: b.position().top + b.height()};
                    
                    
                    //Detecta si se superponen las áreas
                    if(   a_pos.l <= b_pos.r && a_pos.r >= b_pos.l 
                        && a_pos.b >= b_pos.t && a_pos.t <= b_pos.b ){
                            return true;
                            
                        } else {
                            return false;
                        }
                        
                    }
                    
                }
                update();
                globalID = requestAnimationFrame(gameLoop);  
                 function finalizado(){
                     document.getElementById('dinosaurio').style.webkitAnimationPlayState = 'paused';
                     document.getElementById('roca').style.webkitAnimationPlayState = 'paused'; 
                     document.getElementById('fondo').style.webkitAnimationPlayState = 'paused';
                     //document.getElementById("fondo").style.webkitFilter = "blur(3px)";
                     document.getElementById('gameover').style.visibility = 'visible';
                     document.getElementById('puntaje').style.visibility = 'hidden';
                     document.getElementById('puntuacionFinal').innerHTML = "Puntuacion Final:" +puntaje + "puntos";
                   
                }
        
            }
            
            window.requestAnimationFrame(gameLoop);  
            if(vidas == 0){
                cancelAnimationFrame(globalID);   
            }
            
            
            
            