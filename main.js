var squares = document.getElementsByClassName("squares");
var turn = true;
var squaresX = [];
var squaresO = [];
var winnerRows = [
    ["square1", "square2", "square3"],
    ["square4", "square5", "square6"],
    ["square7", "square8", "square9"],
    ["square1", "square4", "square7"],
    ["square2", "square5", "square8"],
    ["square3", "square6", "square9"],
    ["square1", "square5", "square9"],
    ["square3", "square5", "square7"]
]


function reset() {
    var elements = document.getElementsByClassName("squares");
    for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].innerHTML = "";
    }
    squaresX = [];
    squaresO = [];
    turn = true;
    document.getElementById("game").style.display = "grid";
    document.getElementById("winnercontainer").style.display = "none";
    document.getElementById("button").hidden = true;
}



function insertPlay(square) {
    if(square.innerHTML.length === 0){
        if(turn === true){
            square.innerHTML +='<i class="material-icons" style="font-size:130px; padding: 10px;">close</i>';
            squaresX.push(square.id);
            testLine(squaresX);
            turn = false;
        }else{
            square.innerHTML +='<i class="material-icons" style="font-size:110px; padding: 20px;">radio_button_unchecked</i>';
            squaresO.push(square.id);
            testLine(squaresO);
            turn = true;
        }
        document.getElementById("button").hidden = false;
    }
}

function testLine(squares) {
    var result;
    for (const element of winnerRows) {
        if (element.every(elem => squares.includes(elem))){
            result = true;
            showWinner(squares)
            break;
        }
    };
}

function showWinner(squares) {
    var winner
    if(squares === squaresX){
        winner = "X";
        document.getElementById("winner").innerHTML = "Player X is the Winner!";
    }else{
        winner = "O";
        document.getElementById("winner").innerHTML = "Player O is the Winner!";
    }
    document.getElementById("game").style.display = "none";
    document.getElementById("winnercontainer").style.display = "flex";

}