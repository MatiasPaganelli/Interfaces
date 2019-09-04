"use strict";
//Definir una matriz de 100 elementos x 100 elementos y completarla con valores
  var mat =[];
  var max = 100;
  var length = 100;
function cargaMatriz(){
for(let i = 0; i < length; i++){
  mat[i] = [];
  for (let j = 0; j < length; j++) {
    mat[i][j] = getNumeroRandom(max);
  }
}
}
function getNumeroRandom(mat){
  return Math.floor(Math.random() * max + 1);
}
cargaMatriz();
console.table(mat);


//Escribir una función que retorne el valor máximo de toda la matriz
function valorMaximo(){
  let maximo = 0;
  for(let  i = 0; i < length; i++){
    for(let j = 0; j < length; j++){
      if(mat[i][j] > maximo ){
         maximo = mat[i][j] ;
      }
    }
  }
  return maximo;
}
console.log(valorMaximo());


//Escribir una función que retorne el valor máximo contenido en las filas pares y el valor mínimo en
//las filas impares

function retornarValorMaxParesMinImpares(){
let max = 0;
let min = Number.MAX_SAFE_INTEGER;
let arr = []
  for(let i = 0; i < length; i++){
    for(let j = 0; j < length; j++){
      if(i % 2 == 0){
        if(mat[i][j] > max ){
           max = mat[i][j] ;
         }
      }else(i % 2 != 0)
        if(mat[i][j] < min ){
           min = mat[i][j];
      }
    }
  }
  arr.push( "El valor MAX es:" + max, "El valor Min es:" +min);
  return arr;
}

console.log(retornarValorMaxParesMinImpares());

function promedio(){
	let promedio =[]
	let suma = 0;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			suma += mat[i][j];
		}
		promedio[i] = suma / max;
		suma = 0;
  }
 return promedio;

}
 console.log("El promedio es:" +promedio());
