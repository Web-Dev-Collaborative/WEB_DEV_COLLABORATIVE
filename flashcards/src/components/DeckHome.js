import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import Review from './Review'
import Quiz from './Quiz'
import EditDeck from './EditDeck'

class DeckHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      currentDeckCards: {},
      currentDeckName: '',
      keysArray: []
    }
  }

  static propTypes = {
    decks: PropTypes.object.isRequired,
    currentDeckName: PropTypes.string,
    addNewCard: PropTypes.func.isRequired,
    saveToLocalStorage: PropTypes.func.isRequired,
    deleteDeck: PropTypes.func.isRequired,
    updateDeck: PropTypes.func.isRequired
  }

  // need to load the URL params before setting state and rendering Links/Routes
  componentDidMount() {
    let url = this.props.match.url.trim()
    // Remove a trailing slash eg: /decks/spanish/ -> /decks/spanish
    if (url[url.length-1] === '/') { url = url.substring(0, this.props.match.url.length-1) }
    console.log('DeckHome -> CDM with url',url)

    const lastSlashIndex = url.lastIndexOf('/')+1
    const deckNameLength = url.length

    // pull the deck name out of the url
    const currentDeckName = url.substring(lastSlashIndex, deckNameLength)
    const currentDeckCards = this.props.decks[currentDeckName]

    // keys array makes it easier to prevent going below 0 or beyond the final card in the deck
    const keysArray = Object.keys(currentDeckCards)

    console.log('currentDeckName: '+currentDeckName+'.\tkeysArray: '+keysArray)

    this.setState({ 
      isLoading: false,
      currentDeckName, 
      currentDeckCards,
      keysArray
    })

    // Set the application state's current deck name
    this.props.setCurrentDeckNameTo(currentDeckName)
  }

  render() {
    console.log('Rendering DeckHome')
    console.dir(this.props)

    // Don't render while loading the component, props, and URL params
    if (this.state.isLoading) return ''
  
    return (
      <div className="deck-home">
        <div className="header">
          {/* Capitalize the first letter in the displayed deck name */}
          <Link to={`${this.props.match.url}`}><h1>{ this.props.currentDeckName.charAt(0).toUpperCase()+this.props.currentDeckName.slice(1) }</h1></Link>
        </div>

        <div className="break"></div>

        <Route 
          exact path={`${this.props.match.url}/`} 
          render={() => {
            return (
              <div className="limited-width-container">
                <div className="grid grid-3 top-nav">
                  <NavLink to={`${this.props.match.url}/review`} className="button" activeClassName="active-nav-link-sub">Review</NavLink>
                  <NavLink to={`${this.props.match.url}/quiz`} className="button" activeClassName="active-nav-link-sub">Quiz</NavLink>
                  <NavLink to={`${this.props.match.url}/edit`} className="button" activeClassName="active-nav-link-sub">Edit</NavLink>
                </div>

                <div className="sub-header">
                  <h2>Cards...</h2>
                </div>
                
                { Object.keys(this.state.currentDeckCards).map((card, index) => {
                  return (
                    <div className="grid grid-2 card-holder" key={index} >
                      <strong>{card}</strong>
                      <div><p>{this.state.currentDeckCards[card]}</p></div>
                    </div>
                    )
                  })
                }
              </div>
            )
          }}
        />
        <Route 
          exact 
          path={`${this.props.match.url}/review`} 
          render={() => <Review deckName={this.props.currentDeckName} deck={this.state.currentDeckCards} />} 
        />

        <Route 
          path={`${this.props.match.url}/quiz`} 
          render={() => <Quiz deckName={this.props.currentDeckName} deck={this.state.currentDeckCards} />} 
        />

        <Route 
          exact 
          path={`${this.props.match.url}/edit`} 
          render={() => 
            <EditDeck 
              deckName={this.props.currentDeckName} 
              deck={this.props.decks[this.props.currentDeckName]}
              addNewCard={this.props.addNewCard}
              saveToLocalStorage={this.props.saveToLocalStorage} 
              deleteDeck={this.props.deleteDeck} 
              updateDeck={this.props.updateDeck}
            />} 
        />

      </div>
    )
  }
}

export default withRouter(DeckHome)