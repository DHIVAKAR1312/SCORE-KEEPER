const player1 = {
    score: 0,
    button: document.querySelector('#player1Button'),
    display: document.querySelector('#p1Score')
}

const player2 = {
    score: 0,
    button: document.querySelector('#player2Button'),
    display: document.querySelector('#p2Score')
}
const resetButton = document.querySelector('#resetButton');
const maxScoreSelect = document.querySelector('#selectScore');
let winningScore = 3;
let isgameOver = false;

function updateScore(player, opponent){
    if(!isgameOver){
        player.score += 1;
        if(player.score === winningScore){
            isgameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            player.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

player1.button.addEventListener('click', function(){
    updateScore(player1, player2)
})

player2.button.addEventListener('click', function(){
    updateScore(player2, player1)
})

maxScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
})

resetButton.addEventListener('click', reset)
function reset(){
    isgameOver = false;
    for(let player of [player1, player2]){
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.button.disabled = false;
    }
}

