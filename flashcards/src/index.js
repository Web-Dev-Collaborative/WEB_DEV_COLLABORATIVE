import React from 'react'
import ReactDOM from 'react-dom'

// https://docs.sentry.io/platforms/javascript/react/
// import * as Sentry from '@sentry/browser'

import { BrowserRouter } from 'react-router-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'

// const RELEASE = '0.1.0'
// if (process.env.NODE_ENV === 'production') {
//   Sentry.init({
//     dsn: 'https://303c04eac89844b5bfc908ceffc6757c@sentry.io/1289887',
//     release: RELEASE
//   })
// }

ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
