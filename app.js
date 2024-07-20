let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let winmsg = document.querySelector(".msg-box");

let turnO = true;
let winner = false;
let winningPlayer = '';


const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6], 
    [0, 4, 8], 
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6],
    [3, 4, 5], 
    [6, 7, 8]
];

const checkWinner = function(){
    for(pattern of winningPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                winner = true
                winningPlayer = pos1;
                pattern.forEach(index => boxes[index].classList.add('winner'));
                break;
            }else{
                winner = false;
            }

        }
    }
    if(winner == true){
        console.log("Winner");
        winmsg.innerText = `Winner: Player ${winningPlayer}`;
        winmsg.classList.remove("hide");
        for(box of boxes){
            box.disabled =true;
        }
    }
}

boxes.forEach(function (box){
    box.addEventListener('click', function() {
        console.log("Clicked");
        if(turnO == true){
            box.innerText = "X";
            turnO = false;
        }else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const resetGame = function(){
    turnO = true;

    for(box of boxes){
        box.classList.remove('winner')
        box.innerText = "";
    }
    winmsg.classList.add("hide");

}

resetbtn.addEventListener("click", resetGame);




