function TicTacToeGame(name1, name2) {
  this.players = [new Player("X", name1), new Player("O", name2)]
  this.gameBoard = new GameBoard()
  this.currentTurn = 1
  this.currentPlayerSymbol = this.players[0].team
}

TicTacToeGame.prototype.checkForWin = function(playerSymbol, gameBoard) {
  let isWin = false
  if (gameBoard.squares[0] === playerSymbol && gameBoard.squares[1] === playerSymbol && gameBoard.squares[2] === playerSymbol) isWin = true
  if (gameBoard.squares[3] === playerSymbol && gameBoard.squares[4] === playerSymbol && gameBoard.squares[5] === playerSymbol) isWin = true
  if (gameBoard.squares[6] === playerSymbol && gameBoard.squares[7] === playerSymbol && gameBoard.squares[8] === playerSymbol) isWin = true
  if (gameBoard.squares[0] === playerSymbol && gameBoard.squares[3] === playerSymbol && gameBoard.squares[6] === playerSymbol) isWin = true
  if (gameBoard.squares[1] === playerSymbol && gameBoard.squares[4] === playerSymbol && gameBoard.squares[7] === playerSymbol) isWin = true
  if (gameBoard.squares[2] === playerSymbol && gameBoard.squares[5] === playerSymbol && gameBoard.squares[8] === playerSymbol) isWin = true
  if (gameBoard.squares[0] === playerSymbol && gameBoard.squares[4] === playerSymbol && gameBoard.squares[8] === playerSymbol) isWin = true
  if (gameBoard.squares[2] === playerSymbol && gameBoard.squares[4] === playerSymbol && gameBoard.squares[6] === playerSymbol) isWin = true
  return isWin
}

TicTacToeGame.prototype.endTurn = function() {
  this.currentTurn += 1
  if (this.currentPlayerSymbol === this.players[0].team) {
    this.currentPlayerSymbol = this.players[1].team
  } else {
    this.currentPlayerSymbol = this.players[0].team
  }
}

function Player(team, name) {
  this.team = team
  this.name = name
}

function GameBoard() {
  this.squares = new Array(9).fill("")
}

GameBoard.prototype.Mark = function(square, playerSymbol) {
  const index = Number(square) - 1
  if (this.squares[index] === "") {
    this.squares[index] = playerSymbol
  }
}

// UI Logic
let myGame

function updateBoard(playerSymbol, boxId) {
  $(`#${boxId}`).removeClass("btn-outline-success")
  if (playerSymbol === "X") {
    $(`#${boxId}`).addClass("btn-info")
  } else {
    $(`#${boxId}`).addClass("btn-danger")
  }
  $(`#${boxId}`).html(`<div class="symbol">${playerSymbol}</div>`).attr("disabled", true)
}

$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault()
    const playerOne = $("#playerOne").val()
    const playerTwo = $("#playerTwo").val()
    myGame = new TicTacToeGame(playerOne,playerTwo)
    $("form").hide()
    $(".board-container").show()
    $(".current-player").show()
  })

  $(".board-container").on("click", ".col", function() {
    if ($(this).attr("disabled") === undefined) {
      // console.log("before turn",myGame.gameBoard.squares)
      myGame.gameBoard.Mark(this.id, myGame.currentPlayerSymbol)
      updateBoard(myGame.currentPlayerSymbol, this.id)
      const isWinner = myGame.checkForWin(myGame.currentPlayerSymbol, myGame.gameBoard)

      if (isWinner) {
        $(".board-container").children().children().attr("disabled", true)
        $(".player-team").hide()
        // get the current player/winners name
        let winner
        if (myGame.currentPlayerSymbol === "X") {
          winner = myGame.players[0].name
        } else {
          winner = myGame.players[1].name
        }
        $(".game-over-text").text(`Congrats, ${winner}! You win!`)
        $(".game-over").show()
      } else {
        if (myGame.currentTurn >= 9) {
          // then it's a tie
          $(".player-team").hide()
          $(".game-over-text").text(`It's the Cat's game!`)
          $(".game-over").show()
        }
        // continue the game
        myGame.endTurn()
        $(".player-team").text("Current Player: " + myGame.currentPlayerSymbol)
      }
    }
  })

  $(".new-game-button").click(function() {
    // reset all the board elements
    $(".box").text("").attr("disabled", false).removeClass("btn-info").removeClass("btn-danger").addClass("btn-outline-success")
    $(".game-over").hide()
    // and start a new game
    const playerOne = $("#playerOne").val()
    const playerTwo = $("#playerTwo").val()
    myGame = new TicTacToeGame(playerOne,playerTwo)
    $(".player-team").show()
  })
})
