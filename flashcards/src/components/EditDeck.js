import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import _ from 'lodash'

import EditCard from './EditCard'

// Ref to the confirm-delete modal
const deleteDeckModal = React.createRef()
const deleteCardModal = React.createRef()

class EditDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // the selectedCard string = what card is being selected for the edit, save, or delete action
      selectedCard: ''
    }
  }

  static propTypes = {
    deckName: PropTypes.string.isRequired,
    deck: PropTypes.object.isRequired,
    saveToLocalStorage: PropTypes.func.isRequired,
    addNewCard: PropTypes.func.isRequired,
    deleteDeck: PropTypes.func.isRequired,
    updateDeck: PropTypes.func.isRequired
  }  

  // Confirm they want to delete the deck FOOOOOORREEEEVVEEEEERRRR
  deleteDeckCheck = (e) => {
    console.log('deleteDeckCheck clicked',this.props.deckName)
    // Popup asking if they want to confirm, if they click yes, call this.props.deleteDeck(thisDeck)
    deleteDeckModal.current.className = 'modal delete-check showing'
  }

  deleteCardCheck = (cardName) => {
    console.log('EditDeck -> DeleteCardCheck. Card:',cardName)
    this.setState({ selectedCard: cardName })
    deleteCardModal.current.className = 'modal delete-check showing'
  }

  deleteCard = (cardName) => {
    // filter and only return cards that do not match the provided cardName
    const tmpDeck = _.pickBy(this.props.deck, (cardValue, card) => {
      if (card !== cardName) {
        return card
      }
    })
    console.log('EditDeck -> DeleteCard. Deleted '+cardName+' from deck. Updating App state and saving to localStorage.')
    // Update and save deck changes to application state
    this.props.updateDeck(this.props.deckName, tmpDeck)
    // Save changes to storage
    this.props.saveToLocalStorage()
    // Reset the selected card
    this.setState({ selectedCard: '' })
  }

  render() {
    console.log('Rendering Edit')

    console.log('this.props.deck')
    console.dir(this.props.deck)

    return (
      <div className="limited-width-container edit">
        <div className="header">
          <h1>
            <Link to={`/decks/${this.props.deckName}`}>{ this.props.deckName.charAt(0).toUpperCase()+this.props.deckName.slice(1) }</Link>
            <Link to={`/decks/${this.props.deckName}/edit`}> - Edit</Link>
          </h1>
        </div> 

        <div className="containing-div">
          { 
            Object.keys(this.props.deck).map((card, index) => {
              return (
                <EditCard 
                  key={index+'_'+card} 
                  card={card} 
                  deck={this.props.deck} 
                  deckName={this.props.deckName} 
                  deleteCard={this.deleteCard}
                  deleteCardCheck={this.deleteCardCheck}
                  saveToLocalStorage={this.props.saveToLocalStorage}
                  updateDeck={this.props.updateDeck}
                />
              )
            })
          }

        </div>

        <div className="modal delete-check hidden" ref={deleteDeckModal} >
          <h3 className="sub-header">Are you sure you want to delete {this.props.deckName}?</h3>
          <div className="grid limited-width-container">
            <button className="button delete" onClick={() => {
              deleteDeckModal.current.className = 'modal delete-check hidden'
              this.props.deleteDeck(this.props.deckName)
              // Deck deleted. Redirecting to decks route
              console.log('Delete deck complete. Redirecting to /decks')
              this.props.history.push(`/decks`)
            }
            }>Permanently Delete Deck</button>
            <button className="button cancel" onClick={() => {
              deleteDeckModal.current.className = 'modal delete-check hidden'
            }}>Cancel Deletion</button>          
          </div>
        </div>

        <div className="modal delete-check hidden" ref={deleteCardModal} >
          <h3 className="sub-header">Are you sure you want to delete {this.state.selectedCard}?</h3>
          <div className="grid limited-width-container">
            <button className="button delete" onClick={() => {
              deleteCardModal.current.className = 'modal delete-check hidden'
              this.deleteCard(this.state.selectedCard)
            }
            }>Permanently Delete Card</button>
            <button className="button cancel" onClick={() => {
              deleteCardModal.current.className = 'modal delete-check hidden'
              this.setState({ selectedCard: '' })
            }}>Cancel Deletion</button>
          </div>
        </div>

        <div className="break edit-break"></div>

        <div className="grid grid-2 containing-div buttons-div">
          <button onClick={this.props.addNewCard} className="button new-card-button">Add A New Card</button>
          <button className="button delete" onClick={this.deleteDeckCheck}>Delete Deck</button>
        </div>
      </div>
    )
  }
}

export default withRouter(EditDeck)
