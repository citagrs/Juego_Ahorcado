
var pincel = canvas();
pincel.fillStyle = 'white';
pincel.fillRect(0,0,1200,800);

var xAleatorio;
var yAleatorio;

var agregarPalabra = document.querySelector("#agregar-palabra");
var listaDePalabras = ["Carajo"];
var palabraSecreta="";
var guiones="";
var control = false;
var contarmalo=1;

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

function nuevosElementos() {
    // crear un nuevo elemento div
    var nuevaDiv = document.createElement("h1");
    // darle contenido
    var nuevoContenido= document.createTextNode("Hola, cuanto tiempo!");
    console.log(nuevoContenido);
      //agregue el nodo de texto al div recién creado
    nuevaDiv.appendChild(nuevoContenido); 
  }

/**Funcion al oprimir el boton INICIAR JUEGO
 * Me realizado el llamado de los guiones
 * y me genera la palabra Secreta
*/
var iniciar = document.querySelector("#iniciar");
iniciar.addEventListener("click",function(){
    controladorJuego();
    palabraSecreta = (palabraAleatoria(listaDePalabras));
    guiones = palabraSecreta.replace(/./g, "_  ");
    dibujar(pincel,guiones,800,200);
    nuevosElementos();
    
});




/**Funcion que permite escoger una palabra aletoria */
function palabraAleatoria(listado){
    var palabraSecreta = listado[Math.floor(Math.random()*listado.length)];
    return palabraSecreta;
};

document.addEventListener("keypress",function(evento){

    if (control==true){
        var letra = evento.key;
        console.log(letra);
    
        
        if (palabraSecreta.includes(letra)){
            
            var contar = 0;
            while (contar<palabraSecreta.length){
                if(palabraSecreta[contar]===letra){
                    var espacio = contar*39;
                    var x = 798 +espacio;
                    dibujar(pincel,letra,x,190);
                }
                contar++;   
            }
        }else{
            vidas(pincel,contarmalo);
            console.log(contarmalo +" intento");
            contarmalo++;
        }
        
    }
    

},false);

function controladorJuego (){
    control = true;
};







