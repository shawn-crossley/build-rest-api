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
client.compositeids(id, updateCache, log);
client.composite(compositeId, updateCache, log);
client.cacheUpdateRequest(type, log);
client.mayWeSuggestViews(productId, manufacturer, priceBookId, updateCache, log);
client.mayWeSuggestViews(uniqueId, priceBookId, updateCache, log);
client.bundle(uniqueId, log);
client.updateCategorySearch(updateCache, requestObject,log);
client.updateKeywordSearch(updateCache, requestObject,log);
client.removeImapFlag(uniqueId, log);
client.updateAddImapFlag(uniqueId, log);
client.getImapFlag(uniqueId, log);
client.updateUploadFile(method, requestObject,log);
client.lowestPrice(uniqueId, log);
client.productquestions(prid, log);
client.productquestions(quid, log);
client.productquestions(prid, updateCache, log);
client.productquestions(prid, log);
client.updateProductquestions(requestObject,log);
client.updateSaveShippingCalculationName(requestObject,log);
client.composite(manufacturer, productId, siteName, storeId, internalView, accountTypeId, currentCategoryId, updateCache, log);
client.composite(uniqueId, siteName, storeId, internalView, accountTypeId, currentCategoryId, updateCache, log);
client.productAttributesFind(name, productFeedInclude, sortIndex, sortOrder, offset, limit, log);
client.productAttributesQueryCount(name, productFeedInclude, log);
client.updateProductAttributes(requestObject,log);
client.productAttributes(productAttributeId, log);
client.shippingCalculationName(Id, log);
client.shippingCalculationName(active, omc, site, customers, log);
client.updateFreightRate(requestObject,log);
client.imageGallery(productId, manufacturer, log);
client.price(uniqueId, cost, log);
client.price(uniqueId, pricebookId, log);
client.updatePrice(uniqueId, pricebookId, cost, log);
client.updatePrice(requestObject,log);
client.price(uniqueId, pricebookId, log);
client.price(uniqueId, pricebookId, log);
client.dropsPopular(storeId, platform, numResultsPerCategory, pricebookId, viewType, updateCache, log);
client.updateDropsFinish(priceBookId, updateCache, requestObject,log);
client.dropFinish(compositeId, priceBookId, updateCache, log);
client.updateDrops(pricebookId, masterFinish, finish, viewType, updateCache, requestObject,log);
client.drops(manufacturer, productId, pricebookId, masterFinish, finish, viewType, updateCache, log);
client.updateSaveAll(requestObject,log);
client.updateUniqueids(updateCache, requestObject,log);
client.updateProducts(requestObject,log);
client.products(productId, manufacturer, log);
client.products(productId, manufacturer, finish, log);
client.products(uniqueId, log);
client.products(uniqueId, updateCache, log);
