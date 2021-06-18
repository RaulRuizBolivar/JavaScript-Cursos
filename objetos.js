var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalleDelAuto: function(  ){
    //this es una variable que hace referencia al objeto, en este caso miAuto
    console.log( `Auto ${this.modelo} ${this.annio}` );
  }
};
console.log( miAuto );
console.log( miAuto.modelo );
miAuto.detalleDelAuto();


