//Desafio Classificador de nível de Herói
//Objetivo:
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
// Se XP for menor do que 1.000 = Ferro 
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

const heroi = "Antonio Pedro"
let exp = 10
let rank = ""
//extra: aumentar de nível com exp randomica
//utilizei o chat GPT para me ajudar com essa ideia
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

//extra: aumentando de nível
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