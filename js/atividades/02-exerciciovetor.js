/*
        1. Crie um array de frutas com os seguintes elementos: Banana, Maçã,
        Pera, Uva, Morango.
        2. Adicione Tangerina no final.
        3. Adicione Goiaba no início.
        4. Exiba o conteúdo do índice 5.
        5. Exclua o elemento uva.
        6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
*/

var frutas = ["banana", "maçã", "pera", "uva", "morango"];
console.log(frutas);
console.table(frutas);

frutas.push("Tangerina");
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

frutas.unshift("goiaba");
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

console.log("5ª posição:", frutas[5]);

frutas.splice(frutas.indexOf("uva"), 1);
console.table(frutas);

var copia = frutas.slice(2, 5);
console.log("Cópia:", copia);
console.table(copia);