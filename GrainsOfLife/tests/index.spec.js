const should = require('chai').should();


xdescribe("Grains of Life", function(){
  describe("Grid", function () {
    describe("Game Logic", function () {
      //Game of Life Rules: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules
      it("follows game of life rules")
    })
    describe("Node", function () {
      describe("State", function () {
        it("can be 'alive' or 'dead'")
        it("is 'dead' by default")
      })
      describe("Wave", function () {
        it("outputs when Node is alive")
        it("does not output when Node is dead")
        it("is function of coordinates")
        it("frequency is controlled by x coords by default")
        it("amplitude (volume) is controlled by y coords by default")
        it("has a different form for every node")
        it("outputs to a processor chain")
      })
      describe("Click", function () {
        it("toggles between 'alive' and 'dead'")
        it("plays a short tone")
      })
    })
    describe("Play Button", function () {
      it("plays the sounds continuously")
      it("iterates the game state")
      it("changes to pause button when running")
      describe("Pause Button", function () {
        it("pauses both playback and game play")
      })
    })
    describe("Save Button", function () {
      it("creates a persistent route the the current grid state")
      it("gives some sort of visual feedback")
    })
    describe("UI Controller", function () {
      it("controls width")
      it("controls height")
      it("controls wave function")
      it("controls the playback speed")
    })
    describe("Audio Output", function () {
      it("uses web audio api")
      it("combines the sounds of all nodes")
    })
  })
  // wish list is for features that would be cool but aren't for the first round
  describe("Wish List", function () {
    it("is multiplayer")
    it("could have other custom 'alive' states (not by default)")
    it("can sample an mp3")
  })
})
