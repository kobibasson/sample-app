const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use('/api/route', bodyParser.urlencoded({ extended: false }))
app.use('/api/route', bodyParser.json())

app.use('/api/route', require('./routes/api/route'))

app.get('/', async (req, res, err) => {
    return res.send('OK')
  })

const port = process.env.API_PORT || 80
app.listen(port, () => console.log(`App listening on ${port}`))
