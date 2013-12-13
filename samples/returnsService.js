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
client.ecrm(customerId, sortIndex, sortOrder, rows, page, log);
client.ecrmCount(customerId, log);
client.updateCreateReturn(requestObject,log);
client.updateCarts(requestObject,log);
client.updateReturns(insert, requestObject,log);
client.composites(returnId, siteName, log);
client.returns(returnId, siteName, log);
client.returns(returnId, log);
