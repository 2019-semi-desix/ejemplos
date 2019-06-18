(function(){
  var App = {
    Data: {},
    Methods: {
      init: function(){
        App.Methods.initExceptions();
      },
      initExceptions: function(){
        App.Exceptions.UserException.prototype.toString = function(){
          return `[${this.date}] ${this.name}: ${this.message}`;
        };
      },
      calc: function(){
        try {
          throw new App.Exceptions.UserException("Ha ocurrido un error esperado.");          
        } catch (error) {
          console.log(error);
          console.log(error.toString());
        }
      }
    },
    Events: {},
    Helpers: {},
    Exceptions: {
      UserException: function(message){
        this.message = message;
        this.name = 'UserException';
        this.date = new Date();
      }
    },
  }
  App.Methods.init();
  App.Methods.calc();
})();