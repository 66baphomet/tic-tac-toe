document.addEventListener("DOMContentLoaded",()=>{

    let squares=document.querySelectorAll(".grid div");
    const playerId=document.querySelector("#player-id");
    const gameOver=document.querySelector("h3");
    let player = "X";
    let gameOverController=true;

    //assign an onclick anonymous function to every square on grid
    squares.forEach((square)=>
    {
        square.onclick= function(){
                if( player=="X" && !(square.classList.contains("player-one")) && !(square.classList.contains("player-two")) && gameOverController )
                {
                            square.classList.add("player-one");
                            
//change turns 
                           player="O";
                            playerId.innerHTML=player;
          if(sounds){                 
let crossSound=new Audio("cross-sound.mp3");
 crossSound.play();
 }
                }
                else if( player=="O"&& !(square.classList.contains("player-one")) && !(square.classList.contains("player-two")) && gameOverController )
                {
                    square.classList.add("player-two");
                    //change turns
                    player="X";
                    playerId.innerHTML=player;
                    if(sounds){
 let circleSound=new Audio("circlesound.mp3");
 circleSound.play();
 }
                }

        }
    })


//function to check result
    function checkResult()
    {
    				//conditions for winning
        const winningArray=[
            [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]
        ];
//check if any three squares meet the conditions
        for(let j=0; j<winningArray.length ; j++)
        {
             let square1 = squares[winningArray[j][0]];
             let square2 = squares[winningArray[j][1]];
             let square3 = squares[winningArray[j][2]];

             if( square1.classList.contains("player-one")&&
             square2.classList.contains("player-one")&&
             square3.classList.contains("player-one") )
             {
             				if(sounds){
let winSound=new Audio("winsound.mp3");
winSound.play();
}
               gameOver.innerHTML="Game Over!";
                setTimeout(()=> {
                  alert("X Wins!")},150);
//stopping the game to continue after a win
                gameOverController=false;
             }
             else if( square1.classList.contains("player-two")&&
             square2.classList.contains("player-two")&&
             square3.classList.contains("player-two") )
             {
             				if(sounds){
             				let winSound=new Audio("winsound.mp3");
winSound.play();
}
               gameOver.innerHTML="Game Over!";
                setTimeout(()=> {
                  alert("O Wins!")},150);
//stopping the game to continue after a win
                gameOverController = false;
             }
        }

//checking for draw
//it checks if all the squares are occupied or not. If occupied it shows draw.
        for(let draw=0; draw<squares.length; draw++)
        {
            if( (squares[draw].classList.contains("player-one") || squares[draw].classList.contains("player-two"))&& gameOverController)
            {
              if(draw==8){
                if(sounds)
                {
                				if(sounds){
let drawSound=new Audio("drawsound.mp3") ;
drawSound.play();
} 
gameOver.innerHTML="Game Over!";
                    setTimeout(()=> {alert("It's a Draw!")},150);
                    gameOverController = false;
                }
              }
            }
            else
            break;//if any of the grid is not occupied it breaks the loop
        }

    }

//invoking the chekResult function every time a square is clicked
  squares.forEach((square)=> square.addEventListener("click", checkResult))

})
let sounds=true;
function any()
{
  if(sounds)sounds=false;
  else sounds=true;
}