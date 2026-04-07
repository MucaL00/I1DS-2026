// Operações de incremento e decremento | pré e pós incremento
// incremento => somar algo de alguma variável
// decremento => subitrair algo de alguma variável

let idade = 16;
console.log(idade);

//idade = idade + 1; //somei um na unidade
idade++;
console.log(idade);
idade++;
console.log(idade);
console.log("----------------------------------------------");

//idade = idade - 1; //subtrai um na unidade
idade--;
console.log(idade);
idade--;
console.log(idade);

console.log("----------------------------------------------");
let novaIdade = idade + 1;
console.log("idade:", idade, "| Nova Idade", novaIdade);

novaIdade = idade++;
console.log("idade:", idade, "| Nova Idade", novaIdade);
