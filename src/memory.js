class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    }

    let length = this.cards.length

    while (length) {
      length--
      let thisCard = this.cards[length]
      let randomIndex = Math.floor(Math.random() * length) 
      this.cards[length] = this.cards[randomIndex]
      this.cards[randomIndex] = thisCard
    }

    return this.cards
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
    // ... write your code here
  }

  checkIfFinished() {

    if (this.pairsGuessed === 12) {
      return true
    } else {
      return false
    }
    // ... write your code here
  }
}
