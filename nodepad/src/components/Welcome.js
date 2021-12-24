import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Welcome(props) {
  const [textShowing, toggleTextShowing] = useState(true)
  console.dir(props)

  return (
    <div>
      <section>
        <header>
          <h1>Welcome!</h1>
          <button className="btn" onClick={() => toggleTextShowing(!textShowing)}>{textShowing ? "Hide" : "Show"}</button>
          {textShowing && <p>Explanatory text TODO</p>}
        </header>
      </section>
      <section>
        <form onSubmit={e => props.createRoot(e, props.history)}>
          <input
            type="text"
            name="nodeValue"
            onChange={e => props.edit(e.target.value)} 
            placeholder="Write something to start..." 
          />
          <button className="btn" type="submit">Start</button>
          <p><small>Note this will be the root of your Tree and is the only thing you cannot change once it is set!</small></p>
        </form>
      </section>
    </div>
  )
}

Welcome.propTypes = {
  createRoot: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default Welcome