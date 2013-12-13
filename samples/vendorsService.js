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
client.vendorshiptimesbyvendoruid(vendorUId, log);
client.nameValuePairByManufacturerName(manufacturerName, log);
client.allVendorNameValuePairs(log);
client.vendorswithshiptimes(log);
client.vendorshiptimes(log);
client.vendorshiptime(shipTimeId, log);
client.addVendorshiptime(requestObject,log);
client.updateVendorshiptime(requestObject,log);
client.vendorshiptime(Id, log);
client.all(log);
client.byManufacturer(manufacturerName, log);
client.find(vendorUid, vendorId, vendorName, sortIndex, sortOrder, offset, limit, log);
client.queryCount(vendorUid, vendorId, vendorName, log);
client.groups(vendorGroupId, log);
client.groups(vendorId, log);
client.groups(log);
client.removeUnconfirmedVendorServiceableZipCode(log);
client.resetConfirmZipVendorServiceableZipCode(log);
client.serviceableZipCodes(vendorServiceableZipCodeId, log);
client.updateServiceableZipCodes(requestObject,log);
client.serviceableZipCodes(vendorServiceableZipCodeId, vendorUid, zipCode, log);
client.vendorInventory(vendorId, sku, log);
client.inventory(productId, manufacturer, finish, log);
client.updateVendorMapping(requestObject,log);
client.vendorMapping(productId, finish, manufacturer, vendor, log);
client.updateVendorPricing(requestObject,log);
client.vendorPricing(vendorId, sku, log);
client.costs(uniqueId, cost, log);
client.updateCosts(vendorUid, uniqueId, pricedOptionId, cost, log);
client.updateCosts(requestObject,log);
client.costs(vendorUid, productId, manufacturer, finish, pricedOptionId, log);
client.costs(vendorUid, uniqueId, pricedOptionId, log);
client.costs(vendorUid, uniqueId, pricedOptionId, log);
client.costs(vendorCostId, log);
client.costs(vendorCostId, log);
client.updateVendors(requestObject,log);
client.vendors(vendorId, log);
client.vendors(vendorUid, log);
client.vendors(vendorUid, log);
