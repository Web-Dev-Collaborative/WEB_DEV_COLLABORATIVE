import React from 'react'
import { Switch, Route, NavLink, withRouter } from 'react-router-dom'
import _ from 'lodash'

import { Helmet } from "react-helmet"

import Create from './routes/Create'
import Decks from './routes/Decks'
import Home from './routes/Home'
import NotFound from './routes/NotFound'
import DeckHome from './components/DeckHome'

import savedDecks from './decks'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      currentDeckName: '',
      stats: {},
      ...props
    }
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this)
  }

  // add a deck of supplied deckName to the decks in state
  addDeck = (deckName, optionalDescription) => {
    console.log('App -> addDeck. Deck: '+deckName+' with optionalDescription: '+optionalDescription)
    this.setState({
      // start with a single default new card
      decks: {...this.state.decks, [deckName]: {'New Card Front': 'New Card Back'}},
    })
    console.log('App -> addDeck after adding deck to state. this.state:')
    console.dir(this.state)

    // Redirect to EditDeck component, passing inputs as props
    console.log('App -> addDeck. Deck add complete. Redirecting to /decks/'+deckName+'/edit')
    this.props.history.push(`/decks/${deckName}/edit`)
  }

  addNewCard = () => {
    console.log('App -> addNewCard. ')
    console.log('Adding blank card to app.state.currentDeckName = '+this.state.currentDeckName)

    // Create a copy of the current deck of cards, plus one new card
    const deckWithNewBlankCard = {
      [this.state.currentDeckName]: {...this.state.decks[this.state.currentDeckName], "New Card Front": "New Card Back"}
    }
    console.log('deckWithNewBlankCard created: ')
    console.dir(deckWithNewBlankCard)

    // Use Lodash to deep merge the new deck with the decks object
    // replacing the old deck of the same name with the new deck including the blank new card
    const merged = _.merge(this.state.decks, deckWithNewBlankCard)
    console.log('Merging complete. New state before being set/saved:')
    console.dir(merged)

    // Set the state using the new all decks object
    this.setState({
      decks: merged
    })
    console.log('Add New Card complete.')
  }

  updateDeck = (deckName, deck) => {
    console.log('Update deck start')
    // Copy the current deck state less the deckName provided
    let tmpDecks = _.pickBy(this.state.decks, (cards, _deckName) => {
      if (deckName !== _deckName) {
        return _deckName
      }
    })
    console.log('tmpDecks created without '+deckName)
    console.dir(tmpDecks)
    // Add the updated deck to the temporary decks object
    tmpDecks = {...tmpDecks, [deckName]: deck}

    console.log('tmpDecks updated with the updated '+deckName)
    console.dir(tmpDecks)

    this.setState({
      decks: tmpDecks
    })
    console.log('after setState this.state.decks: ')
    console.dir(this.state.decks)

    console.log('after setState, tmpDecks: ')
    console.dir(tmpDecks)

    console.log('UpdateDeck complete')
  }

  // Delete deck confirmation is handled by the button that passes the 
  // command up the prop chain to this App class which controls the state
  deleteDeck = (deckName) => {
    console.log('deleteDeck named: ',deckName)
    // remove the deck from state
    this.setState({
      // filter and only return decks that do not match the provided deckName
      decks: _.pickBy(this.state.decks, (cards, deck) => {
        if (deck !== deckName) {
          return deck
        }
      })
    })
  }

  // Save deck state to localStorage
  saveToLocalStorage = () => {
    console.log('Saving decks to local storage')
    localStorage.setItem('usarneme_flashy', JSON.stringify(this.state))
  }
  
  // Load the default decks provided with the application
  // @param ignoreLocalStorage : boolean if localStorage should be checked or not
  loadDefaultDecks = (ignoreLocalStorage) => {
    console.log('loading default decks')
    this.setState({ isLoading: true })

    if (ignoreLocalStorage === undefined) {
      console.log('ignoreLocalStorage passed as undefined, setting to false (do not ignore/ie check localStorage)')
      ignoreLocalStorage = false
    }

    // Restore flashcard set from localStorage if available
    const localStorageRef = localStorage.getItem('usarneme_flashy')

    // Ensure it's not just passing an empty object {}
    if (!ignoreLocalStorage && localStorageRef && _.isEmpty(localStorageRef) !== true) {
      console.log('Local storage loaded.')
      console.dir(JSON.parse(localStorageRef))

      const decks = JSON.parse(localStorageRef).decks
      const stats = JSON.parse(localStorageRef).stats

      this.setState({
        decks,
        stats,
        isLoading: false
      })
      return
    }
    console.log('localstorage unavailable. loading saved decks')
    try {
      this.setState({
        // savedDecks are the loaded import from decks.js file
        decks: savedDecks,
        isLoading: false
      })
    } catch (error) {
      console.error(error)
      this.setState({
        error,
        isLoading: false
      })
    }
  }

  setCurrentDeckNameTo = (deckName) => {
    if (!deckName || deckName.length === 0 || deckName === undefined || deckName === null) return
    this.setState({
      currentDeckName: deckName
    })
  }

  componentDidMount() {
    console.log('App.js -> CDM.')
    this.loadDefaultDecks()
    console.log('App.js -> CDM end')
  }

  render() {
    console.log('Rendering App.js')
    console.dir(this)

    // don't render while state is being loaded via componentDidMount
    if (this.state.isLoading) return ''

    // After loading... save deck state to localStorage
    this.saveToLocalStorage()
 
    return (
      <div>
        <Helmet>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#bb22bb" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#bb22bb" />
        </Helmet>
        <Switch>
          <Route exact path="/" render={() => <Home decks={this.state.decks} />} />
          <Route exact path="/decks" render={() => <Decks decks={this.state.decks} loadDefaultDecks={this.loadDefaultDecks} />} />
          <Route path="/decks/:deckName" render={() => 
            <DeckHome 
              decks={this.state.decks} 
              saveToLocalStorage={this.saveToLocalStorage}
              addNewCard={this.addNewCard}
              deleteCard={this.deleteCard} 
              deleteDeck={this.deleteDeck} 
              updateDeck={this.updateDeck}
              currentDeckName={this.state.currentDeckName}
              setCurrentDeckNameTo={this.setCurrentDeckNameTo}
            />} 
          />
          <Route path="/create" render={() => 
            <Create 
              addDeck={this.addDeck}
              deleteDeck={this.deleteDeck} 
              saveToLocalStorage={this.saveToLocalStorage} 
              decks={this.state.decks}
            />}
          />
          <Route component={NotFound} />
        </Switch>

        <div className="break"></div>

        <nav className="nav footer">
          <NavLink className="nav-link" exact activeClassName="active-nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" activeClassName="active-nav-link" to="/decks">Decks</NavLink>
          <NavLink className="nav-link" activeClassName="active-nav-link" to="/create">Create</NavLink>
        </nav>
      </div>
    )  
  }
}

// withRoute HOC allows access to the route data in this.props. Utilized in:
  // deleteDeck function for redirecting after deleting a deck (no sense in rendering EditDeck with no deck selected)
export default withRouter(App)