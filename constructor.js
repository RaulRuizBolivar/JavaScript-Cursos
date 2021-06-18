function auto ( marca , modelo , annio ) {
  this.marca  = marca;
  this.modelo = modelo;
  this.annio  = annio;
}

var miAuto = new auto("marca", "modelo", "annio");
console.log( miAuto );
