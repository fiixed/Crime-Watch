const spotcrime = require('spotcrime');
 
// somewhere near phoenix, az
const loc = {
  lat: 33.812500,
  lon: -84.424940
};
 
const radius = 5; // this is miles
 
// using callbacks
spotcrime.getCrimes(loc, radius).then((crimes) => {
 console.log(crimes);
});
 
//http://api.spotcrime.com/crimes.json?lat=33.812500&lon=-84.424940&radius=5&key=This-api-key-is-for-commercial-use-exclusively.Only-entities-with-a-Spotcrime-contract-May-use-this-key.Call-877.410.1607.
