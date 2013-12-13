# Rest Access to Category Service
## Usages
### /categories/refreshLocalCache?siteId={siteId}platform=${platform}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);
/**
         * refreshLocalCache
         * @param {int} siteId
         * @param {string} platform - DESKTOP, MOBILE
         * @param {function} callback - function to call once async action complete
         */
	client.categoryService.refreshLocalCache(siteId, platform, callback);

```
### /categories/refreshCache?siteId={siteId}&platform={platform}&environment={environment}

```javascript
 /**
         * refreshCache
         * @param {int} siteId
         * @param {string} platform - DESKTOP, MOBILE
         * @param {string} environment - PRODUCTION, STAGING
         * @param {function} callback - function to call once async action complete
         */
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);

client.categoryService.refreshCache(siteId, platform, environment, callback);

```
### /categories/homepageItems?storeId={storeId}&updateCache={updateCache}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);
	 /**
         * homepageItems
         * @param {int} storeId
         * @param {boolean} updateCache
         * @param {function} callback - function to call once async action complete
         */
client.categoryService.homepageItems(storeId, updateCache, callback);
```
### /categories/headerItems?storeId={storeId}&platform={platform}&updateCache={updateCache}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);
	/**
         * headerItems
         * @param {int} storeId
         * @param {string} platform - DESKTOP, MOBILE
         * @param {boolean} updateCache
         * @param {function} callback - function to call once async action complete
         */
client.categoryService.headerItems(storeId, platform, updateCache, callback);
```
### /categories/items?siteId={siteId}&categoryId={categoryId}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);
	  /**
         * items
         * @param {int} siteId
         * @param {int} categoryId
         * @param {function} callback - function to call once async action complete
         */
client.categoryService.items(siteId, categoryId, callback);
```
### /categories/crossSell?storeId={storeId}&categoryId={categoryId}&crossSellType={crossSellType}&pricebookId={pricebookId}&viewType={viewType}&updateCache={updateCache}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);

	      /**
         * crossSell
         * @param {int} storeId
         * @param {int} categoryId
         * @param {string} crossSellType
         * @param {int} pricebookId
         * @param {string} viewType - GALLERY, LIST, FINISH
         * @param {boolean} updateCache
         * @param {function} callback - function to call once async action complete
         */
client.categoryService.crossSell(storeId, categoryId, crossSellType, pricebookId, viewType, updateCache, callback);

```
### /categories/productBreadcrumbTrail?siteId={siteId}&currentCategoryId={currentCategoryId}&productUniqueId={productUniqueId}&updateCache={updateCache}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);
	 /**
         * productBreadcrumbTrailByUniqueId
         * @param {int} siteId
         * @param {int} currentCategoryId
         * @param {int} productUniqueId
         * @param {boolean} updateCache
         * @param {function} callback - function to call once async action complete
         */
client.categoryService.productBreadcrumbTrailByUniqueId(siteId, currentCategoryId, productUniqueId, updateCache, callback);

```
### /categories/productBreadcrumbTrail?&siteId=${siteId}&currentCategoryId=${currentCategoryId}&manufacturer=${manufacturer}&productId=${productId}&updateCache=${updateCache}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);

	 /**
         * productBreadcrumbTrail
         * @param {int} siteId
         * @param {int} currentCategoryId
         * @param {string} manufacturer
         * @param {string} productId
         * @param {boolean} updateCache
         * @param {function} callback - function to call once async action complete
         */
	client.categoryService.productBreadcrumbTrail(siteId, currentCategoryId, manufacturer, productId, updateCache, callback);

```
### /categories/categoryBreadcrumbTrail?siteId={siteId}&categoryId={categoryId}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);

	/**
         * categoryBreadcrumbTrail
         * @param {int} siteId
         * @param {int} categoryId
         * @param {function} callback - function to call once async action complete
         */
	client.categoryService.categoryBreadcrumbTrail(siteId, categoryId, callback);

```
### /categories/facetCategory?siteId={siteId}&categoryId={categoryId}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);

	/**
         * facetCategory
         * @param {int} siteId
         * @param {int} categoryId
         * @param {function} callback - function to call once async action complete
         */
	client.categoryService.facetCategory(siteId, categoryId, callback);

```
### /categories/subs?siteId={siteId}&categoryId={categoryId}&depth={depth}&featured={featured}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);

	    /**
         * subs
         * @param {int} siteId
         * @param {int} categoryId
         * @param {int} depth
         * @param {boolean} featured
         * @param {function} callback - function to call once async action complete
         */
	client.categoryService.subs(siteId, categoryId, depth, featured, callback);

```
### /categories/sideMenuComposite?siteId={siteId}&currentCategoryId=${currentCategoryId}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);
	 /**
         * sideMenuComposite
         * @param {int} siteId
         * @param {int} currentCategoryId
         * @param {function} callback - function to call once async action complete
         */
client.categoryService.sideMenuComposite(siteId, currentCategoryId, callback);

```
### /categories/sitemapComposite?storeId={storeId}&updateCache={updateCache}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);

        /**
         * sitemapComposite
         * @param {int} storeId
         * @param {boolean} updateCache
         * @param {function} callback - callback(err,data)
         */
client.categoryService.sitemapComposite(storeId, updateCache, callback);

```
### /categories/brandsComposite?siteId={siteId}&categoryId={categoryId}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);


        /**
         * brandsComposite
         * @param {int} siteId
         * @param {int} categoryId
         * @param {function} callback - callback(err,data)
         */
client.categoryService.brandsComposite(siteId, categoryId, callback);

```
### /categories/brands?&siteId=${siteId}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);

	    /**
         * brands
         * @param {int} siteId
         * @param {function} callback - callback(err,data)
         */
client.categoryService.brands(siteId, callback);

```
### /categories/manufacturers?siteId={siteId}&manufacturer={manufacturer}

```javascript
var api = require('build-rest-api'),
	client = new api.BuildApiClient(EndPoint, AccessKey);
	/**
         * manufacturers
         * @param {int} siteId
         * @param {string} manufacturer
         * @param {function} callback - callback(err,data)
         */
client.categoryService.manufacturers(siteId, manufacturer, callback);
```
