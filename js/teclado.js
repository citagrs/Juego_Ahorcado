

/**Me dibuja las palabras, se le debe pasar como parametro
 * el canvas, la palabra para ver en la pantalla
 * y la ubicacion "x" y "y"
 */
 function dibujar(pincel,palabra,x,y){
    pincel.fillStyle = "black";
    pincel.font = "35px Arial";
    pincel.fillText(palabra,x,y);
}

function dato (imagen, pincel,x1,y1,a1,b1,x2,y2,a2,b2){
    imagen.addEventListener('load',() => {
        pincel.drawImage(imagen,x1,y1,a1,b1,x2,y2,a2,b2);
     console.log("ya");
});
}

function crear(pincel,num,x1,y1,a1,b1,x2,y2,a2,b2){
    var vidaUno = document.createElement('img');
    vidaUno.src = 'media/Recurso'+num+'.png';
    console.log(vidaUno);

    dato(vidaUno,pincel,x1,y1,a1,b1,x2,y2,a2,b2);
}

function vidas (pincel,num){

    if (num==1){
        crear(pincel,num,0,0,350,350,500,120,150,150);
    }
    if (num==2){
        crear(pincel,num,0,0,350,350,500,300,150,150);
    }


}

