console.log(a === undefined);
var a;

var myvar = 'Mi valor de afuera';
(function (){
     console.log(myvar);
     var myvar = 'Mi valor';
})();

var myvar = 'Mi valor';
(function (myvar){
     console.log(myvar);
     var myvar = 'Mi valor';
})('Valor modificado');
