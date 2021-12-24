import * as React from 'react'
import { format, differenceInYears, differenceInMonths } from 'date-fns'
import { H5 } from '../../elements'
interface Props {
  start: Date
  end: Date
  current?: boolean
}

const Duration: React.FC<Props> = props => {
  const { start, end, current } = props
  const years = differenceInYears(end, start)
  const months = differenceInMonths(end, start) % 12
  return (
    <H5>
      {format(start, 'MMMM YYYY')} - {current ? 'now ' : format(end, 'MMMM YYYY ')}
      <i>
        ( {years > 0 && `${years} yr`} {months > 0 && `${months} mo`} )
      </i>
    </H5>
  )
}
export default Duration
