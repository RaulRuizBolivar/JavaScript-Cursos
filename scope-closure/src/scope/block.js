const fruits = () => {
  if ( true ) {
    var fruits1 = 'apple';
    let fruits2 = 'banana';
    const fruits3 = 'kiwi';
    console.log(fruits2);
    console.log(fruits3);
  }
  console.log(fruits1);
}
fruits();

// let y const tienen un scope de bloque, lo que quiere decir es que no se pueden acceder por encima del bloque del que han sido creados

const anotherFunction = () => {
  for( let i=0; i<10 ; i++ ){
    setTimeout(() => {
      console.log(i);
    }, 1000)
  }
}
anotherFunction();
