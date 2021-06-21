var hello = 'Hello';
let world = 'World';
// let y const no permite volver a asignar on valor a la variable
const helloWorld = 'Hello World';


// El scope es el alcance de las variables que estamos utilizando


const anotherFunction = () => {
  console.log( hello );
  console.log( world );
  console.log( helloWorld );
}

anotherFunction();

const global = () => {
  globalVar = 'im global';
}
global();
console.log(globalVar);

const otraFuncion = () => {
  var localVar = globalVar = 'Im Global';
}
otraFuncion();
console.log('localVar');
