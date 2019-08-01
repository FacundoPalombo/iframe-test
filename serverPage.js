const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')

const PORT = process.env.PORT || 5500;

app.use(process.env.NODE_ENV !== "production" ? morgan('dev') : morgan('combined'))

app.use(express.static('public'))
app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, './public/src/index.html'))
})
app.listen(PORT, () => {
  console.log(`Server listening on http://127.0.0.1:${PORT}/`)
})