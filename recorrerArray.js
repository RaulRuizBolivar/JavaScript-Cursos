var articulos = [
  { nombre: "Bici"     , costo: 3000  },
  { nombre: "TV"       , costo: 2500  },
  { nombre: "libro"    , costo: 320   },
  { nombre: "celular"  , costo: 10000 },
  { nombre: "Laptop"   , costo: 20000 },
  { nombre: "Teclado"  , costo: 500   },
  { nombre: "Audífonos", costo: 1700  }
];

// El método .filter(); añade en un nuevo array solo los articulos que cumplieron el filtro.
var articulosFlitrados = articulos.filter( function ( articulo ) {
  return articulo.costo <= 500;
} );
console.log( articulosFlitrados );

// El método .map(); añade en un nuevo array en el que están solo la propiedad que le demandamos en el return.
var nombreArticulos = articulos.map( function ( articulo ) {
  return articulo.nombre;
} );
console.log( nombreArticulos );

// El método find(); Este método nos permite hacer un array nuevo en el que solo estarán los objetos enteros(en esto caso) que contengan el filtro
var encontrarArticulo = articulos.find(function ( articulo ) {
  return articulo.nombre === "Laptop";
} );
console.log( encontrarArticulo );

// El método forEach(); Este método no hace un nuevo array, sino que hace el filtrado sobre el array a filtrar y devuelve cosas
articulos.forEach( function ( articulo ) {
  console.log( articulo.nombre );
} );

// El método some(); Este método nos regresa una validación de true false, generando un nuevo array
// Nos dice si el filtro que le ponemos tiene algún match, en caso contrario, devolverá un false
var articulosBaratos = articulos.some( function ( articulo ) {
  return articulo.costo <= 700;
})
console.log( articulosBaratos );
