import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
  },
})

function Navbar(props) {
  const { classes } = props
  return (
    <div className={classes.container}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            DevOps Console
          </Typography>
          <Link to="/setup" className={classes.link}>
            <Button className={classes.text} color="#ffffff">
              Setup
            </Button>
          </Link>
          <Link to="/" className={classes.link}>
            <Button color="#ffffff">Home</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Navbar)
