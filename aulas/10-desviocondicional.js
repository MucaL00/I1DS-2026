//desvio condicional - IF-ELSE

/* Condições simples com IF
Sintaxe: if( condição ){
    codigo a ser executado, se verdadeiro
}
*/

let anoDeNascimento = 2001;

if (anoDeNascimento > 2003) {
  console.log("A pessoa nasceu depois de 2003");
}

if (anoDeNascimento < 2003) {
  console.log("a pessoa nasceu antes de 2003");
}

//condicional IF-ELSE

if (anoDeNascimento > 2000) {
  console.log("a pessoa nasceu depois de 2000");
} else {
  console.log("a pessoa nasceu antes de 2000");
}

// Condicinal composta com IF

const login = "admin";
const senha = "12345";

let loginUser = "admin";
let senhaUser = "12345";

if (loginUser == login && senhaUser == senha) {
  console.log("Login realizado com sucesso!");
} else {
  console.log("acesso negado!");
}

// Desvios aninhados - IF-ELSE-IF-ELSE ...

let semaforo = "vermelho";

if (semaforo == "vermelho") {
  console.log("PARE!");
} else if (semaforo == "amarelo") {
  console.log("ATENÇÃO!");
} else if (semaforo == "verde") {
  console.log("SIGA!");
} else {
  console.log("semáforo quebrado");
}
