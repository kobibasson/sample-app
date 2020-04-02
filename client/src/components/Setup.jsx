import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { render } from 'react-dom'
import { Wizard, Steps, Step } from 'react-albus'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Navigation from './Navigation.jsx'
import axios from 'axios'

const styles = {
  container: {
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

function Setup(props) {
  const { classes } = props
  const [message, setMessage] = useState()
  const [formData, setFormData] = useState({
    server_ip: '18.185.117.33',
    project: 'alpine',
    image: 'interactbot/alpine',
    compose_name: 'alpine',
    tag: '1.0.12',
  })
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  const submitForm = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const body = formData
      const {
        data: { msg },
      } = await axios.post('/api/route', body, config)
    } catch (error) {
      setMessage(error)
    }
  }

  return (
    <div className={classes.container}>
      <Wizard>
        <Steps>
          <Step id="JENKINS">
            <TextField
              id="server_ip"
              label="SERVER_IP"
              variant="outlined"
              value="18.185.117.33"
              classes={{
                root: classes.root,
              }}
            />
            <TextField
              id="project"
              label="PROJECT"
              variant="outlined"
              value="alpine"
              classes={{
                root: classes.root,
              }}
            />
            <TextField
              id="image"
              label="IMAGE"
              variant="outlined"
              value="interactbot/alpine"
              classes={{
                root: classes.root,
              }}
            />
            <TextField
              id="tag"
              label="TAG"
              variant="outlined"
              value="1.0.12"
              classes={{
                root: classes.root,
              }}
            />
            <TextField
              id="compose_name"
              label="COMPOSE_NAME"
              variant="outlined"
              value="alpine"
              onChange={(e) => onChange(e)}
              classes={{
                root: classes.root,
              }}
            />
          </Step>
        </Steps>
        <Navigation />
        <Button
          variant="outlined"
          onClick={submitForm}
          classes={{
            root: classes.button,
          }}
        >
          DEPLOY
        </Button>
      </Wizard>
    </div>
  )
}

export default withStyles(styles)(Setup)
