console.log("welcome to toc tac toe");
let music = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X"
let isgameover = false;
let imgbox ;




//for channging the turn
const changeTurn =()=>{
    return turn === "X"?"0": "X"
}

// function to check winner
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0,1,2], //first 3 no for winning positions and second 3 no are used for line winning line .
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e=>{
         if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "") ){
            
            document.querySelector(' .info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px"
            document.querySelector('.line')
        }
    })
}

//Main Logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText= turn;
            music.play();
            turn = changeTurn();
            checkwin();
            
            if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onclick listner to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=> {
        element.innerText = ""
    });
    
    if(isgameover)
    {
        turn = "X"
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    }
})
 