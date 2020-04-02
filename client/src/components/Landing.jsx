import React from 'react'
import { Route, Switch } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import { Redirect } from 'react-router-dom'
import Setup from './Setup'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'

const styles = {
  landing: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}

function Landing(props) {
  const { classes } = props
  return (
    <div className={classes.landing}>
      <Navbar />
      <Switch>
        <Route exact path="/setup" component={Setup} />
        <Route exact path="/" component={Home} />
        <Route path="/" render={() => <Redirect to="/" />} />
      </Switch>
      <Footer />
    </div>
  )
}

export default withStyles(styles)(Landing)
