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
client.updatePmgsReasonsValidate(requestObject,log);
client.pmgsReasonsActive(log);
client.updatePmgsReasonsCheckname(requestObject,log);
client.addPmgsReason(requestObject,log);
client.updatePmgsReason(requestObject,log);
client.pmgsReason(pmgItemReasonId, log);
client.pmgsReasonsAll(log);
client.newSessionCart(log);
client.packageItems(uniqueId, log);
client.updateSaveSessionCartItemPmg(removePmg, requestObject,log);
client.updateSaveSessionCartItem(requestObject,log);
client.updateMergeSessionCartItems(requestObject,log);
client.sessionCartItem(sessionCartId, itemKey, log);
client.updateSessionCartItem(requestObject,log);
client.sessionCartItem(sessionCartId, itemKey, parentKey, includeDeletedItem, log);
client.sessionCartItem(sessionCartId, itemKey, includeDeletedItem, log);
client.updateSessionCartItems(sessionCartId, requestObject,log);
client.sessionCartItems(sessionCartId, log);
client.sessionCart(sessionCartId, log);
client.updateSessionCart(requestObject,log);
client.sessionCart(sessionCartId, siteId, recalculatePrice, priceBookId, updateCache, log);
client.sessionCart(sessionCartId, siteId, recalculatePrice, priceBookId, log);
client.cartItems(cartId, siteName, log);
client.cartItem(requestObject,log);
client.updateCartItem(requestObject,log);
client.cartItem(cartId, itemId, siteName, log);
client.cart(requestObject,log);
client.updateCart(requestObject,log);
client.cart(cartId, siteName, log);
