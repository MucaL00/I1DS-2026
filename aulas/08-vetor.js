//criando variáveis do tipo array (vetor)

var dinos = ["tiranosauro Rex", "estegossauro", "brontosauro", "tricerátops"];

//imprime os dados em forma de linha
console.log(dinos);
//imprime os dados em forma de tabela
console.table(dinos);

// length -> "tamanho" do array(quantidade de elementos)
console.log("o vetor tem", dinos.length, "elementos");

//imprimir elementos apartir do índice
console.log(dinos[2]);

//push -> adiciona um novo elemento no final da fila
dinos.push("anquilossauro");
console.table(dinos);
console.log("o vetor agora tem ", dinos.length, "elementos");

//unshift -> Adiciona um novo elemento no início da fila
dinos.unshift("velocirapitor");
console.table(dinos);
console.log("o vetor agora tem ", dinos.length, "elementos");

// obter um elemento apartir do indice
console.log("1ª posição:", dinos[0]);
console.log("4ª posição:", dinos[3]);
console.log("20ª posição(não existe):", dinos[20]);
