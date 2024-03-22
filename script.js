let boxes = document.querySelectorAll(".box");
let newbtn = document.querySelector(".reset");
let msgcon = document.querySelector(".msgcontainer")
let turnO =true;
let winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const resetgame=()=>{
    turnO=true;
    enableboxes()
    msgcon.classList.add("display")
}
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box clicked");
        if(turnO){
            box.innerText="O";
            turnO = false;
        }
        else{
            box.innerText="X"
            turnO= true;
        }
        box.disabled=true;

        checkwinner();
        newbtn.innerText="Reset Game"
    })
    
});

let disableboxes=()=>{
    for(let box of boxes){
    box.disabled=true;
    }
};
let enableboxes=()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText=""
    }
};
let showwinner=(winner)=>{
    msgcon.innerText=`Congratulations,Winner is ${winner}`;
    msgcon.classList.remove("display");
    disableboxes();
}
const checkwinner =()=>{
    for(let pattern of winpattern){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;
        
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val)
                showwinner(pos1val);

            }
        }
    }
}
newbtn.addEventListener("click",resetgame)