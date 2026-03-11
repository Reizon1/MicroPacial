let startBtn = document.getElementById("startBtn")
let startScreen = document.getElementById("startScreen")
let gameScreen = document.getElementById("gameScreen")
 
let cells = document.querySelectorAll(".cell")
let turnText = document.getElementById("turn")
 
let winnerBox = document.getElementById("winnerBox")
let winnerText = document.getElementById("winnerText")
let restartBtn = document.getElementById("restartBtn")
 
let currentPlayer = "X"
 
startBtn.onclick = () => {
 
startScreen.classList.remove("active")
gameScreen.classList.add("active")
 
}
 
cells.forEach(cell => {
 
cell.addEventListener("click",()=>{
 
if(cell.textContent!="") return
 
cell.textContent=currentPlayer
cell.classList.add(currentPlayer)
 
if(checkWinner()){
 
winnerText.textContent="GANO EL JUGADOR "+currentPlayer
winnerBox.classList.add("show")
 
return
 
}
 
currentPlayer = currentPlayer==="X" ? "O":"X"
 
turnText.textContent="TURNO DEL JUGADOR: "+currentPlayer
 
})
 
})
 
 
restartBtn.onclick=()=>{
 
cells.forEach(cell=>{
cell.textContent=""
cell.classList.remove("X","O")
})
 
currentPlayer="X"
turnText.textContent="TURNO DEL JUGADOR: X"
 
winnerBox.classList.remove("show")
 
}
 
 
function checkWinner(){
 
let combos=[
 
[0,1,2],
[3,4,5],
[6,7,8],
 
[0,3,6],
[1,4,7],
[2,5,8],
 
[0,4,8],
[2,4,6]
 
]
 
for(let combo of combos){
 
let a=cells[combo[0]].textContent
let b=cells[combo[1]].textContent
let c=cells[combo[2]].textContent
 
if(a && a===b && a===c){
return true
}
 
}
 
return false
 
}