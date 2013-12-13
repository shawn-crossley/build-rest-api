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
client.zipcodes(vendorServiceableZipCodeServiceId, log);
client.updateZipcodes(requestObject,log);
client.zipcodes(zipCode, log);
client.zipcodes(vendorServiceableZipCodeId, serviceId, log);
client.zipcodes(vendorServiceableZipCodeServiceId, log);
client.products(productXServiceId, log);
client.updateProducts(requestObject,log);
client.products(productUniqueId, log);
client.products(uniqueId, serviceId, log);
client.products(productXServiceId, log);
client.services(serviceId, log);
client.services(unavailableZipCode, unavailableProductUniqueId, log);
client.services(availableZipCode, availableProductUniqueId, log);
client.services(type, log);
client.services(serviceTypeId, log);
client.updateServices(requestObject,log);
client.services(externalServiceId, log);
client.services(serviceId, log);
