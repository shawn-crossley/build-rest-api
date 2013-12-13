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
client.sendGeOrders(log);
client.realAvailability(productId, manufacturer, zipCode, log);
client.realAvailability(uniqueId, zipCode, log);
client.modelAvailability(productId, manufacturer, zipCode, log);
client.modelAvailability(uniqueId, zipCode, log);
client.updateReserveDeliveryDate(poNumber, log);
client.updateValidateCart(requestObject,log);
client.deliveryDate(poNumber, log);
client.deliveryAvailability(zipCode, log);
client.requestDeliveryZipCodes(log);
