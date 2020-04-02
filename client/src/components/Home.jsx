import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import StepWizard from 'react-step-wizard'

const styles = {
  home: {
    height: '100%',
  },
}

function Test(props) {
  const { classes } = props
  return (
    <div className={classes.home}>
      
    </div>
  )
}

export default withStyles(styles)(Test)
