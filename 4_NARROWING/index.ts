// 1 - typeof type guard é basicamente uma validação do tipo usando o typeof

function soma(a: number|string,b:number|string){
    if (typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    }else if (typeof a === "number" && typeof b === "number"){
        console.log(a+b)
    }else{
        console.log("impossível realizar a operação")
    }
}

soma("4","59")

soma(5,3)

soma("5",8)

// 2 - checando se valor existe

function operations(arr: number[], operation?: string|undefined){
    if (operation){
        if (operation === "soma") {
           const sum  = arr.reduce((i, total) => i+total)
                console.log(sum)
            }else if (operation === "multilpica"){
                const multiply  = arr.reduce((i, total) => i*total)
                console.log(multiply)
            }
        
 
 
        // switch (operation){
        //     case "soma":
        //         let total: number = 0
        //         for (let i = 0; i < arr.length; i++){
        //             total += arr[i]
        //         }

        //         console.log(total)
        // }
    }else{
        console.log("Por favor, defina uma operação")
    }
}

operations([1,2,3])
operations([1,2,3],"soma")
operations([2,2,3],"multilpica")

// 3 - instaceof

class User {
    name

    constructor (name: string){
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string){
        super(name)
    }
}

const jhon = new User("Jhon")
const paul = new SuperUser("Paul")

console.log(jhon)
console.log(paul)

function userGreeting( user: object){
    if (user instanceof SuperUser){// o narrowing, usando intanceof ele verifica a clase do objeto que está sendo apresentado
        console.log("Olá " + user.name + ", deseja ler os dados do sistema?")
    }else if (user instanceof User){
        console.log("Olá " + user.name)
    }
}

userGreeting(jhon)
userGreeting(paul)


// 4 - operator in - checar se existe propriedade no objeto

class Dog {
    name
    breed 

    constructor (name: string, breed?: string){
        this.name = name
        if (breed){
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor Alemão")

function showDogDetail(dog: Dog){ //aqui estou tipando conforme a classe. ou seja confirmando se está vindo a classe criada

    if ("breed" in dog){ //aqui verifico dessa forma se existe a propriedade no objeto
        console.log("O cachorro é da raça: " + dog.breed)
    }else {
        console.log("O curso é um SRD")
    }

}

showDogDetail(turca)
showDogDetail(bob)

// DESAFIO

function review(review?: number|boolean){
    if (typeof review === "number"){
        switch (review) {
            case 1: return "Nota 1, espero melhorar no próximo"
                
            case 2: return "Nota 2, melhor que 1, mas mesmo assim ainda to devendo"
                
            case 3: return "Nota 3, to mediano. Melhor que nada, mas também longe de estar bom"

            case 4: return "Obrigado pela nota 4, espero ser perfeito na próxima"

            case 5: return "Obrigado por atender todas as suas expectativas"
            default: return
                          
        }
    }
    console.log("Sem review informada")

}

console.log(review(1))
console.log(review(2))
console.log(review(3))
console.log(review(4))
console.log(review(5))





review()



