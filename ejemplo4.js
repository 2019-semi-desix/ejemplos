var input;

if(input === undefined){
    var x;
    let y;
    console.log('La variable es undefined');
} else {
    console.log('La variable no es undefined');
}

console.log(x);
// console.log(y);

if (x === undefined) { console.log('Es undefined en una sola linea') }

var esPorUltimaVezUndefined = x === undefined ? 'Sí es.' : 'No es.'
console.log(esPorUltimaVezUndefined);
