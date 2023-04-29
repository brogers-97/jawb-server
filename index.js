const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 8000
require('./models')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'welcome to the jawbs API! 😎'})
})

app.use('/jawbs', require('./controllers/jawbs.js'))

app.listen(PORT, console.log(`server connected ${PORT}`))