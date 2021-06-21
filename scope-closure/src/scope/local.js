const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
}
helloWorld();
//console.log(hello);

var scope = "Im global";
const functionScope = () => {
  var scope = "I am just a local";
  const funct = () => {
    return scope;
  }
console.log(funct());
}
functionScope();

