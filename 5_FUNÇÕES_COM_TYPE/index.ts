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