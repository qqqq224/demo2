import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
/** @jsx jsx */
import { jsx } from '@emotion/core'


ReactDOM.render(
  <div
    css={{
      backgroundColor: 'pink',
      '&:hover': {
        color: 'lightgreen'
      }
    }}
  >
    This has a hotpink background.
  </div>,
document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
