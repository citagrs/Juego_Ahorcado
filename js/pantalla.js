
var pincel = canvas();
pincel.fillStyle = 'lightgrey';
pincel.fillRect(0,0,1200,800);

var xAleatorio;
var yAleatorio;

var agregarPalabra = document.querySelector("#agregar-palabra");
var listaDePalabras = ["Colombia","Ecuador","Mexico"];
var palabraSecreta="";

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
iniciar.addEventListener("click",function(listado){
    controladorJuego();
    palabraSecreta = palabraAleatoria(listaDePalabras);
    let palabra = palabraSecreta.split('');
    var guiones = contarLetras(palabra);
    console.log(palabra);
    dibujar(pincel,guiones,800,200);
});

function palabra (){
    palabraSecreta;
}







