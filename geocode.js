const request = require('postman-request');
//Colocamos la url de location
const reverseGeocode = (coordenada, callback) => {
    let urlLatLon = `https://us1.locationiq.com/v1/reverse.php?key=pk.41153b6587b4859bba0971564a488e14&lat=${coordenada.lat}&lon=${coordenada.lon}&format=json`

    request(urlLatLon, (error, response, body) => {
        if (error) {
            //Llamada
            callback('Ocurrio algun error con la busqueda', undefined);
        } else {
            let data = JSON.parse(body);

            callback(undefined, {
                pais: data.address.country,
                estado: data.address.state
            });
        }
    })
};
//la exportamos
module.exports = reverseGeocode;

