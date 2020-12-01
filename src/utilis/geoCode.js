// Lect 36 ....callback Abstraction

const request = require('request')

const geoCode = (address, callback) => {
     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGl0ZW5kZXI4OCIsImEiOiJja2hxOW5kd2EwaWE0Mnpyc212aGNzb3EwIn0.zs0-xEnZ5-2wBIxRDLBydg'

     //request({ url: url, json: true}, (error, response) => {
     request({ url, json: true}, (error, {body} ) => {                // destructuring lect 40 part

          if(error) {
               callback('Unable to connect to network', undefined)

          //}  else if(response.body.message) {                       // destructuring lect 40 part
          }  else if(body.features.length === 0) {

               callback('Unable to find Location. Try another search', undefined) 

          }  else {

               callback(undefined, {
                    // Latitude: response.body.features[0].center[1],
                    // Longitude: response.body.features[0].center[0],
                    // Location: response.body.features[0].place_name
                   
                    Latitude: body.features[0].center[1],               // destructuring lect 40 part
                    Longitude: body.features[0].center[0],
                    Location: body.features[0].place_name         
                   
               })
                
           }
           
     })

}

module.exports = geoCode