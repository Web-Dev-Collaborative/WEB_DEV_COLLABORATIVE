import * as React from 'react'
import { useUIComponents } from '../../UITemplates'

interface Props {
  email?: string
  linkedin?: string
  github?: string
  medium?: string
  twitter?: string
  stackoverflow?: string
}

const Navigation: React.FC<Props> = props => {
  const { children, ...rest } = props
  const { Navigation } = useUIComponents()

  return <Navigation {...rest}>{children}</Navigation>
}

export default Navigation
