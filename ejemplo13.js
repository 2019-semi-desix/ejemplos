(function(){
  var App = {
    Config: {
      minValue: 1,
      maxValue: 100,
    },
    Data: {
      n: undefined,
      fibN: undefined,
      factN: undefined,
    },
    Methods: {
      init: function(n){
        App.Methods.initExceptions();
        App.Methods.evaluateInputs(n);
      },
      initExceptions: function(){
        App.Exceptions.NumberException.prototype.toString = function(){
          return `[${this.date}] ${this.name}: ${this.message}`;
        };
      },
      evaluateInputs: function(n){
        if(n <= App.Config.minValue || n >= App.Config.maxValue) {
          throw new App.Exceptions.NumberException('El n esta fuera de rango');
        } else {
          App.Data.n = n;
        }
      },
      fibonacci: function(){
        if (App.Data.fibN === undefined){
          App.Data.fibN = App.Data.n;
        }
      },
      factorial: function(){
        if (App.Data.n)
      },
    },
    Events: {},
    Helpers: {},
    Exceptions: {
      NumberException: function(message){
        this.message = message;
        this.name = 'NumberException';
        this.date = new Date();
      }
    },
  }
  try {
    App.Methods.init();
  } catch (error) {
    console.log(error.toString());
  }
})();