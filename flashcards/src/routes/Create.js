import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

// Refs for uncontrolled dekc name and description form inputs, and a modal popup to validate the form
const deckNameRef = React.createRef()
const errorModalRef = React.createRef()

class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
  }

  static propTypes = {
    decks: PropTypes.object.isRequired,
    addDeck: PropTypes.func.isRequired
  }

  render() {
    console.log('Rendering Create')
    console.dir(this.props.decks)

    // Validate a deck name is provided (not blank) and that it is not a duplicate deck name
    const validateAndSubmit = (e) => {
      console.log('validateAndSubmit start')
      e.stopPropagation()
      e.preventDefault()

      // Validate inputs
      console.log('Validating deck named: ',deckNameRef.current.value)
      if (!deckNameRef.current.value) {
        // Show the modal window by changing class from hidden to showing
        errorModalRef.current.className = 'modal errorModal showing'
        // Set a timeout for 2.5 seconds, after which the modal is hidden again
        setTimeout(function() {
          errorModalRef.current.className = 'modal errorModal hidden'
        },2500)
        return
      }
      // Remove whitespace and replace with underscore to prevent URL encoding %20
      const deckName = deckNameRef.current.value.trim().split(' ').join('_')
      let description = ''

      console.log('Validation complete. Adding deck to state.')
      // Add the deckName to the decks in the application's state
      this.props.addDeck(deckName, description)
    }
    
    return (
      <div className="create">
        <div className="header"><h1>Flashcards</h1></div>

        <div className="break"></div>

        <div className="main limited-width-container">
          <div className="sub-header">
            <h2>Create a New Deck</h2>
          </div>

          <form className="grid" onSubmit={validateAndSubmit}>
            <input ref={deckNameRef} placeholder='Name:' />
            <input className="button" type="submit" value="Create Deck" />
          </form>
        </div>

        <div 
          className="modal errorModal hidden" 
          ref={errorModalRef} 
          onClick={() =>  errorModalRef.current.className = 'modal errorModal hidden'}>
          <h3 className="sub-header">Please enter a valid deck name</h3>
        </div>

      </div>
    )
  }
}

// withRouter HOC used to allow pushing a redirect to the history prop after the new deck is named and the form submitted
export default withRouter(Create)