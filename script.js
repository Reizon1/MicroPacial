let currentPlayer = "X"
 
let cells = document.querySelectorAll(".cell")
 
let turnText = document.getElementById("turn")
 
let winnerScreen = document.getElementById("winnerScreen")
 
let winnerText = document.getElementById("winnerText")
 
 
cells.forEach(cell => {
 
cell.addEventListener("click", () => {
 
if(cell.textContent !== "") return
 
cell.textContent = currentPlayer
 
cell.classList.add(currentPlayer)
 
if(checkWinner()){
 
winnerText.textContent = "GANÓ EL JUGADOR " + currentPlayer
 
winnerScreen.classList.add("show")
 
return
 
}
 
currentPlayer = currentPlayer === "X" ? "O" : "X"
 
turnText.textContent = "TURNO DEL JUGADOR: " + currentPlayer
 
})
 
})
 
 
function checkWinner(){
 
let combos = [
 
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
 
let a = cells[combo[0]].textContent
let b = cells[combo[1]].textContent
let c = cells[combo[2]].textContent
 
if(a && a === b && a === c){
return true
}
 
}
 
return false
 
}
 
 
function resetGame(){
 
cells.forEach(cell=>{
cell.textContent=""
cell.classList.remove("X","O")
})
 
currentPlayer="X"
 
turnText.textContent="TURNO DEL JUGADOR: X"
 
winnerScreen.classList.remove("show")
 
}