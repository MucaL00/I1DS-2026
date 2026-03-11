//operadores lógicos
let souPobre = true;

console.log("sou pobre?", souPobre);
console.log("Negação de sou pobre:", !souPobre);

let manha = true;
let sono = true;
console.log("----------------------------------------");
console.log("Manhã:", manha, "|estou com sono?", sono);

// comparador E (and) e ou (or)
console.log("operador AND (e):", manha && sono);
console.log("operador OR (ou):", manha || sono);

manha = false;
console.log("----------------------------------------");
console.log("Manhã:", manha, "|estou com sono?", sono);

// comparador E (and) e ou (or)
console.log("operador AND (e):", manha && sono);
console.log("operador OR (ou):", manha || sono);

sono = false;
console.log("----------------------------------------");
console.log("Manhã:", manha, "|estou com sono?", sono);

// comparador E (and) e ou (or)
console.log("operador AND (e):", manha && sono);
console.log("operador OR (ou):", manha || sono);

