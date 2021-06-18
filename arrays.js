// Los arrays se identifican por albergar sus diferentes datos entre corchetes y separados por comas, el primer valor de un array es la posición 0
var frutas = [ "Manzana" , "Plátano" , "Cereza" , "Fresa"];

// Con .length se puede saber la longitud que tiene el array
console.log( frutas.length );

// Para acceder a cada una de los valores se hace con [i], siendo i la posición que empieza en 0.
console.log( frutas[ 0 ] );

// Métodos para mutar el array:
// Método .push(); Este método siempre añade al array el elemento que le proporcionamos al final del mismo
var masFrutas = frutas.push( "Uvas" );
console.log( frutas );
// Método .pop(); Este método va a eliminar el último elemento que haya en el array;
var ultimo = frutas.pop();
console.log( frutas );
// Método .unshift(); Este método añade al array el elemento que le proporcionamos al principio del mismo
var nuevaLongitud = frutas.unshift( "Uvas" );
console.log( frutas );
// Método .shift(); Este método sirve para eliminar el primer elemento del arrays
var borrarFruta = frutas.shift();
console.log( frutas );
// Método .indexOf(); Este método nos sirve para saber el index de un elemento que le proporcionames por parámetro, devolviendo -1 en caso de no existir.
var posicion = frutas.indexOf("Cereza");
console.log( posicion );
