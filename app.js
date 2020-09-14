let currentPlayer = 'X';
let winMsg = document.getElementById('win-message')

let timesClicked = 0;

let cells = document.querySelectorAll('.row > div');
let gameOver = false


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}



let winningCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]]
];

function cellClicked(e) {
    timesClicked++;

    e.target.textContent = currentPlayer;
    winCheck();
    if (currentPlayer == "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }
}

function winCheck() {

    for (let i = 0; i < winningCombos.length; i++) {
        let sum = 0; 
        let combo = winningCombos[i]
        for (let j = 0; j < combo.length; j++) {

            if (combo[j].textContent === currentPlayer) {
                sum++
            }
            if (sum === 3) {
                winMsg.textContent = `${currentPlayer} WINS!`;
                gameOver = true;
                resetGame();
                gameOver = false;
                // console.log(`${currentPlayer} wins!`)
            } else if ( timesClicked == 9) {
                winMsg.textContent = `TIE!`;
                gameOver = true;
                resetGame();
                gameOver = false;
            }
        }
    }
}

function resetGame() {
    if (gameOver == true) {
        setTimeout(function(){
            for (cell of cells) {
                cell.innerText = '';
                timesClicked = 0;
                winMsg.innerHTML = '';
                currentPlayer = 'X';
                gameOver = false;
            }
        },3000)
    }
}