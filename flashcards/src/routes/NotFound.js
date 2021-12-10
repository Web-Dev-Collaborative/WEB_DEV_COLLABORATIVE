import React from 'react'

import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="main">
      <div className="header"><h1>Not Found</h1></div>
      <div className="break"></div>
      <div className="main sub-header limited-width-container">
        <h2>Page Not Found</h2>
        <div className="grid">
          <Link className="button" to="/">Return to Flashy</Link>
        </div>        
      </div>
    </div>
  )
}

export default NotFound