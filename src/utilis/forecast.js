const request = require('request')

const forecast = (lat, long,  callback) => {

     const url = 'http://api.weatherstack.com/current?access_key=77b551869d504bd86f5880e9df80a4c2&query=' + lat  + ',' + long +  ''
      
     //request({ url: url, json: true}, (error, response) => {
     request({ url, json: true}, (error, { body }) => {                                             // destructuring lect 40 part

          if(error) {
               callback('Failure to Internet connection', undefined)

          //} else if(response.body.error) {
          } else if(body.error) {                                                                   // destructuring lect 40 part
               //callback(response.body.error.info, undefined)
               callback(body.error.info, undefined)

          } else {
               // callback(undefined, response.body.current.weather_descriptions[0] + '. it is currently ' + response.body.current.temperature + ' degrees out. it feels like ' + response.body.current.feelslike + ' degrees out')

               callback(undefined, body.current.weather_descriptions[0] + '. it is currently ' + body.current.temperature + ' degrees out. it feels like ' + body.current.feelslike + ' degrees out')                            // destructuring lect 40 part
          }               
     })
}

module.exports = forecast