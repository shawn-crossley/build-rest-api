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
client.updateRunDynamicShipping(purchaseOrderNumber, siteName, log);
client.updateFilter(requestObject,log);
client.updateRule(requestObject,log);
client.updateSourceOrder(orderNumber, log);
client.poTracking(poNumber, siteName, log);
client.poCartItems(uniqueId, siteName, log);
client.updatePoCartItems(requestObject,log);
client.poCartItems(transId, siteName, status, log);
client.poCartItems(poNumber, siteName, log);
client.poCartItems(uniqueId, siteName, log);
client.updatePurchaseorders(requestObject,log);
client.purchaseorders(orderNumber, siteName, log);
client.composite(poNumber, siteName, log);
client.purchaseorders(poNumber, siteName, log);
