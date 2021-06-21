function auto ( marca , modelo , annio ) {
  this.marca  = marca;
  this.modelo = modelo;
  this.annio  = annio;
}

var miAuto = new auto("Tesla", "Model 3", 2020);
var autoRober = new auto( "Citroen" , "C3" , 2019 )
console.log( miAuto,autoRober );
