import React from 'react'
import PropTypes from 'prop-types'

const QuizProgress = (props) => {
  const leftFR = props.totalNumbers - props.currentNumber + 1
  const rightFR = props.totalNumbers - leftFR + 1

  const containerStyle = {
    gridTemplateColumns: `${leftFR}fr ${rightFR}fr`,
    border: '1px solid red',
    height: '4px'
  }

  return props.currentNumber <= 0 ? '' : (
    <div className="grid quiz-progress-container" style={containerStyle}>
      <span className="quiz-progress-completed"></span>
      <span className="quiz-progress-remaining"></span>
    </div>
  )
}

QuizProgress.propTypes = {
  currentNumber: PropTypes.number.isRequired,
  totalNumbers: PropTypes.number.isRequired
}

export default QuizProgress