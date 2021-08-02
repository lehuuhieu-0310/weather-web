const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=674a12af01178cfebffbfc7df549d0e0&query=${latitude},${longitude}&units=f`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `It is current ${body.current.temperature} degrees out`)
        }
    })
}

module.exports = forecast