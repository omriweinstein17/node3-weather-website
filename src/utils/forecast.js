const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=83e54171171bac0dc4c36ba56b30e838&query=' + latitude + ',' + longitude + '&units=f'
    request( {url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location service', undefined)
        } else if(!body.current){
            callback('Unable to find location.', undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0] + 'It is currently '+ body.current.temperature + 
            ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is: ' + body.current.humidity + '%')
            // callback(undefined, {
            //     temperature: body.current.temperature,
            //     feelslike: body.current.feelslike,
            //     weather_descriptions: body.current.weather_descriptions[0]
            // })
        }
    })
}


module.exports = forecast