var api = require('../../lib/build-api.js'),
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
client.updateCharge(orderNumber, amount, transactionId, approvedBy, log);
client.updateCredit(orderNumber, amount, transactionId, approvedBy, log);
client.orderReference(orderReferenceId, log);
