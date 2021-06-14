# JavaScript-Cursos
# Aquí mi apuntes de JavaScript
## Funciones
Hay dos tippos de funciones, funciones declarativas y funciones de expresión o anónimas

### Funciones Declarativas

    function miFuncion(){
        return 3;
    }

Este tipo de funciones se pueden usar sin peligro de Hoisting, al menos por parte de las funciones, no de las variables globales.
### Funciones de expresión o anónimas

    var miFuncion = function(a,b){
        return a+b;
    }

Este tipo de funciones no se pueden hacer llamar hasta que ya se haya guardado en memoria, ya que se guarda como si fuera una variable.

### Atributos / Parámetros
Los atributos son unas variables locales de la función que necesita que se añadan a la hora de llamarla para que funcione:

    function saludar(estudiante){
        console.log("Hola " + estudiante);
    }

Los parámetros es cuando se hace llamar a la función, los valores en sí

    saludar("Raúl");

En este caso, el atributo es Estudiante y el parámetro es "Raúl"
## Booleanos
Con la función Boolean() se puede comprobar el valor booleano del parámetro.
Por defecto, los valores false son:
    0 , null , NaN , undefined , false , ""
Por defecto los valores true son :
    Cualquier número distinto de 0 , Cualquier string con al menos un valor , [] , {} , true


## Coerción
La coerción es el cambio de tipo de un valor, hay dos tipos:

### Coerción pasiva
Es cuando no se impone directamente el tipo de valor al que se tiene que cambiar

    var a = 4 + "7";
En este ejemplo, a es un string con valor "47", producto de la concatenación

    var b = 4 * "7";

En este ejemplo, b es un número con valor 28, el string se convirtió en número

    var c = 20 + "";

En este ejemplo, c vale "20", al concatenar los dos valores
###Coerción Activa
Es cuando el cambio de tipo se impone

    var d = String(23);

En este ejemplo, d vale "23"

    var e = Number("123");

En este ejemplo, e vale 123
