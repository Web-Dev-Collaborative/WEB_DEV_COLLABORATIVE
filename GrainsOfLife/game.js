var gameOfLife = {
  width: 24,
  height: 24,
  stepInterval: null,
  autoPlayOn: false,
  setIntervalID: 0,

  createAndShowBoard: function () {
    // create <table> element
    var goltable = document.createElement("tbody");

    // build Table HTML
    var tablehtml = '';
    for (var h=0; h<this.height; h++) {
      tablehtml += "<tr id='row+" + h + "'>";
      for (var w=0; w<this.width; w++) {
        tablehtml += "<td data-status='dead' id='" + w + "-" + h + "'></td>";
      }
      tablehtml += "</tr>";
    }
    goltable.innerHTML = tablehtml;

    // add table to the #board element
    var board = document.getElementById('board');
    board.appendChild(goltable);

    // once html elements are added to the page, attach events to them
    this.setupBoardEvents();
  },

  forEachCell: function (iteratorFunc) {
    /*
      Write forEachCell here. You will have to visit
      each cell on the board, call the "iteratorFunc" function,
      and pass into func, the cell and the cell's x & y
      coordinates. For example: iteratorFunc(cell, x, y)
    */
    var board = document.getElementById('board').firstChild
    Array.prototype.slice.call(board.children).forEach(function (row) {
      Array.prototype.slice.call(row.children).forEach(function (cell) {
        var coords = cell.id.split("-")
        var x = parseInt(coords[0])
        var y = parseInt(coords[1])
        iteratorFunc(cell, x, y)
      })
    })

  },

  setupBoardEvents: function() {
    // each board cell has an CSS id in the format of: "x-y"
    // where x is the x-coordinate and y the y-coordinate
    // use this fact to loop through all the ids and assign
    // them "on-click" events that allow a user to click on
    // cells to setup the initial state of the game
    // before clicking "Step" or "Auto-Play"

    // clicking on a cell should toggle the cell between "alive" & "dead"
    // for ex: an "alive" cell be colored "blue", a dead cell could stay white

    // EXAMPLE FOR ONE CELL
    // Here is how we would catch a click event on just the 0-0 cell
    // You need to add the click event on EVERY cell on the board

    var onCellClick = function (e) {
      // QUESTION TO ASK YOURSELF: What is "this" equal to here?

      // how to set the style of the cell when it's clicked
      if (this.getAttribute('data-status') == 'dead') {
        this.className = "alive";
        this.setAttribute('data-status', 'alive');
      } else {
        this.className = "dead";
        this.setAttribute('data-status', 'dead');
      }
    };
    this.forEachCell(function (cell) {
      cell.onclick = onCellClick
    })
    // var cell00 = document.getElementById('0-0');
    // cell00.onclick = onCellClick;
  },

  step: function () {
    // Here is where you want to loop through all the cells
    // on the board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the next
    // evolution of the game.
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells based on their alive neighbors
    // (x, y) -> (1, 1)
    // check:
    //   (0, 0)  ,   (1, 0)  ,   (2, 0)
    //   (0, 1)  ,           ,   (2, 1)
    //   (0, 2)  ,   (1, 2)  ,   (2, 2)
    //
    // (x-1, y-1), ( x , y-1), (x+1, y-1)
    // (x-1,  y ), ( x ,  y ), (x+1,  y )
    // (x-1, y+1), ( x , y+1), (x+1, y+1)
    //
    //
    var start = Date.now(),
        cells = [],
        boardWidth = this.width,
        boardHeight = this.height
    this.forEachCell(function (cell, x, y) {
      var cellObj = new Cell(cell, x, y, cell.dataset.status, 0, 0)
      for(var i = cellObj.x-1; i < cellObj.x + 2; i++) {
        // if (i < 0 || i > boardWidth - 1) continue
        var col = i < 0 ? boardWidth - 1 : i % boardWidth
        for(var j = cellObj.y-1; j < cellObj.y + 2; j++) {
          if(i === cellObj.x && j === cellObj.y) continue
          var row = j < 0 ? boardHeight - 1 : j % boardHeight
          var currCell = document.getElementById(col + '-' + row)
          if (currCell.dataset.status === 'alive') cellObj.aliveCount++
          if (currCell.dataset.status === 'dead') cellObj.deadCount++
        }
      }
      cells.push(cellObj)
    })
    cells.forEach(function (cellObj) {
      if (cellObj.status === 'alive') {
        if (cellObj.aliveCount < 2 || cellObj.aliveCount > 3) {
          cellObj.cell.click()
        }
      }
      if (cellObj.status === 'dead') {
        if (cellObj.aliveCount === 3) {
          cellObj.cell.click()
        }
      }
    })
    console.log(Date.now() - start + ' ms')
  },

  enableAutoPlay: function () {
    // Start Auto-Play by running the 'step' function
    // automatically repeatedly every fixed time interval
    if (this.autoPlayOn) {
      this.autoPlayOn = false
      clearInterval(this.setIntervalID)
      document.getElementById('play_btn').innerHTML = 'Play'
    } else {
      this.autoPlayOn = true
      this.setIntervalID = setInterval(this.step.bind(this), document.getElementById('step_amount').value || 100)
      document.getElementById('play_btn').innerHTML = 'Pause'
    }
  },

  clear: function () {
    this.forEachCell(function(cell) {
      cell.className = "dead";
      cell.setAttribute('data-status', 'dead');
    })
  },

  randomize: function () {
    this.forEachCell(function (cell, x, y) {
      var state = Math.floor(Math.random() * 2)
      if (state === 1) {
        cell.className = "dead"
        cell.setAttribute('data-status', 'dead');
      } else {
        cell.className = 'alive'
        cell.setAttribute('data-status', 'alive');
      }
    })

  }
};
var FileReader = new FileReader()
document.getElementById('step_btn').addEventListener('click', gameOfLife.step.bind(gameOfLife))
document.getElementById('clear_btn').addEventListener('click', gameOfLife.clear.bind(gameOfLife))
document.getElementById('play_btn').addEventListener('click', gameOfLife.enableAutoPlay.bind(gameOfLife))
document.getElementById('reset_btn').addEventListener('click', gameOfLife.randomize.bind(gameOfLife))
document.getElementById('submit_file').addEventListener('click', function() {
  debugger;
  var file = document.getElementById('input').files[0],
      content = FileReader.readAsText(file)
  while (FileReader.readyState !== 2) {
    console.log(FileReader.readyState)
  }
  console.log(content.result)
})

gameOfLife.createAndShowBoard();

function Cell (cell, x, y, status, deadCount, aliveCount) {
  this.cell = cell
  this.x = x
  this.y = y
  this.status = status
  this.deadCount = deadCount
  this.aliveCount = aliveCount
}
