import * as React from 'react'
import { UIContext } from './UIProvider'

const useUIComponents = () => {
  const { layouts } = React.useContext(UIContext)

  return layouts
}

export default useUIComponents
