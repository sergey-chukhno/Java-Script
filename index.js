let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = false
let message = ""
messageEl = document.getElementById('message-el')
sumEl = document.getElementById('sum-el')
cardsEl = document.querySelector('.cards-el')

let player = {
  name: 'Sergey', 
  chips: 145,
}

let playerEl = document.querySelector('.player-el')
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1

  if (randomCard > 10) {
    return 10
  }
  else if (randomCard === 1) {
    return 11
  }
  else {
    return randomCard
  }
}
function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent +=cards[i] + " "
  }
  sumEl.textContent = 'Sum: ' + sum

  if (sum <= 20) {
    message = 'Do you want to draw a new card?'
  } else if (sum === 21) {
    message = "Woohoo! You\'ve got Black Jack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message

} 

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    console.log('Drawing a new card from the deck')

    let card = getRandomCard()
    sum += card
    cards.push(card)
    
    renderGame()
  }
}