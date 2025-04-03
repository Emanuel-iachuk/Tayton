const player1 = {
    Nome: "Mario",
    Velocidade: 4,
    Manobrabilidade: 3,
    poder: 3,
    Pontos: 0,
}

const player2 = {
    Nome: "Luigi",
    Velocidade: 3,
    Manobrabilidade: 4,
    poder: 4,
    Pontos: 0,
}

const player3 = {
    Nome: "Yoshi",
    Velocidade: 2,
    Manobrabilidade: 4,
    poder: 3,
    Pontos: 0,
}

const player4 = {
    Nome: "Peach",
    Velocidade: 3,
    Manobrabilidade: 4,
    poder: 2,
    Pontos: 0,
}

const player5 = {
    Nome: "Bowser",
    Velocidade: 5,
    Manobrabilidade: 2,
    poder: 5,
    Pontos: 0,
}

const player6 = {
    Nome: "Donkey Kong",
    Velocidade: 2,
    Manobrabilidade: 2,
    poder: 5,
    Pontos: 0,
}

function rollDice(){
   return Math.floor(Math.random() * 6) + 1;
}
// O objeto Math em JavaScript fornece propriedades e métodos para realizar operações matemáticas comuns. Diferente de outros objetos, Math não é um construtor - você usa suas propriedades e métodos diretamente (Math.PI, Math.sqrt(), etc.).

async function getRandomBlock() {
    let random = Math.random()
    let result

    switch(true){
        case random < 0.33:
            result = "Reta"
        break;
        case random < 0.66:
            result = "Curva"
        break;
        default:
            result = "Confronto"
}
return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName}🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
    
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`)

        // Sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)

               // Rolar dados
               let diceResult1 = await rollDice();
               let diceResult2 = await rollDice();
           
               // Teste de habilidade
               let TotalTestSkill1 = 0
               let TotalTestSkill2 = 0
           
               if (block === "Reta"){
                   TotalTestSkill1 = diceResult1 + character1.Velocidade;
                   TotalTestSkill2 = diceResult2 + character2.Velocidade;
           
               await logRollResult(character1.Nome, "velocidade", diceResult1, character1.Velocidade)
               await logRollResult(character2.Nome, "velocidade", diceResult2, character2.Velocidade)
               }
               if (block === "Curva"){
                   TotalTestSkill1 = diceResult1 + character1.Manobrabilidade;
                   TotalTestSkill2 = diceResult2 + character2.Manobrabilidade;
                   await logRollResult(character1.Nome, "Manobrabilidade", diceResult1, character1.Manobrabilidade)
               await logRollResult(character2.Nome, "Manobrabilidade", diceResult2, character2.Manobrabilidade)
               }
               if (block === "Confronto") {
                let powerResult1 = diceResult1 + character1.poder;
                let powerResult2 = diceResult2 + character2.poder;
            
                console.log(`${character1.Nome} confrontou ${character2.Nome}!🥊`);
            
                await logRollResult(character1.Nome, "poder", diceResult1, character1.poder);
                await logRollResult(character2.Nome, "poder", diceResult2, character2.poder);
            
                if (powerResult1 > powerResult2) {
                    if (character2.Pontos > 0) {
                        console.log(`${character1.Nome} venceu o confronto! ${character2.Nome} perdeu um ponto 🐢`);
                        character2.Pontos--;
                    } else {
                        console.log(`${character1.Nome} venceu o confronto! ${character2.Nome} não pode perder mais pontos (0 pontos)`);
                    }
                } else if (powerResult1 < powerResult2) {
                    if (character1.Pontos > 0) {
                        console.log(`${character2.Nome} venceu o confronto! ${character1.Nome} perdeu um ponto 🐢`);
                        character1.Pontos--;
                    } else {
                        console.log(`${character2.Nome} venceu o confronto! ${character1.Nome} não pode perder mais pontos (0 pontos)`);
                    }
                } else {
                    console.log("Confronto empatado! Nenhum ponto foi perdido");
                }
            }
            
            // Verificando o vencedor da rodada
            if (block !== "Confronto") {
                if (TotalTestSkill1 > TotalTestSkill2) {
                    console.log(`${character1.Nome} marcou um ponto!`);
                    character1.Pontos++;
                } else if (TotalTestSkill1 < TotalTestSkill2) {
                    console.log(`${character2.Nome} marcou um ponto!`);
                    character2.Pontos++;
                }
            }

               

               console.log("---------------------------------------------------")
        }
}
// Define que uma função retorna uma Promise (mesmo que não explicitamente).
// Promises (promessas) são objetos que representam a conclusão (ou falha) de uma operação assíncrona em JavaScript. Elas substituíram os callbacks aninhados ("callback hell") e são a base do async/await.if

async function declareWiner(character1, character2) {
    console.log("Resultado Final 🏁")
    console.log(`${character1.Nome}: ${character1.Pontos} pontos(s)`)
    console.log(`${character2.Nome}: ${character2.Pontos} pontos(s)`)

    if(character1.Pontos > character2.Pontos)
        console.log(`\n ${character1.Nome} venceu a corrida! Parabéns! 🏆`)
    else if(character1.Pontos < character2.Pontos)
        console.log(`\n ${character2.Nome} venceu a corrida! Parabéns! 🏆`)
    else 
        console.log("A corrida terminou em empate")
    
}  

(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.Nome} e ${player2.Nome} começando... \n `)
   await playRaceEngine(player1, player2)
   await declareWiner(player1, player2)
// Usado em funções async para pausar a execução até que uma Promise seja resolvida.

})();