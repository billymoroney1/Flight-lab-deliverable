const dbConfig = require('./config/db.config')


const db = require("./models");
const Flight = require('./models/flight.model');
const Airport = db.airport;

const Passenger = db.Passenger;

// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const airport = new Airport({
	name: "First Airport",
	country: "US",
	opened: "2020-12-15"
})

const flightOne = new Flight({
  from: "CDG France",
  to: "JFK New York",
  airline: "American Airlines"
})

const flightTwo = new Flight({
  from: "Heathrow UK",
  to: "JFK New York",
  airline: "British Airways"
})

const airportTwo = new Airport({
  name: "JFK",
  country: "USA",
  opened: "1990-11-29"
})

airport.terminals.push({name: "Terminal 1", flights: [flightOne, flightTwo], capacity: 234324})

airport.save()
console.log("Airport saved", airport)
console.log(airport.terminals[0].flights)
console.log(airportTwo)
// Lets Make and Save our first airport