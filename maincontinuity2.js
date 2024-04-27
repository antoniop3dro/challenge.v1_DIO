//Desafio Calculadora de partidas ranqueadas
//Objetivo:
//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

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

//Desafio Novo: Calcular partidas ranqueadas

let TotalRank = ""
let Liga = ""
//extra: Randomizei uma variável similar aquela apresentada no primeiro projeto, mas com um floor numeral menor para ranquear a liga do personagem.
let randomNumberTwo = Math.floor(Math.random() * 100) + 1

//Função de calcular o Match Making Ranking, ou MMR, variável geralmente oculta em games competitivos, 
//que determina sua Liga baseado numa ponderancia entre Vitórias e Derrotas.
//No desafio seria o equivalente ao "Salvo de Vitórias".
function Calcular(){
    let Win = randomNumberTwo
    let Loss = randomNumberTwo
    TotalRank = (Win*0.5) + (Loss*0.7)
    return TotalRank = Math.round(TotalRank)
}

//Função de determinar sua Liga, ou ranking, equivalente ao "Nível" no desafio,
//mas como estou continuando projeto anterior, o nível já tem seu uso para determinar a experiência do personagem.
//Dividi as funções como boa prática de ter uma função para cada atividade determinada.
function Ranquear(){
    Calcular(TotalRank)
    if (TotalRank<=10){
    Liga = "Ferro";
    } else if (TotalRank>=11 && TotalRank<=20){
    Liga = "Bronze"
    } else if (TotalRank>=21 && TotalRank<=50){
    Liga = "Prata"
    } else if (TotalRank>=51 && TotalRank<=80){
    Liga = "Ouro"
    } else if (TotalRank>=81 && TotalRank<=90){
    Liga = "Diamante"
    } else if (TotalRank>=91 && TotalRank<=100){
    Liga = "Lendário"
    } else if(TotalRank>=101){
    Liga = "Imortal"
    }
    return Liga
}

console.log("E, baseado no seu histórico de partidas, você está na Liga de Campeões " + Ranquear(Liga) + " com um MMR de aproximadamente " + TotalRank + ".")