# Aquí mi apuntes de JavaScript

## Operadores

### Operadores Binarios
* (+) Suma dos valores, en caso de uno ser un string, concatena
* (-) Resta
* (*) Multiplica
* (/) Divide
### Operador de asignación
* (=) Asigna un valor
### Operadores de comparación
* (==) Compara el contenido de dos valores, sin mirar el tipo
* (===) Compara el contenido y el tipo de un valor, de forma estricta
* (<) Compara dos números, si el primero es menor que el segundo, es true
* (<=) Compara dos números, si el primero es menor o igual que el segundo, es true
* (>=) Compara dos números, si el primero es mayor o igual que el segundo, es true
* (>) Compara dos números, si el primero es mayor que el segundo, es true
### Operadores Lógicos
* (!) Negación, niega lo que le sigue (!true -> false)
* (&&) Signo AND
* (||) Signo OR
### Operadores Incrementales
* (++) Incrementa el valor en uno, si es antes del valor, se añade antes de la asignación, si no, después
* (+=) Incrementa con el valor que se le indica después el valor de lo que le precede

## Hoisting
Hoisting es el orden en el que se almacena en memoria los datos.

Si se hace llamar a una variable antes de inicializarla, su valor será undefined

    console.log(miNombre);
    var miNombre = "Raúl";

En este ejemplo, cuando  se ejecuta console.log(), miNombre no se ha inicializado, por lo que se inicializa como undefined, y en la siguiente línea se le asigna el valor de "Raúl"
Las funciones no tienen este comportamiento, ya que se cargan en memoria enteras, no solo la declaración, por lo que el suiguiente ejemplo funciona esté donde esté el llamado a la función

    hey();
    function hey(){
        console.log("Algo")
    }

Al igual que en el scope global, si se llama desde una función a una variable que aún no ha sido inicializada, su valor será de undefined:

    hey();
    function hey(){
        console.log("Algo " + miNombre);
    }
    var miNombre = "Raúl";
    //El resultado es Algo undefined
    
    var miNombre = "Raúl";
    hey();
    function hey(){
        console.log("Algo " + miNombre);
    }
    //El resultado es Algo Raúl

Por buenas prácticas, todas las funciones se declaran al principio del código, así las variables que están declaradas siempre ostarán inicializadas antes de llamarla.

## Funciones
Hay dos tipos de funciones, funciones declarativas y funciones de expresión o anónimas

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
