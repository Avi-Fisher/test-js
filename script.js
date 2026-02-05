let titelPlayer1 = document.getElementById("titel-player1") 
let titelPlayer2 = document.getElementById("titel-player2") 
let main = document.getElementById("main")
let newGame = document.getElementById("new-game")
let rooling = document.getElementById("rooling")
let finsh = document.getElementById("finsh")
let currentScore1 = document.getElementById("current-score1")
let totalScore1 = document.getElementById("total-score1")
let currentScore2 = document.getElementById("current-score2")
let totalScore2 = document.getElementById("total-score2")
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let pScore1 = document.getElementById("p-score1")
let pScore2 = document.getElementById("p-score2")

let turn = undefined
let scoreTurn = 0
let targetScore = 20
let totalScorePlayer1 = 0
let totalScorePlayer2 = 0
let countRoling = 0

let p1 = { "currentScore": currentScore1, "totalScore": totalScore1, "pScore": pScore1, "totalScorePlayer": totalScorePlayer1, "name": "Player1","titel":titelPlayer1}
let p2 = { "currentScore": currentScore2, "totalScore": totalScore2, "pScore": pScore2, "totalScorePlayer": totalScorePlayer2, "name": "Player2" ,"titel":titelPlayer2}


function initGame() {
    let howStart = Math.floor(Math.random() * 2) + 1
    if (howStart === 1) {
        turn = p1
    } else {
        turn = p2
    }
    turn.titel.classList = "turn"

    pScore1.textContent = 0
    pScore2.textContent = 0
    totalScore1.textContent = 0
    totalScore2.textContent = 0

    rooling.addEventListener("click", () => {

        if (countRoling < 5) {
            turnRooling()

            finsh.addEventListener("click", finishTurn)
        } else if (countRoling >= 5) {
            finishTurn()
        }

    })
}


function turnRooling() {

    if (countRoling < 5) {
        let score1 = Math.floor(Math.random() * 6) + 1
        let score2 = Math.floor(Math.random() * 6) + 1

        num1.textContent = `${score1}`
        num2.textContent = `${score2}`

        scoreTurn += score1 + score2

        if (score1 === score2) {
            scoreTurn = 0
            turn.pScore.textContent = scoreTurn
            finishTurn()
        }

        turn.pScore.textContent = scoreTurn
        countRoling++
    }
}


function finishTurn() {

    turn.totalScorePlayer += scoreTurn
    turn.totalScore.textContent = turn.totalScorePlayer
    scoreTurn = 0
    countRoling = 0

    if (! chackWin()){

        if (turn == p1) {
            turn.titel.classList = ""
            turn = p2
            turn.titel.classList = "turn"
        } else {
            turn.titel.classList = ""
            turn = p1 
            turn.titel.classList = "turn"
        }
    }    
}


function chackWin() {
    if (turn.totalScorePlayer >= targetScore) {
        div = document.createElement('div')
        div.id = "win"
        div.textContent = `${turn.name} Is Winnnnnnnnnnnnnnnn :))))`

        main.append(div)
        return true
    }
    return false
}




initGame()

