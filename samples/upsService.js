var api = require('./lib/build-api.js'),
client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');

function log(err,data,callback){
if (err != null){
console.log('Error:' + err);
}
console.log(data);
if (callback !=null){
callback(err,data);
}
}
client.getShipmentAccept(rgaNumber, shipmentDigest, log);
client.getShipmentConfirm(rgaNumber, email, shipper, fromAddress, toAddress, totalWeight, log);
client.getTimeInTransit(fromPostalCode, fromCountry, toPostalCode, toCountry, shipDate, monetaryValue, weight, log);
