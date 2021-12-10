import * as React from 'react'
import { Route } from 'react-router'
import { useUIComponents } from '@create-react-resume/core'
import homeData from './home-data'

const HomeRoute = () => {
  const { HomePage } = useUIComponents()

  return <Route path="/" exact component={() => <HomePage {...homeData} />} />
}

export default HomeRoute
