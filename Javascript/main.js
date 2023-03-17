var numerosDeEstados = 0;
var arregloEstadosFinales = [];
var alfabeto = [0, 1];

function ingresarEstados() {
    //Pedimos el total de los estados
    numerosDeEstados = prompt("Ingrese el numero de estados");

    //Pedimos el total de los estados finales
    var numeroDeEstadosFinales = prompt("Ingresa el numeros que los estados finales");

    //Pedimos que ingrese cuales son los estados finales
    for (var i = 0; i < numeroDeEstadosFinales; i++) {
        var estado = prompt("Ingrese el estado " + i);
        arregloEstadosFinales.push(estado)
    }

    console.log(arregloEstadosFinales);
    console.log("Numero de estados: " + numerosDeEstados);
}

//Creamos un arreglo normal
var tablaUsuario = new Array(numerosDeEstados);

function llenarTabla() {

    //El arreglo normal lo hacemos en una arreglo bidimensional
    for (var k = 0; k < numerosDeEstados; k++) {
        tablaUsuario[k] = new Array(alfabeto.length);
    }

    //Le pedimos al usuario los datos
    for (var i = 0; i < numerosDeEstados; i++) {
        for (var j = 0; j < alfabeto.length; j++) {
            var valor = prompt("Ingrese el valor en [" + i + "]" + "[" + j + "]");
            tablaUsuario[i][j] = valor;
        }
    }

    console.log(tablaUsuario);
}

function verificarLetraAlfabeto(caracter){
    var carac;
    for(var i=0; i<alfabeto.length; i++){
        if(alfabeto[i]==caracter){
            carac=alfabeto[i];
        }
    }

    return carac;
}

function obtenerPosicionAlfabeto(cadena){
    var posicion=0;

    for(var i=0; i<alfabeto.length; i++){
        if(alfabeto[i]==cadena){
            posicion=i;
        }
    }

    return posicion;
}

function obtenerEstadoFinal(esta){
    var estadoFinalAux=-1;
    var estadoString=esta.toString();

    for(var i=0; i<arregloEstadosFinales.length; i++){
        if(arregloEstadosFinales[i]==estadoString){
            var EstadoInt;
            EstadoInt=parseInt(estadoString, 10);
            estadoFinalAux=EstadoInt;

        }
    }

    return estadoFinalAux;
}



var estadoCadena=0;
var aux;
function validarCadena() {
    var cadena = prompt("Ingrese la cadena a validar: ");

    //For para recorrer la cadena
    for(var i=0; i<cadena.length; i++){
        //Verificamos si el caracter de la cadena esta dentro del alfabeto
        if(cadena[i]==verificarLetraAlfabeto(cadena[i])){
            //Guardamos el esatdo acutal con el siguiente
            estadoCadena=tablaUsuario[estadoCadena][obtenerPosicionAlfabeto(cadena[i])];
            aux=true
        }else{
            console.log("Un caracter de la cadena no es parte del alfabeto");
            aux=false;
            estadoCadena=99;
        }
    }

    //Verificamos el estado
    if(aux!=false){
        if(estadoCadena==obtenerEstadoFinal(estadoCadena)){
            aux=true;
            estadoCadena=0;

        }else{
            console.log("Cadena no aceptada");
            aux=false;
            estadoCadena=0;
        }
    }

    if(aux==true){
        console.log("Cadena aceptada");
    }

    console.log(cadena[0]);
}

ingresarEstados();
llenarTabla();

for(var i=0; i<4; i++){
    validarCadena();
}