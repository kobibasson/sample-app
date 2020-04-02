import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'
import Landing from './components/Landing'
import theme from './lib/theme'

function App(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Landing />
      </Router>
    </MuiThemeProvider>
  )
}

export default App
