const express = require('express')
const router = express()

router.post('/', async (req, res, err) => {
  let { number } = req.body
  number *= 2 
  return res.send(`[${os. hostname()}] New number is ${number}`)
})
module.exports = router
