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

function validarCadena() {
    var cadena = prompt("Ingrese la cadena a validar: ");
    var saleEstado = [cadena.length + 1];
    saleEstado[0] = 0;

    console.log(cadena[0])
}

ingresarEstados();
llenarTabla();