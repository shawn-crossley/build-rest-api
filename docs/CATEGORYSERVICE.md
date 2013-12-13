# Rest Access to Category Service
## Usages
### /categories/refreshCache

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');

	client.categoryService.refreshLocalCache(siteId, platform, callback);

```
### /categories/refreshLocalCache

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');

client.categoryService.refreshCache(siteId, platform, environment, callback);

```
### /categories/homepageItems

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');
client.categoryService.homepageItems(storeId, updateCache, callback);
```
### /categories/homepageItems

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');
client.categoryService.headerItems(storeId, platform, updateCache, callback);
```
### /categories/items

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');
client.categoryService.items(siteId, categoryId, callback);
```
### /categories/crossSell

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');
client.categoryService.crossSell(storeId, categoryId, crossSellType, pricebookId, viewType, updateCache, callback);

```
### /categories/productBreadcrumbTrail

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');
client.categoryService.productBreadcrumbTrailByUniqueId(siteId, currentCategoryId, productUniqueId, updateCache, callback);

```
### /categories/productBreadcrumbTrail

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');
	client.categoryService.productBreadcrumbTrail(siteId, currentCategoryId, manufacturer, productId, updateCache, callback);

```
### /categories/categoryBreadcrumbTrail

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');
	client.categoryService.categoryBreadcrumbTrail(siteId, categoryId, callback);

```
### /categories/facetCategory

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');
	client.categoryService.facetCategory(siteId, categoryId, callback);

```
### /categories/subs

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');
	client.categoryService.subs(siteId, categoryId, depth, featured, callback);

```
### /categories/sideMenuComposite

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');
client.categoryService.sideMenuComposite(siteId, currentCategoryId, callback);

```
### /categories/sitemapComposite

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');
client.categoryService.sitemapComposite(storeId, updateCache, callback);//

```
### /categories/brandsComposite

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');
client.categoryService.brandsComposite(siteId, categoryId, callback);

```
### /categories/brands

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');
client.categoryService.brands(siteId, callback);

```
### /categories/manufacturers

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');
client.categoryService.manufacturers(siteId, manufacturer, callback);
```




