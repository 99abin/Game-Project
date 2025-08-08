let score = JSON.parse(localStorage.getItem('score')) || {
    user: 0,
    computer: 0,
    ties: 0
};

function calculate(pickedMove) {
    const random = Math.random()
    let userMove = pickedMove ; let result = ''; let compMove = ''

    if (random > 0 && random < 1/3) {
        compMove = 'rock'
    } else if (random > 1/3 && random < 2/3) {
        compMove = 'paper'
    } else if (random > 2/3 && random < 1) {
        compMove = 'scissor'
    }

    result = 'lose'
    if (userMove === 'rock' && compMove === 'scissor') {
        result = 'win'
    } else if (userMove === 'paper' && compMove === 'rock') {
        result = 'win'
    } else if (userMove === 'scissor' && compMove === 'paper') {
        result = 'win'
    } else if (userMove === compMove) {
        result = 'draw'
    }

    if (result === 'win') {
        score.user++
    } else if (result === 'lose') {
        score.computer++
    } else if (result === 'draw') {
        score.ties++
    }

    localStorage.setItem('score', JSON.stringify(score))
    const score1 = JSON.parse(localStorage.getItem('score'))

    document.querySelector('.move').textContent = `You: ${userMove}, Computer: ${compMove}`
    document.querySelector('.rslt').textContent = `You ${result}`
    document.querySelector('.scr').textContent = `You: ${score1.user}, Computer: ${score1.computer}, Ties: ${score1.ties}`
} 

function resetScore() {
    localStorage.removeItem('score')
    score = {
        user: 0,
        computer: 0,
        ties: 0
    }
    document.querySelector('.move').textContent = `You: -, Computer: -`
    document.querySelector('.rslt').textContent = `You -`
    document.querySelector('.scr').textContent = `You: 0, Computer: 0, Ties: 0`
} 



