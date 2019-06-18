(function(){
  var Module = {
    Data: {
      arr: undefined,
    },
    Methods: {
      init: function(arr){
        Module.Data.arr = arr;
      },
      calcFor: function(){
        console.log('==========');
        console.log('CalcFor:');
        for(let i = 0; i < Module.Data.arr.length; i += 1){
          console.log(Module.Data.arr[i]);
        }
        console.log('==========');
      },
      calcDoWhile: function(){
        console.log('==========');
        console.log('CalcDoWhile:');
        let i = 0;
        do {
          console.log(Module.Data.arr[i]);
          i += 1;
        } while (i < Module.Data.arr.length);
        console.log('==========');
      }, 
      calcWhile: function(){
        console.log('==========');
        console.log('CalcWhile:');
        let i = 0;
        while(i < Module.Data.arr.length) {
          console.log(Module.Data.arr[i]);
          i += 1;
        }
        console.log('==========');
      }
    }
  }
  const arr = ['Erick', 'Vicente', 'Samuel', 'Abi', 'Rafa', 'Goku'];
  Module.Methods.init(arr);
  Module.Methods.calcFor();
  Module.Methods.calcDoWhile();
  Module.Methods.calcWhile();
})();