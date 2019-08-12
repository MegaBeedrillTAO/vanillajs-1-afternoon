var game = [];

var play = (id) => {
    let player = document.getElementById("player");
    let boxClicked = document.getElementById(id);
    if (player.innerText === "X"){
        player.innerText = "O";
        boxClicked.innerText = "X";
        game[id] = "X";
        boxClicked.removeAttribute("onclick");
    }
    else {
        player.innerText = "X";
        boxClicked.innerText = "O";
        game[id] = "O";
        boxClicked.removeAttribute("onclick");
    }
    
    
    if (game[0] !== undefined && game[0] === game[1] && game[0] === game[2]){
        window.alert(`Player ${game[0]} has won!`);
        reset();
        return;
    }
    else if(game[0] !== undefined && game[0] === game[3] && game[0] === game[6]){
        window.alert(`Player ${game[0]} has won!`);
        reset();
        return;
    }
    else if(game[0] !== undefined && game[0] === game[4] && game[0] === game[8]){
        window.alert(`Player ${game[0]} has won!`);
        reset();
        return;
    }
    else if(game[1] !== undefined && game[1] === game[4] && game[1] === game[7]){
        window.alert(`Player ${game[1]} has won!`);
        reset();
        return;
    }
    else if(game[2] !== undefined && game[2] === game[5] && game[2] === game[8]){
        window.alert(`Player ${game[2]} has won!`);
        reset();
        return;
    }
    else if(game[2] !== undefined && game[2] === game[4] && game[2] === game[6]){
        window.alert(`Player ${game[2]} has won!`);
        reset();
        return;
    }
    else if(game[3] !== undefined && game[3] === game[4] && game[3] === game[5]){
        window.alert(`Player ${game[3]} has won!`);
        reset();
        return;
    }
    else if(game[6] !== undefined && game[6] === game[7] && game[6] === game[8]){
        window.alert(`Player ${game[6]} has won!`);
        reset();
        return;
    }
    let boardFull = true;
    for (i = 0; i <= 8; i++){
        if (game[i] === undefined){
            boardFull = false;
        }
        
    }
    if (boardFull === true){
        window.alert("Cat's game, there is no winner.");
    }
        
}
var reset = () =>{
    let items = document.getElementsByTagName("td");
    for(i = 0; i < items.length; i++){
        items[i].innerText = "";
        items[i].setAttribute("onclick", `play(${i})`);
    }
    game.splice(0);
    
}