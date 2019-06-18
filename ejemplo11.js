var arr1 = [0, 1, 2];
var arr2 = [0, 'Erick', true];
var arr3 = [[0, 1, 2], 10, {nombre: 'Erick'}];
var arr4 = [function(a, b){
  return a + b;
}];
console.log(arr1);
console.log(arr2);
console.log(arr3);

// Elementos arr1:
console.log(arr1[1]);
console.log(arr2[2]);
console.log(arr3[0]);
console.log(arr4[0](10, 20));