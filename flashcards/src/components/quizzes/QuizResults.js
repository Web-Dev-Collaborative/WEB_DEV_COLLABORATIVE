import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

class QuizResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      easyKeys: [],
      easyTotal: 0,
      mediumKeys: [],
      mediumTotal: 0,
      difficultKeys: [],
      difficultTotal: 0,
      correctMatches: [],
      incorrectMatches: [],
      correctAnswersArray: props.correctAnswersArray || [],
      inputAnswersArray: props.inputAnswersArray || []
    }
  }

  static propTypes = {
    deckName: PropTypes.string.isRequired,
    deck: PropTypes.object.isRequired,
    // Quiz type Self Survey submits 3 bucket objects of varying difficulty each containing cards
    easyBucket: PropTypes.object,
    mediumBucket: PropTypes.object,
    difficultBucket: PropTypes.object,
    // Quiz types Match and Write-In submit two arrays: correct answers and user-input answers
    correctAnswersArray: PropTypes.array,
    inputAnswersArray: PropTypes.array
  }

  componentDidMount() {
    console.log('QuizResults -> CDM. Preparing initial state.')
    // Prepare stats object to be stored to state
    const easyKeys = Object.keys(this.props.easyBucket || {})
    const easyTotal = easyKeys.length
    const mediumKeys = Object.keys(this.props.mediumBucket || {})
    const mediumTotal = mediumKeys.length
    const difficultKeys = Object.keys(this.props.difficultBucket || {})
    const difficultTotal = difficultKeys.length

    // Timestamp
    const date = new Date()
    const ymd = date.getFullYear() +'_'+ date.getMonth() +'_'+ date.getDate()
    const unique = new Date().getTime().toString().substring(0,10)
    console.log('Quiz Results -> Date created ('+date+') with ymd: '+ymd+'. And unique string: '+unique)

    // Filtering into incorrect and correct arrays from the provided answers 
    // by comparing input and correct answers arrays
    const incorrectMatches = []
    let correctMatches = []
    if (this.props.inputAnswersArray) {
      correctMatches = this.props.inputAnswersArray.filter((str, idx) => {
        console.log('Testing input "'+str+'" against correct "'+this.props.correctAnswersArray[idx]+'"')
        if (str === this.props.correctAnswersArray[idx]) return str
        console.log('Not matching')
        return incorrectMatches.push(str)
      })
    }

    this.setState({
      easyKeys,
      easyTotal,
      mediumKeys,
      mediumTotal,
      difficultKeys,
      difficultTotal,
      correctMatches,
      incorrectMatches
    })
  }

  render() {
    console.log('QuizResults -> Render. With Props:')
    console.dir(this.props)
    console.log('and state:')
    console.dir(this.state)

    return (
      <div>
        <div className="header">
          <h1>
              <Link to={`/decks/${this.props.deckName}`}>{ this.props.deckName.charAt(0).toUpperCase()+this.props.deckName.slice(1) }</Link>
              <Link to={`/decks/${this.props.deckName}/quiz`}> - Quiz </Link>
              - Results
            </h1>
        </div>
        { /* If self survey, display the self survey results
            Otherwise display the write-in or match results */
          (this.state.easyTotal + this.state.mediumTotal + this.state.difficultTotal) > 0 ? 
          <div className="grid limited-width-container">
            <details className="easy-results">
              <summary>Easy: {this.state.easyTotal} ({ ((this.state.easyTotal/(this.state.easyTotal + this.state.mediumTotal + this.state.difficultTotal))*100).toFixed(2) + '%'})</summary>
              <div>
                { this.state.easyTotal > 0 ? 
                  this.state.easyKeys.map((card, index) => {
                    return (
                      <details className="grid grid-2 card-holder results-card" key={index} >
                        <summary>{card}</summary>
                        <p>{this.props.easyBucket[card]}</p>
                      </details>
                    )
                  }) 
                  : '' }
              </div>
            </details>
            <details className="medium-results">
              <summary>Medium: {this.state.mediumTotal} ({ ((this.state.easyTotal/(this.state.mediumTotal + this.state.mediumTotal + this.state.difficultTotal))*100).toFixed(2) + '%'})</summary>
              <div>
                { this.state.mediumTotal > 0 ? 
                  this.state.mediumKeys.map((card, index) => {
                    return (
                      <details className="grid grid-2 card-holder results-card" key={index} >
                        <summary>{card}</summary>
                        <p>{this.props.mediumBucket[card]}</p>
                      </details>
                    )
                  }) 
                  : '' }
              </div>
            </details>
            <details className="difficult-results">
              <summary>Difficult: {this.state.difficultTotal} ({ ((this.state.difficultTotal/(this.state.easyTotal + this.state.mediumTotal + this.state.difficultTotal))*100).toFixed(2) + '%'})</summary>
              <div>
                { this.state.difficultTotal > 0 ? 
                  this.state.difficultKeys.map((card, index) => {
                    return (
                      <details className="grid grid-2 card-holder results-card" key={index} >
                        <summary>{card}</summary>
                        <p>{this.props.difficultBucket[card]}</p>
                      </details>
                    )
                  }) 
                  : '' }
              </div>
            </details>
          </div>
        : <div className="limited-width-container results-write-in results-match">
          { this.props.inputAnswersArray && this.props.inputAnswersArray.length > 0 ?
              this.props.inputAnswersArray.map((answer, index) => {
              return (
                <div className="grid card-holder results-card-container" key={index}>
                  <div className="grid">
                    <h3>You answered:</h3><p>{answer}</p>
                  </div>
                  <div className="grid">
                    <h3>Correct Answer:</h3> 
                    <p>{this.props.correctAnswersArray[index]}</p>
                  </div>
                </div>
              )
            })
            : '' }
        </div>
        }
      </div>
    )
  }
}

export default QuizResults