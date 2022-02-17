

/**Me dibuja las palabras, se le debe pasar como parametro
 * el canvas, la palabra para ver en la pantalla
 * y la ubicacion "x" y "y"
 */
 function dibujar(pincel,palabra,x,y){
    pincel.fillStyle = "black";
    pincel.font = "35px Arial";
    pincel.fillText(palabra,x,y);
}

