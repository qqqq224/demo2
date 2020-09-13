/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ReactDOM } from 'react-dom'

ReactDOM.render(
  <div
    css={{
      backgroundColor: 'hotpink',
      '&:hover': {
        color: 'lightgreen'
      }
    }}
  >
    This has a hotpink background.
  </div>
)

