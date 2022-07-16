let gameContainer = document.querySelector(".hide-container");
let playerContainer = document.querySelector(".enter-players");
let block = document.querySelector(".board__main");
let box = document.querySelectorAll("[data-id]");
let turn = document.querySelector(".board___player-turn");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let playerName = document.querySelector(".name--style")
let letter = document.querySelectorAll(".letter");

let num =document.getElementById("num");
let numValue = parseInt(num.innerText);

// Single player
let single = document.getElementById("single")


function startBtn(e){
    e = e || window.event;
    e.preventDefault();
    
    // player varificaiton
    let player1Val = player1.value;
    playerName.innerText = player1Val;
    
    if(player1.value !== "" && player2.value !== ""){
        gameContainer.style.display = "block";
        playerContainer.classList.add("hide-container")
    }else{
        if(player1.value == ""){
            player1.classList.add("input-null");
            player2.classList.remove("input-null");
        }else{
            player1.classList.remove("input-null");
            player2.classList.add("input-null");
        }
    }
}

let black = 0;

let array = [1, 2, 3, 4, 5, 6 ,7, 8]
function shuffle(array) {
    var i = array.length,
    j = 0,
    temp;
    
    while (i--) {
        
        j = Math.floor(Math.random() * (i+1));
        
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        
    }
    
    return array;
}   
let shufflee = shuffle(array)
let count = 0;

function bot(){
let counter = shufflee[count++];
    if(box[counter].innerText !== "X" && box[counter].innerText !== 'O'){
        setTimeout(() => {
            box[counter].innerText = "0";
            box[counter].style.opacity = 1;
            console.log("1st counter, i am sit on " + counter);
        }, 1000);
    }else{
        console.log("1st counter, i cant sit");
        for(let a = 1; a< array.length; a ++){
            console.log(array);
            counter ++;
            if(box[counter].innerText !== "X" && box[counter].innerText !== "O"){
                setTimeout(() => {
                    box[counter].innerText = "O";
                    box[counter].style.opacity = 1;
                    console.log("2nd counter, i am sit on " + counter);
                }, 1000);
                break;
                
            }else{
                continue;
                console.log("2nd counter, i cant sit");
            }
        }
    }
}

function tab(click){
    black = black + 1
    click.innerText = "X";
    click.style.opacity = 1;
    console.log(click);
    bot();
    
    
}
