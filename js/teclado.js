

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

function crearHomero(pincel,num,x1,y1,a1,b1,x2,y2,a2,b2){
    var vidaUno = document.createElement('img');
    vidaUno.src = 'media/Recurso'+num+'.png';
    console.log(vidaUno);

    dato(vidaUno,pincel,x1,y1,a1,b1,x2,y2,a2,b2);
}

function vidas (pincel,num){

    if (num==1){
        crearBaseHorca(pincel,100,10);
    }
    if (num==2){
        crearHomero(pincel,num,0,0,350,350,350,120,150,150);
    }
    if (num==3){
        crearHomero(pincel,num,0,0,350,360,279,214,150,150);
    }
    if (num==4){
        crearHomero(pincel,num,0,0,350,360,280,226,150,150);
    }
    if (num==5){
        crearHomero(pincel,num,0,0,350,360,404,248,150,150);
    }
    if (num==6){
        crearHomero(pincel,num,0,0,350,360,372,355,150,150);
    }
    if (num==7){
        crearHomero(pincel,num,0,0,315,375,280,339,150,150);
    }
    

}
function crearBaseHorca(pincel,x,y){
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(80+x,40+y);
    pincel.lineTo(80+x,600+y);
    pincel.lineTo(10+x,600+y);
    pincel.lineTo(10+x,630+y);
    pincel.lineTo(380+x,630+y);
    pincel.lineTo(380+x,600+y); // medio
    pincel.lineTo(110+x,600+y);
    pincel.lineTo(110+x,70+y);
    pincel.fill();
}

