let reverseGeocode = require('./modules/geocode');
let estadoClima = require('./modules/clima');

//coordenadas
let coordenada = {
    lat: 19.259859,
    lon: -103.726143
};
reverseGeocode(coordenada, (error, dataResponse) => {
    if (error) {
        console.log('Ocurrio un error');
    } else {
        console.log(dataResponse);
        estadoClima(dataResponse.estado, (error, dataResponse) => {
            if (error) {
                console.log('ocurrio un error');
            } else {
                console.log(dataResponse)
            }
        });
    }
})
