//random cards
let firstCard = Math.floor(Math.random()*11) +1
let secondCard = Math.floor(Math.random()*11) +1
let opFirstCard = Math.floor(Math.random()*11) +1
let opSecondCard = Math.floor(Math.random()*11) +1
//varibles
let sum = firstCard + secondCard 
let opsum = opFirstCard + opSecondCard
let massege = ""
let card = firstCard + "-" + secondCard
let opCards = opFirstCard + "-" + opSecondCard
//
let hasBlackJack = false
let isAlive = true 
let game = false
let ypass = false
//players buttons
let yourCards = document.getElementById("ycards")
let sumY = document.getElementById("sumy")
let oppCards = document.getElementById("ocards")


function startGame(){
    if(game === false){
        yourCards.textContent += card
        sumy.textContent += sum
        oppCards.textContent += opFirstCard + " - ?"
        game = true 
        console.log(game)
    }
}
function oneMore(){
    if(game === true && ypass === false){
        let otherCard = Math.floor(Math.random()*11) +1
        yourCards.textContent += "-" + otherCard 
        sum += otherCard 
        sumy.textContent +="-" + sum
    }
}
function pass(){
    ypass = true
   if (opsum <= 19){
        opOtherCard = Math.floor(Math.random()*11) +1
        oppCards.textContent += " - " + opOtherCard
        opsum += opOtherCard
        console.log(opsum)
   }
}


if (sum <= 20){
    massege = "Do you want to draw a new card? 🙂"
}else if (sum === 21){
    massege = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
}else {
    massege = "You're out of the game! 😭"
    isAlive = false
}
console.log(massege)
//console.log(hasBlackJack)
//console.log(isAlive)

console.log(firstCard)
console.log(secondCard)
console.log(opFirstCard)
console.log(opSecondCard)