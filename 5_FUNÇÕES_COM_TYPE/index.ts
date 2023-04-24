//1 void

function withoutReturn():void{
    console.log("esta função não tem retorno!")

    
}


withoutReturn()

// 2 - callback com argumento


function greeting (name:string) {
    return "Olá " + name
}


function preeGreeting (f: (name:string) => string, userName:string) {
    console.log("Preparando a função")

    const greet = f(userName)

    console.log(greet)
}

preeGreeting(greeting, "Jean")
// preeGreeting(greeting, 1)

// 3- GENERIC FUNCTIONS

function  firstElement<T>(arr: T[]) :T {
    return arr[0]
}


console.log(firstElement([1,2,3]))
console.log(firstElement(["A"]))
// console.log(firstElement("teste"))

function mergeObjects <U , T> (obj1: U, obj2: T){
    return {
        ...obj1,
        ...obj2
    }
}


const newObj = mergeObjects({
    name: "Jean"
}, {
    age:29,
    job:"dev"
})

console.log(newObj)


// 4 - contraints

function biiggestsNumber <T extends number|string> (a:T , b: T): T {
    let biggest: T
    if (+a > +b){
        biggest = a
    }else{
        biggest = b
    }

    return biggest
}


console.log(biiggestsNumber(5,3))

console.log(biiggestsNumber("12","16"))

// console.log(biiggestsNumber("12",5))

// console.log(biiggestsNumber(true,false))


// 5 - especificar tipo de argumento


function mergeArrays<T>(arr1:T[],arr2:T[]){
    return arr1.concat(arr2)
}


console.log(mergeArrays([1,2,3],[4,5,6]))
console.log(mergeArrays<number|string>([1,2,3],["a","b","c"]))

//6 - parametros opcionais

function mordernGreeting (name: string, greet?: string){
    if (greet){
        return `Olá ${greet} ${name}, tudo bem?`   
    }
    return `Olá, ${name}.`
}

console.log(mordernGreeting("Jean","Sr."))

console.log(mordernGreeting("Jean"))

//  7 - parametro default 

function somaDefault (n:number , m =10): number{
    return n+m
}

console.log(somaDefault(10))

console.log(somaDefault(15,12))

// 8 - tipo unknown

function doSomething (x:unknown){
    if(Array.isArray(x)){
        
        console.log(`X é um array e a posição zero é ${x[0]}`)
    }else if(typeof x === "number"){
        console.log( "X é um número") // TENHO QUE SEMPRE VERIFICAR O TIPO DO DADO PASSADO.
    }
    
    
}

doSomething(1)
doSomething([1,0])



// 9 - tipo never


function showErrorMessage(msg: string):never{
    throw new Error(msg)
}

//showErrorMessage("alguma coisa")

// 10 - rest operator com ts

function sumAll(...n: number[]){

    console.log(n)
    return n.reduce((number,sum)=> sum + number)
}

console.log(sumAll(1,2,3,4,5))


// 11- destructuring como parametro

function showProductsDetails({name,price}: {name:string,price:number}){
    return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: "Camisa", price: 20.99}

console.log(showProductsDetails(shirt))

