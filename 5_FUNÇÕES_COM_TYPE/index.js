"use strict";
//1 void
function withoutReturn() {
    console.log("esta função não tem retorno!");
}
withoutReturn();
// 2 - callback com argumento
function greeting(name) {
    return "Olá " + name;
}
function preeGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preeGreeting(greeting, "Jean");
// preeGreeting(greeting, 1)
// 3- GENERIC FUNCTIONS
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["A"]));
// console.log(firstElement("teste"))
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObj = mergeObjects({
    name: "Jean"
}, {
    age: 29,
    job: "dev"
});
console.log(newObj);
