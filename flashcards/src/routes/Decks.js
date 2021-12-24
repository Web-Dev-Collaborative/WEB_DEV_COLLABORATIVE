import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const Decks = (props) => (
  <div className="select">
    <div className="header"><h1>Decks</h1></div>

    <div className="break"></div>

    <main className="main sub-header limited-width-container">
      <div className="search">
        {/* <input type="text" placeholder="search"></input> */}
      </div>

      <div className="sub-header"><h2>Flashcard decks...</h2></div>
      <div className="grid grid-2">
        { Object.keys(props.decks).map((deckName, index) => <Link key={index} to={`/decks/${deckName}`} className="button" >{deckName}</Link> )}
      </div>
      <button className="button load-default-decks-button hidden" onClick={() => props.loadDefaultDecks(true)}>Load Default Decks</button>
    </main>
  </div>
)

Decks.propTypes = {
  decks: PropTypes.object.isRequired,
  loadDefaultDecks: PropTypes.func
}

export default Decks