import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const Home = (props) => {
  console.log('Render Home')
  console.dir(props)

  return (
    <div className="home">
      <div className="header"><h1>Flashcards - Home</h1></div>

      <div className="break"></div>

      <main className="main sub-header limited-width-container">
        <Link to="/decks" className="button deck-selector-link">Select from all decks</Link>

        <div className="sub-header recent-decks-header"><h2>Recently viewed decks...</h2></div>
        <div className="recent-decks grid grid-2">
          { Object.keys(props.decks).map((deckName, index) => {
              if (index > 4) return ''
              return (
                <Link key={index} to={`/decks/${deckName}`} className="button">{deckName}</Link>
              )
            })
          }
          <Link to="/decks" className="button">...</Link>
        </div>
      </main>
    </div>
  )
}

Home.propTypes = {
  decks: PropTypes.object.isRequired
}

export default Home