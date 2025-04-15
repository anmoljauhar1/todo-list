# todo-listlet boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const enaablebox = () =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText= "";
    }
}

const resetGame =()=>{
    turnO = true;
    enaablebox();   
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if (turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disablebox = () =>{
    for(let box of boxes){
        box.disabled= true;
    }
}

const showWinner = (winner) => {
    msg.innerText =`congratulation winner is ${winner}`
    msgContainer.classList.remove('hide');
    disablebox();
}

const checkWinner = () =>{
    for (let pattern of winPattern){
        let posi1 =  boxes[pattern[0]].innerText;
        let posi2 = boxes[pattern[1]].innerText;
        let posi3 = boxes[pattern[2]].innerText;
    
    if (posi1 != "" && posi2 != "" && posi3 != ""){
        if(posi1===posi2 && posi2===posi3){
            console.log("winner",posi1);
            showWinner(posi1);
            }
        }
    }
};


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



