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
client.refreshLocalCache(siteId, platform, log);
client.refreshCache(siteId, platform, environment, log);
client.homepageItems(storeId, updateCache, log);
client.headerItems(storeId, platform, updateCache, log);
client.items(siteId, categoryId, log);
client.crossSell(storeId, categoryId, crossSellType, pricebookId, viewType, updateCache, log);
client.productBreadcrumbTrail(siteId, currentCategoryId, productUniqueId, updateCache, log);
client.productBreadcrumbTrail(siteId, currentCategoryId, manufacturer, productId, updateCache, log);
client.categoryBreadcrumbTrail(siteId, categoryId, log);
client.facetCategory(siteId, categoryId, log);
client.subs(siteId, categoryId, depth, featured, log);
client.sideMenuComposite(siteId, currentCategoryId, log);
client.sitemapComposite(storeId, updateCache, log);
client.brandsComposite(siteId, categoryId, log);
client.brands(siteId, log);
client.manufacturers(siteId, manufacturer, log);
