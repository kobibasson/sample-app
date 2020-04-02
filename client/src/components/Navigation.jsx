import React from 'react'
import { WithWizard } from 'react-albus'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = {
  container: {
    height: '100%',
  },
  menuWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
    color: '#ffffff',
  },
  root: {
    margin: '10px 0',
    color: '#ffffff !important',
  },
}

function Navigation(props) {
  const { classes } = props

  return (
    <WithWizard
      render={({ next, previous, step, steps }) => (
        <div className="example-buttons">
          {steps.indexOf(step) < steps.length - 1 && (
            <Button
              variant="outlined"
              onClick={next}
              classes={{
                root: classes.button,
              }}
            >
              Next
            </Button>
          )}

          {steps.indexOf(step) > 0 && (
            <Button
              variant="outlined"
              onClick={previous}
              classes={{
                root: classes.button,
              }}
            >
              {' '}
              Back
            </Button>
          )}
        </div>
      )}
    />
  )
}

export default withStyles(styles)(Navigation)
