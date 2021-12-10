$(document).ready(function() {
  const deck = []
  for (let i = 0; i < 4; i += 1) {
    let suit
    if (i === 0) suit = "hearts"
    if (i === 1) suit = "clubs"
    if (i === 2) suit = "spades"
    if (i === 3) suit = "diamonds"
    for (let j = 0; j < 13; j += 1) {      
      if (j === 0) {
        deck.push("ace of " + suit)
      } else if (j === 10) {
        deck.push("jack of " + suit)
      } else if (j === 11) {
        deck.push("queen of " + suit)
      } else if (j === 12) {
        deck.push("king of " + suit)
      } else {
        deck.push("" + (j + 1) + " of " + suit)
      }
    }
  }
  console.log(deck)

  deck.forEach(card => {
    $(".cards").append(`<li>${card}</ul>`)
  })

})