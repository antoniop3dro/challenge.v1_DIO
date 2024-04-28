//Desafio Criar uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades
//Objetivo:
//- nome
//- idade
//- tipo (ex: guerreiro, mago, monge, ninja )
//além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
//- exibir a mensagem: "o {tipo} atacou usando {ataque}")
//- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
//- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)

//Construído como projeto contínuo ao desafio anterior
//Desafio anterior: Apresentar o heroi, seu nível e ranking

const heroi = "Antonio Pedro"
let exp = 10
let rank = ""
let randomNumber = Math.floor(Math.random() * 10000) + 1

if (exp<=1000){
rank = "Ferro";
} else if (exp>=1001<=2000){
rank = "Bronze"
} else if (exp>=2001<=5000){
rank = "Prata"
} else if (exp>=5001<=7000){
rank = "Ouro"
} else if (exp>=7001<=8000){
rank = "Platina"
} else if (exp>=8001<=9000){
rank = "Ascendente"
} else if (exp>=9001<=10000){
rank = "Imortal"
} else if(exp>=10001){
rank = "Radiante"
}

console.log("O Herói " + heroi + " está no nível " + rank + " com " + exp + " de experiência.")

exp=exp+randomNumber
console.log("Com essa nova experiência utilizando Javascript, " + heroi + " aumentou de nível!")

if (exp<=1000){
rank = "Ferro";
} else if (exp>=1001 && exp<=2000){
rank = "Bronze"
} else if (exp>=2001 && exp<=5000){
rank = "Prata"
} else if (exp>=5001 && exp<=7000){
rank = "Ouro"
} else if (exp>=7001 && exp<=8000){
rank = "Platina"
} else if (exp>=8001 && exp<=9000){
rank = "Ascendente"
} else if (exp>=9001 && exp<=10000){
rank = "Imortal"
} else if(exp>=10001){
rank = "Radiante"
}

console.log("Agora, o herói " + heroi + " está no nível " + rank + " com " + exp + " de experiência.")

//Desafio Anterior: Calculador de partidas ranqueadas e liga

let totalRank = ""
let liga = ""
let randomNumberTwo = Math.floor(Math.random() * 100) + 1

function calcular(){
    let win = randomNumberTwo
    let loss = randomNumberTwo
    totalRank = (win*0.5) + (loss*0.7)
    return totalRank = Math.round(totalRank)
}

function ranquear(){
    calcular(totalRank)
    if (totalRank<=10){
    liga = "Ferro";
    } else if (totalRank>=11 && totalRank<=20){
    liga = "Bronze"
    } else if (totalRank>=21 && totalRank<=50){
    liga = "Prata"
    } else if (totalRank>=51 && totalRank<=80){
    liga = "Ouro"
    } else if (totalRank>=81 && totalRank<=90){
    liga = "Diamante"
    } else if (totalRank>=91 && totalRank<=100){
    liga = "Lendário"
    } else if(totalRank>=101){
    liga = "Imortal"
    }
    return liga
}

console.log("E, baseado no seu histórico de partidas, você está na liga de Campeões " + ranquear(liga) + " com um MMR de aproximadamente " + totalRank + ".")

//Desafio Novo: Criar uma classe generica que represente um herói de uma aventura

class hero{
    constructor(nome, idade, tipo){
        this.name = nome
        this.age = idade
        this.weapon = tipo
    }

    write(){
        console.log(`O herói se chama ${this.name}, com ${this.age} anos de idade. Sua classe é ${this.weapon}.`)
    }

    attack(){
        let attackType
        if(this.weapon.toLowerCase() === "mago"){
            attackType = "magia"
        }else if(this.weapon.toLowerCase() === "guerreiro"){
            attackType = "golpe físico de espada"
        }else if(this.weapon.toLowerCase() === "monge"){
            attackType = "golpe físico de arte marcial"
        }else if(this.weapon.toLowerCase() === "ninja"){
            attackType = "golpe a distância com shuriken"
        }return console.log (`Então ${this.weapon} ${this.name} ataca utilizando ${attackType}.`)
    }      
}

let traveler = new hero(heroi, 28, "Mago")
traveler.write()
traveler.attack()

//extra: Randomizar outro player

function generateRandomName(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let randomAdventurer = generateRandomName(8);
let randomAge = Math.floor(Math.random() * 50)
const classes = ["Mago", "Guerreiro", "Monge", "Ninja",]
let randomClasse = Math.floor(Math.random() * classes.length)
let anotherTraveler = new hero(randomAdventurer, randomAge, classes[randomClasse])

anotherTraveler.write()
anotherTraveler.attack()