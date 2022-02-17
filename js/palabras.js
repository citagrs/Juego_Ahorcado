/**Funcion que permite escoger una palabra aletoria */
function palabraAleatoria(listado){
    var alAzar = Math.random()*listado.length | 0;
    var palabraEscogida = listado[alAzar];
    console.log(palabraEscogida)
    return palabraEscogida;
};

/**Me dibuja las palabras, se le debe pasar como parametro
 * el canvas, la palabra para ver en la pantalla
 * y la ubicacion "x" y "y"
 */
function dibujar(pincel,palabra,x,y){
    pincel.fillStyle = "black";
    pincel.font = "35px Arial";
    pincel.fillText(palabra,x,y);
}

/**Funcion que me permite contar las letras de la palabra secreta y
 * dependiendo la cantidad me dibuja los guinos en la pantalla
 */
function contarLetras(palabra){
    var caracter="";
    for(var i=0; i<palabra.length ;i++){
        caracter= caracter+" _";
    }
    return caracter;
}

