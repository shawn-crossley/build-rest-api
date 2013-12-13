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
client.chargesEcrm(customerId, sortIndex, sortOrder, rows, page, log);
client.chargesEcrmCount(customerId, log);
client.ecrm(customerId, sortIndex, sortOrder, rows, page, log);
client.ecrmCount(customerId, log);
client.updateCheckout(requestObject,log);
client.updateGenerateBol(requestObject,log);
client.googlePayments(requestObject,log);
client.updateGooglePayments(requestObject,log);
client.googlePayments(googleTransactionId, log);
client.googlePayments(paymentId, log);
client.googlePayments(googlePaymentId, log);
client.updatePaypalPayments(requestObject,log);
client.paypalPayments(paypalOrderNumber, log);
client.paypalPayments(paymentId, log);
client.paypalPayments(paypalPaymentId, log);
client.paypalPayments(paypalPaymentId, log);
client.updatePaypalPendingOrders(requestObject,log);
client.paypalPendingOrders(paypalPendingOrderId, log);
client.paypalPendingOrders(paypalPendingOrderId, log);
client.updateCharges(requestObject,log);
client.charges(orderNumber, siteName, log);
client.charges(transId, siteName, log);
client.updateTokenize(cardNumber, cvv, requestObject,log);
client.updateComposite(cvv, requestObject,log);
client.composite(orderNumber, siteName, log);
client.updateOrders(requestObject,log);
client.orders(orderNumber, siteName, log);
