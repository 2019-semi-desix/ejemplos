(function(){
  var App = {
    Config: {
      minValue: 1,
      maxValue: 100,
    },
    Data: {
      a: undefined, 
      b: undefined,
    },
    Methods: {
      init: function(a, b){
        App.Utils.verifyValues(a);
        App.Utils.verifyValues(b);
        App.Methods.calc(a, b);
      },
      calc: function(a, b){
        for(let i = 0; i < App.Methods.arithmeticOperations.length; i += 1){
          console.log(`El resultado de la operación #${i+1} es: ${App.Methods.arithmeticOperations[i](a, b)}`);
        }
      },
      arithmeticOperations: [
        function(a, b){ return a + b },
        function(a, b){ return a - b },
        function(a, b){ return a * b },
        function(a, b){ return a / b },
      ],
    },
    Utils: {
      verifyValues: function(a){
        if(a <= App.Config.minValue || a >= App.Config.maxValue){
          throw new Error("Uno de los operandos no es válido.")
        }
      }
    }
  };
  App.Methods.init(99, 50);
})();