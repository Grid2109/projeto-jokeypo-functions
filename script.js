const result = document. querySelector('.result')
const humanScore = document. querySelector('#human-score')
const machineScore = document. querySelector('#machine-score')  

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
  
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
 const choices = ['rock', 'paper', 'scissors']
 const randomNumber = Math.floor(Math.random() * 3)// multiplico por 3 porque caso de 0.9 x 3 resulta 2.7 eu arredondo para 2

 return choices[randomNumber] //números aleatórios entre 0 e 1 que são as posições dos meus emojis
}

const playTheGame = (human , machine) => {
 console.log ('Humano: ' +  human  + ' Maquina: ' + machine)

 if (human === machine) {
   result.innerHTML = 'Deu impate!'
} else if (
    (human === 'paper' && machine === 'rock') ||
    (human === 'rock' && machine === 'scissors') ||
    ( human === 'scissors' && machine === 'paper')
) {
    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber
   result.innerHTML = 'Você ganhou'
} else {
    machineScoreNumber++
    machineScore.innerHTML =  machineScoreNumber
    result.innerHTML = 'Você ganhou Alexa!'
 }
}