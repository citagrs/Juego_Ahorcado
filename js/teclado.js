/**Realizo un control para que no me llame el evento sin antes iniciar el juego */

var pincel = canvas();
var control = false;
var palabraSecreta = palabra();

function controladorJuego (){
    control = true;
};

/**Evento que me permite almacenar los datos del teclado en la variable letra */
document.addEventListener("keypress",function(evento){
    if (control==true){
        var letra = evento.key;
        console.log(letra);
        for (var i = 0;i < palabraSecreta.length; i++){
            if(palabraSecreta[i]===letra){
                var posicion = palabraSecreta.indexOf(palabraSecreta[i]);
                var espacio = posicion*29;
                var x = 808+espacio;
                dibujar(pincel,letra,x,190);
                           
            }
        }
    }

},false);

