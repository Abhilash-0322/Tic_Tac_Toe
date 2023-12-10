let boxes=document.querySelectorAll(".box");
let Reset=document.querySelector("#resetbutton");
let turn0=true;
let Body=document.querySelector("body");
let newgame=document.querySelector("#newgame");
let windialogue="<h1>CONGRATULATIONS \nWinner Is</h1>";
let Div=document.createElement("div");
let counter=0;
let won=false;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerHTML="0";
            turn0=false;
        }
        else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
})
const Newgame=()=>{
    won=false;
    counter=0;
    newgame.style.display="none";
    Div.style.display="none";
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
}
newgame.addEventListener("click",()=>{
    Newgame();
});
Reset.addEventListener("click",()=>{
    Newgame();
});
const winEvents=()=>{
    console.log("We GOT THE WINNER");
}
const checkwinner=()=>{
    counter++;
    for(let pattern of winPatterns){
    console.log(pattern[0],pattern[1],pattern[2]);
    console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    if(counter===9 && !won){
        Body.appendChild(Div).innerHTML="<h1>GAME HAS BEEN DRAWN</h1>";
        Div.style.display="unset";
        newgame.style.display="unset";
        console.log("Drawn");
    }
    console.log(
        boxes[pattern[0]],
        boxes[pattern[1]],
        boxes[pattern[2]]
        );
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        if (posval1 !=""&& posval2 !="" && posval3!=""){
            if(posval1==posval2&&posval2==posval3){
                winEvents();
                Body.appendChild(Div).innerHTML=`<h1>CONGRATULATIONS \n</h1> <h2> ${posval1} Is Winner</h2>`;
                newgame.style.display="unset";
                Div.style.display="unset";
                won=true;
                boxes.forEach((box)=>{
                box.disabled=true;
                })
            }
        }
    }
};
