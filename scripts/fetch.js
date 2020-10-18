const fetch = require("node-fetch");

async function fetchUsers() {
    const apiKey = "This-api-key-is-for-commercial-use-exclusively.Only-entities-with-a-Spotcrime-contract-May-use-this-key.Call-877.410.1607.";
    const lat = "33.812500";
    const lon = "-84.424940";
    const radius = "5"; // this is in miles
    const url = `http://api.spotcrime.com/crimes.json?lat=${lat}&lon=${lon}&radius=${radius}&key=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
  
    console.log(data);
  }
  
  fetchUsers().catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
  });

 

