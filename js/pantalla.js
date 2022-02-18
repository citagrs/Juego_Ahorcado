
var pincel = canvas();
pincel.fillStyle = 'white';
pincel.fillRect(0,0,1200,700);

var xAleatorio;
var yAleatorio;

var agregarPalabra = document.querySelector("#agregar-palabra");
var reiniciar = document.querySelector("#re-iniciar");
var listaDePalabras = ["alura"]; //agregar en mayusculas
var listaLetrasCorrectas = [];
var validadordeCaracteres = [];
var palabraSecreta="";
var guiones="";
var control = 0;
var contarmalo=1;
var con=0;
var cantidadMaxima= 0;



function canvas (){
    var imagen = document.querySelector("canvas");
    var pincel = imagen.getContext("2d");
    return pincel;
}

/**Funcion que me permite tomar los datos del fomrulario para añadir una
 * nueva palabra a mi lista de palabras, si el campo esta vacio arrojara un error 
 * en alerta indicando que no se ha escrito nada
 */
agregarPalabra.addEventListener("click",function(event){
    event.preventDefault();
    var formulario = document.querySelector("#formulario");
    var palabraNueva = formulario.palabraNueva.value;
    palabraNueva = palabraNueva.toUpperCase();
    if (!palabraNueva==""){
        listaDePalabras.push(palabraNueva);
        console.log(listaDePalabras);
        formulario.reset();
    }else{
        alert("No has ingresado ninguna palabra");
    }
})

/**Funcion al oprimir el boton INICIAR JUEGO
 * Me realizado el llamado de los guiones
 * y me genera la palabra Secreta
*/
var iniciar = document.querySelector("#iniciar");
var formulario = document.querySelector("#formulario");
iniciar.addEventListener("click",function(){
    control=1;
    palabraSecreta = (palabraAleatoria(listaDePalabras));
    guiones = palabraSecreta.replace(/./g, "_  ");
    dibujar(pincel,"black",guiones,"55px arial",600,200);
    iniciar.classList.add("invisible");
    formulario.classList.add("invisible");

    /**
     * Se usa pala validar los caracteres de la palabra Secreta con la lista de
     * letras correctas que ingresa el susuario
     */
    for(var i = 0 ; i < palabraSecreta.length ; i++){
        if(!validadordeCaracteres.includes(palabraSecreta[i])){
            validadordeCaracteres.push(palabraSecreta[i]);
        }

    }
});

/**Funcion que permite escoger una palabra aletoria */
function palabraAleatoria(listado){
    var palabraSecreta = listado[Math.floor(Math.random()*listado.length)];
    palabraSecreta=palabraSecreta.toUpperCase();
    return palabraSecreta;

};

document.addEventListener("keypress",function(evento){
    if (control==1){
        cantidadMaxima=palabraSecreta.length;
        var letra = evento.key;
        letra = letra.toUpperCase();
        console.log(letra);

        if (!isNaN(letra)==true){
            alert("¡Usted ingreso un número! debe ingresar letras.")
        }
        
        if (palabraSecreta.includes(letra) && !isNaN(letra)==false){
            for(var i=0;i<palabraSecreta.length;i++ ){
                if(palabraSecreta[i]==letra){
                    var espacio = i*61;
                    var x = 600 +espacio;
                    dibujar(pincel,"blue",letra,"40px consolas",x,190);
                    if(!listaLetrasCorrectas.includes(letra)){
                        listaLetrasCorrectas.push(letra);
                    }
                }
                
            }

        }else{
            if(!isNaN(letra)==false){
                if(contarmalo<8){
                    vidas(pincel,contarmalo);
                    var espacio = contarmalo*30;
                    var x = 600 +espacio;
                    dibujar(pincel,"red",letra,"35px verdana",x,400);
                }    
                contarmalo++;
                if(contarmalo>=8){
                    vidas(pincel,9);
                    console.log("perdiste");
                    control=0;
                }
            }
            
        }
    }
    if (control == 1){
        if(listaLetrasCorrectas.length==validadordeCaracteres.length){
            console.log("Ganaste");
            vidas(pincel,8);
            control=0;
        }
    }
},false);

reiniciar.addEventListener("click",function(){
    limpiarPantalla(pincel);
    iniciar.classList.remove("invisible");
    formulario.classList.remove("invisible");
    listaLetrasCorrectas = [];
    validadordeCaracteres = [];
    palabraSecreta="";
    guiones="";
    control = 0;
    contarmalo=1;
    con=0;
    cantidadMaxima= 0;
});









