//criando uma matriz
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
  [1, 3, 9],
];
console.table(matriz);

//obtendo com base e seus índices

console.log(matriz[0][1]);
console.log(matriz[1][2]);

/************************************************
                    exercício
**************************************************/
/*
1.Crie uma matriz 3x3
2. Imprima os valores da diagonal principal
3. Altere os valores do item matriz[1][2] para 20 e matriz [2][0]para 30
 */

var matriz = [
  [1, 2, 3],
  [3, 2, 1],
  [2, 3, 2],
];

console.table(matriz);
console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);

matriz[1][2] = 20;
matriz[2][0] = 30;

// Mostrando a matriz atualizada
console.table(matriz);