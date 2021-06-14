var a = 4 + "7";
console.log(typeof a);
//Al ser el signo + el signo de la suma y la concatenación y al haber un string, se concatenan los dos valores en un string
var b = 4 * "7";
console.log(typeof b);
//Como no se utiliza el valor de +, sino *, se cambia el string por un numero y se hace la operación, regresando un número
var c = 20;
var d = c + "";
var e = String(c);
//Este es un cambio de tipo a string, se le está imponiendo directamente
console.log(typeof e);
//Se le impone a un string convertirse en numero, solo funciona si sólo hay números en el string
var f = Number(e);
console.log(typeof f);
