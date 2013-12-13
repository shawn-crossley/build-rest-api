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
client.orderInfo(customerId, log);
client.ecrm(customerId, log);
client.updateGetMatchingAddressId(requestObject,log);
client.updateCreditCards(requestObject,log);
client.creditCards(creditCardId, log);
client.updateAddresses(requestObject,log);
client.addresses(addressId, log);
client.composites(buyerId, log);
client.composites(customerId, log);
client.updateCustomers(requestObject,log);
client.updateCustomers(requestObject,log);
client.customers(buyerId, log);
client.customers(customerId, log);
