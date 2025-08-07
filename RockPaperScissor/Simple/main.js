function calculate(pickedMove) {
    const random = Math.random()
    let userMove = pickedMove ; let result = ''; compMove = ''

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

    alert(`you picked ${userMove}, computer picked ${compMove}, you ${result}`)
}
