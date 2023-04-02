"use strict";
// 1-arrays
let numbers = [1, 2, 3, 4, 5,];
numbers.push(6);
console.log(numbers[2]);
let names = ["Jean", "Guanabara"];
// 2 - Outras sintaxes de array
const nums = [1, 2, 3, 4, 5];
const nomes = ["Jean"];
// 3 - tipo any
const arr1 = [1, "any", 3];
// 4 - tipo de parâmtro de função
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma ("a","b")
// 5 - tipo de return da function
function greeting(nome) {
    return "Olá " + nome;
}
console.log(greeting("Jean"));
// 6 - funções anônimas no ts
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    console.log(sallary);
}, 2000);
//  7 - tipo de objetos
function passCorordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("X coordinates: " + coord.y);
}
const objCoord = { x: 342, y: 84.5 };
passCorordinates(objCoord);
const pessoaObj = {
    nome: "Jean",
    surname: "Guanabara"
};
// 8 - function com objeto opcional
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - validando argumento opcional - melhor maneira de validar
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) { //USAR O DIFERENTE DE UNDEFINED PRA TER CTZ SE VEIO OU NÃO ALGUMA COISA.
        return "Olá " + firstName + " " + lastName + ", tudo bem?";
    }
    return "Olá " + firstName + ", tudo bem?";
}
console.log(advancedGreeting("Jean", "Guanabara"));
console.log(advancedGreeting("Jéssica"));
// 10 - Union type - consegue determinar mais de um tipo para uma variável
function showBalance(balance) {
    console.log("O saldo da conta é R$" + balance);
}
showBalance(100);
showBalance("120");
// showBalance(true)
const arr2 = [1, "teste", true];
// 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return "A função do usuário é " + role;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log("O ID é : " + id);
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log("X : " + obj.x);
    console.log("Y : " + obj.y);
    console.log("Z : " + obj.z);
}
const coordObj = {
    x: 10,
    y: 20,
    z: 30
};
const somePerson = {
    name: "Jean",
    age: 28,
};
//15 - LITERAL TYPES-------------------
let test; // AQUI EU DITO QUE A VARIÁVEL SÓ PODE RECEBER ESSA ENTRADA
test = "testando";
function showDirection(direction) {
    console.log("A direção é: " + direction);
}
showDirection("right");
// 16 - NON-NULL ASSERTION OPERATOR("?" E "!" SÃO OPERADORES) - USADO PRINCIPALMENTE PARA MANIPULAÇÃO DE DOM, PARA EVITAR ERROS POIS SABEMOS QUE O HTML VAI RETORNAR O ELEMENTO QUE ESTAMOS DITANDO
const p = document.getElementById("some-p");
console.log(p.innerText); //aqui colocando o "!" ele ignora o erro de não existir a variável pois não tem valor incluído diretamente no fonte do type.
// 17 - bigint
let n;
n = 1000n;
// PARA PODER COMPILAR TEVE QUE MUDAR NA LINHA 14 DO TSCONFIG. O ITEM TARGET TAVA PRA 2016, TIVE QUE PUXAR PRA 2020 CONFIRMANDO QUE ESTAVA NUMA VERSÃO DE JS MAIS ATUALIZADA PARA A DOM.
// 18 - symbol - versões mais modernas do javascript
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA === symbolB);
//consegue ter valor único mesmo que o conteúdo seja o mesmo
