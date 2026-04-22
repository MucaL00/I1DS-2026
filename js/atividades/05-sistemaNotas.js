/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/

function NotaAluno(nota) {
  let frase;
  if (nota >= 7) {
    frase = "O aluno passou de ano";
  } else if (nota >= 5 && nota <= 6.9) {
    frase = "está de recuperação";
  } else {
    frase = "reprovou";
  }
  return frase;
}

let nota = 10;
console.log("nota:", nota, "-", NotaAluno(nota));

//correção!

// function verificarSituacao(nota) {
//   if (nota < 5) {
//     return "Reprovado";
//   } else if (nota < 7) {
//     return "Recuperação";
//   } else {
//     return "Aprovado";
//   }
// }
// console.log(verificarSituacao(5));
// console.log(verificarSituacao(7));

//SOLUÇÃO + PARTE EXTRA!

function verificarSituacao(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;

  if (media < 5) {
    return "Reprovado";
  } else if (media < 7) {
    return "Recuperação";
  } else {
    return "Aprovado";
  }
}
console.log(verificarSituacao(10, 3, 10, 3));

// PARTE 03 - SOMA DA MÉDIA (SOLUÇÃO FINAL)

function final (n1,n2,n3,n4) {
    let media = (n1 + n2 + n3 + n4) / 4;
    let situacao;

    if(media < 5) situacao = "Reprovado";
    else if (media < 7) situacao = "Recuperação";
    else situacao = "Aprovado";

    return "Média: " + media + "- Situação: " + situacao;
}

console.log(final(7, 8, 6, 5));