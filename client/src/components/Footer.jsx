import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  footer: {
    width: '100%',
    height: '50px',
    background: '#424242',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 7px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
}

function Test(props) {
  const { classes } = props

  return <div className={classes.footer}>DevOps Console 2020 ©</div>
}

export default withStyles(styles)(Test)
