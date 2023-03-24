const fistName = "Jean"

const anotherName = 1


const x = true


function greeting(name: string){ //aqui colocando : string ele só vai aceitar informações do tipo string aqui, se eu mandar alguma forma diferente ele já recusa na hora de compilar com o tsc arquivo.ts
    console.log("Olá, " + name)
}

greeting(fistName)
// greeting(anotherName)
// greeting(x)


//DESAFIO 1

function soma(a:number, b:number){
    console.log(a+b)
}

soma(1,2)
