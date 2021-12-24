import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Card from './Card'

class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardFrontShowing: true,
      currentCardIndex: 0,
      keysArray: Object.keys(props.deck),
      ...props
    }
  }

  static propTypes = {
    deckName: PropTypes.string.isRequired,
    deck: PropTypes.object.isRequired
  }

  showPreviousCard = () => {
    console.log('showPrevious clicked with this.state.currentCardIndex: ',this.state.currentCardIndex)

    if (this.state.currentCardIndex <= 0) return
    this.setState({
      currentCardIndex: this.state.currentCardIndex - 1,
      cardFrontShowing: true 
    })
  }

  showNextCard = () => {
    console.log('showNext clicked with this.state.currentCardIndex: ',this.state.currentCardIndex)

    if (this.state.currentCardIndex >= this.state.keysArray.length - 1) return
      this.setState({ 
      currentCardIndex: this.state.currentCardIndex + 1,
      cardFrontShowing: true
    })
  }

  flipCard = () => {
    console.log('flipCard clicked')

    this.setState({
      cardFrontShowing: !this.state.cardFrontShowing
    })
  }

  // Keyboard shortcuts
  onKeyDown = (e) => {
    switch (e.code) {
      case 'ArrowRight' :
      this.showNextCard()
      break
      case 'ArrowLeft' :
      this.showPreviousCard()
      break
      case 'KeyF' :
      this.flipCard()
      break
      case 'Space' :
      this.flipCard()
      break
      default : 
      console.log('keyDown pressed:',e.code)
    }
  }

  // Event listener for keyboard shortcuts
  componentWillMount = () => {
    document.addEventListener("keydown", this.onKeyDown)
  }

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.onKeyDown)
  }

  render() {
    console.log('Rendering Review')
    console.dir(this.props)
  
    return (
      <div className="review">
        <div className="header">
          <h1>
            <Link to={`/decks/${this.props.deckName}`}>{ this.props.deckName.charAt(0).toUpperCase()+this.props.deckName.slice(1) }</Link>
            <Link to={`/decks/${this.props.deckName}/review`}> - Review</Link>
           </h1>
        </div>
        
        <div className="grid grid-3 review-container card-container limited-width-container">
          <img 
            alt="Previous Card"
            className="controls controls-div controls-prev prev"
            style={ { transform: 'rotate(180deg)' } }
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACTSURBVGhD7dmxDYQwEERRJ3RAIVQIVEVCEfRDArOBM8sissbmP2miS7zSv4gEAL8za4d2VrZoXdi0p7JLmzR78ch4bOmIvDi2C5HPrZWOiMVvJNYaibkiMUck5ojEXJGYIxJzRGKOhjjkS1q7Zm/VSo/P6+LPTlJOSMoFSTkhKSck5YKknJCUkyGSGupjKAC0kNILaew3BgvattYAAAAASUVORK5CYII=" 
            onClick={this.showPreviousCard} 
          /> 

          <Card 
            frontShowing={this.state.cardFrontShowing} 
            front={Object.keys(this.props.deck)[this.state.currentCardIndex]}
            back={this.props.deck[Object.keys(this.props.deck)[this.state.currentCardIndex]]}
            flipCard={this.flipCard}
          />

          <img 
            alt="Next Card"
            className="controls controls-div controls-next next"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACTSURBVGhD7dmxDYQwEERRJ3RAIVQIVEVCEfRDArOBM8sissbmP2miS7zSv4gEAL8za4d2VrZoXdi0p7JLmzR78ch4bOmIvDi2C5HPrZWOiMVvJNYaibkiMUck5ojEXJGYIxJzRGKOhjjkS1q7Zm/VSo/P6+LPTlJOSMoFSTkhKSck5YKknJCUkyGSGupjKAC0kNILaew3BgvattYAAAAASUVORK5CYII=" 
            onClick={this.showNextCard} 
          />
        </div>

        <div className="grid sub-header keyboard-shortcuts">
          <h2>Keyboard Shortcuts</h2>
          <small>f/space : flip</small>
          <small>&#8592; : previous card</small>
          <small>&#8594; : next card</small>          
        </div>
      </div>
    ) 
  }
}

export default Review