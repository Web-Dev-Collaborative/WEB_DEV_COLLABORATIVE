import * as React from 'react'
import { UIContext, UIContextComponents } from './UIProvider'

interface Props extends UIContextComponents {}

const UITemplate: React.FC<Props> = props => {
  const { children, ...uiTemplate } = props
  return <UIContext.Provider value={uiTemplate}>{children}</UIContext.Provider>
}

export default UITemplate
