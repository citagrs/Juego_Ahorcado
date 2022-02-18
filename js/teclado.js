

/**Me dibuja las palabras, se le debe pasar como parametro
 * el canvas, la palabra para ver en la pantalla
 * y la ubicacion "x" y "y"
 */
function dibujar(pincel,color,palabra,tamanoFamilia,x,y){
    pincel.fillStyle = color;
    pincel.font = tamanoFamilia;
    pincel.fillText(palabra,x,y);
}

function dato (imagen, pincel,x1,y1,a1,b1,x2,y2,a2,b2){
    imagen.addEventListener('load',() => {
        pincel.drawImage(imagen,x1,y1,a1,b1,x2,y2,a2,b2);
});
}

function crearHomero(pincel,num,x1,y1,a1,b1,x2,y2,a2,b2){
    var vidaUno = document.createElement('img');
    vidaUno.src = 'media/Recurso'+num+'.png';
    dato(vidaUno,pincel,x1,y1,a1,b1,x2,y2,a2,b2);
}

function vidas (pincel,num){

    if (num==1){
        crearBaseHorca(pincel,100,10);
    }
    if (num==2){
        crearHomero(pincel,num,0,0,300,700,336,28,140,325);
        crearHorca(pincel,100,10)
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
    if (num==8){
        crearHomero(pincel,num,0,0,2729,543,550,500,600,120);
    }
    if (num==9){
        crearHomero(pincel,num,0,0,1404,333,600,500,466,111);
    }
    

}
function crearHorca(pincel,x,y){
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(80+x,20+y);
    pincel.lineTo(110+x,50+y);
    pincel.lineTo(340+x,50+y);
    pincel.lineTo(340+x,20+y);
    pincel.fill();
};

function crearBaseHorca(pincel,x,y){
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(80+x,20+y);
    pincel.lineTo(80+x,600+y);
    pincel.lineTo(10+x,600+y);
    pincel.lineTo(10+x,630+y);
    pincel.lineTo(380+x,630+y);
    pincel.lineTo(380+x,600+y); // medio
    pincel.lineTo(110+x,600+y);
    pincel.lineTo(110+x,50+y);
    pincel.fill();
}
function limpiarPantalla(pincel){
    pincel.clearRect(0,0,1200,700);
}



