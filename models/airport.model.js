const mongoose = require('mongoose')

const TerminalSchema = new mongoose.Schema({
    name: String,
    flights: [{type: mongoose.Schema.Types.ObjectId, ref: 'Flight'}],
    capacity: Number
})


const AirportSchema = new mongoose.Schema({
    name: String,
    country: String,
    terminals: [TerminalSchema],
    opened: Date
})   

module.exports = mongoose.model('Airport', AirportSchema)