//switch case -> estrutura de decisão usada quando queremos comparar o valor de uma variável com vários possíveis resultados.
//REGRA DO PROF CASTELLO - se tiver mais que 3 comparadores faça um switch case

//Exemplo 01 - menu
//Neste exemplo a variável meu selecionado guardará o nome de uma opção de menu.
//O switch verifica qual foi a opção escolhida e exibe uma mensagem correspondente

let menuSelecionado = "home";
switch (menuSelecionado) {
  case "home":
    console.log("você clicou no link 'home'");
    break;
  case "quem somos":
    console.log("Você clicou no link 'quem somos'");
    break;
  case "contato":
    console.log("você clicou no link 'contato'");
    break;

  default:
    console.log("opção incorreta, selecione uma opção no menu!");
    break;
  case "redes sociais":
    console.log("você clicou no link 'redes sociais'");
    break;
  case "Pague um café":
    console.log("você me pagou um... café!");
}