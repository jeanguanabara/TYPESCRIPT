// 1 - numbers

let x: number = 10


console.log(x)

x = 14

console.log(typeof x)


const y: number = 15.011994

console.log(y)

console.log(typeof y)

console.log(y.toFixed(2))


// 2- string

const firstName: string = "Jean"

console.log(firstName)
console.log(typeof firstName)
console.log(firstName.toLowerCase())
console.log(firstName.toUpperCase())
console.log(firstName.toLocaleUpperCase())

let fullName: string

const lastName: string = "Guanabara"

fullName = firstName + " " + lastName

console.log(fullName)

// 3 - boolean

let a: boolean = false

console.log(a)

console.log(typeof a)



// 4 - inferences e annotations


const ann: string = "teste" // anotarion

let inf = "teste"

// ann = 1
// inf = 1



console.log("testando")


// 5 - DESAFIO 2

let number: number = 0

let text = number.toString()

console.log("O número é: " + text)