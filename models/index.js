const mongoose = require('mongoose')

const dbName = 'jawbServer'
const uri = 'mongodb://localhost/' + dbName
mongoose.connect(uri)

const db = mongoose.connection
db.once('open', () => console.log(`mongo is connected on ${db.host}:${db.port}`) )
db.on('error', err => console.log('the data center has exploded:', err)) 

module.exports = {
    Jawb: require('./Jawb')
}