console.log(miNombre);
//Al usar la variable antes de inicializarla, su valor por defecto es undefined, por lo que retornará un undefined
var miNombre = "Raúl";


//Las funciones se declaran antes de las variables, por lo que funcionará siempre sea donde sea que se haya declarado, siempre y cuando las variables que se utilicen estén ya inicializadas
hey();
function hey(){
  console.log("Algo " + miNombre);
}

//Por buenas prácticas, todas las funciones se declaran al principio del codigo, así las variables que estén declaradas siempre lo estarán después de la función
