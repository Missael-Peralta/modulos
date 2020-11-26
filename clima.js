const request = require('request');
//url del tiempo
    var estadoClima = (estado, callback) => {
        let urlLatLon = `http://api.weatherstack.com/current?access_key=3edf1b0f88b71a2bf825c3fcbb4a438c&query=${estado}`

        request(urlLatLon, (error, response, body) => {
            if (error) {
                callback('Ocurrio algun error con la busqueda', undefined);
            } else {
                let data = JSON.parse(body);
                 //lamada
                callback(undefined, {
                    tiempo: data.current.observation_time,
                    clima: data.current.temperature,
                });
            }
        })
    };s
module.exports = estadoClima;