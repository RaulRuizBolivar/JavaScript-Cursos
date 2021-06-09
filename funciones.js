// Declarativas

function miFuncion(){
  return 3;
}

miFuncion();

// Expresión o función anónima

var miFuncion = function(a,b){
  return a + b;
}

miFuncion();



function saludar(estudiante){
  console.log(`Hola ${estudiante}`);
}
saludar(Pedro);

function sumar(a,b){
  var resultado = a+b;
  return resultado;
}


//Las funciones declarativas si so hace Hoisting y en las expresivar o anónimas no
//El Hoisting lo que quiere decir es que se puede hacer llamar a la función antes de declararla.
