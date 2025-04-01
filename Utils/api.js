import Amadeus from 'amadeus';

const amadeus = new Amadeus({
  clientId: 'SXs9Almd8OQLSITRY1tRiE5GlvylYgNh',
  clientSecret: 'BLmwELnfdmp3io5O',
});

//https://developers.amadeus.com/blog/get-started-amadeus-node-sdk

amadeus.shopping.flightOffersSearch
  .get({
    originLocationCode: 'BOS',
    destinationLocationCode: 'LON',
    departureDate: '2025-08-01',
    adults: '2',
  })
  .then(function (data) {
    console.log(JSON.stringify(data));
  })
  .catch(function (responseError) {
    console.log(JSON.stringify(responseError));
  });

// GEt airport from longitude latitude

// amadeus.referenceData.locations.airports
//   .get()
//   .then(function (response) {
//     // This will give you a list of airport codes and their details
//     const airports = response.data;
//     airports.forEach((airport) => {
//       console.log(`Airport: ${airport.iataCode} - ${airport.name}`);
//     });
//   })
//   .catch(function (error) {
//     console.error('Error fetching airport data:', error);
//   });
