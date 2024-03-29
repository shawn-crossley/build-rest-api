/**
 * categoriesService functions
 * @type {Object}
 */
var categoriesService = function(buildApi) {
    return {

        /**
         * refreshLocalCache
         * @param {int} siteId
         * @param {string} platform - DESKTOP, MOBILE
         * @param {function} callback - function to call once async action complete
         */
        refreshLocalCache: function(siteId, platform, callback) {
            var reqUrl = '/categories/refreshLocalCache?siteId=${siteId}&platform=${platform}';
            var params = {
                siteId: siteId,
                platform: platform
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * refreshCache
         * @param {int} siteId
         * @param {string} platform - DESKTOP, MOBILE
         * @param {string} environment - PRODUCTION, STAGING
         * @param {function} callback - function to call once async action complete
         */
        refreshCache: function(siteId, platform, environment, callback) {
            var reqUrl = '/categories/refreshCache?&siteId=${siteId}&platform=${platform}&environment=${environment}';
            var params = {
                siteId: siteId,
                platform: platform,
                environment: environment
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * homepageItems
         * @param {int} storeId
         * @param {boolean} updateCache
         * @param {function} callback - function to call once async action complete
         */
        homepageItems: function(storeId, updateCache, callback) {
            var reqUrl = '/categories/homepageItems?&storeId=${storeId}&updateCache=${updateCache}';
            var params = {
                storeId: storeId,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * headerItems
         * @param {int} storeId
         * @param {string} platform - DESKTOP, MOBILE
         * @param {boolean} updateCache
         * @param {function} callback - function to call once async action complete
         */
        headerItems: function(storeId, platform, updateCache, callback) {
            var reqUrl = '/categories/headerItems?&storeId=${storeId}&platform=${platform}&updateCache=${updateCache}';
            var params = {
                storeId: storeId,
                platform: platform,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * items
         * @param {int} siteId
         * @param {int} categoryId
         * @param {function} callback - function to call once async action complete
         */
        items: function(siteId, categoryId, callback) {
            var reqUrl = '/categories/items?&siteId=${siteId}&categoryId=${categoryId}';
            var params = {
                siteId: siteId,
                categoryId: categoryId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

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
        crossSell: function(storeId, categoryId, crossSellType, pricebookId, viewType, updateCache, callback) {
            var reqUrl = '/categories/crossSell?&storeId=${storeId}&categoryId=${categoryId}&crossSellType=${crossSellType}&pricebookId=${pricebookId}&viewType=${viewType}&updateCache=${updateCache}';
            var params = {
                storeId: storeId,
                categoryId: categoryId,
                crossSellType: crossSellType,
                pricebookId: pricebookId,
                viewType: viewType,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * productBreadcrumbTrailByUniqueId
         * @param {int} siteId
         * @param {int} currentCategoryId
         * @param {int} productUniqueId
         * @param {boolean} updateCache
         * @param {function} callback - function to call once async action complete
         */
        productBreadcrumbTrailByUniqueId: function(siteId, currentCategoryId, productUniqueId, updateCache, callback) {
            var reqUrl = '/categories/productBreadcrumbTrail?&siteId=${siteId}&currentCategoryId=${currentCategoryId}&productUniqueId=${productUniqueId}&updateCache=${updateCache}';
            var params = {
                siteId: siteId,
                currentCategoryId: currentCategoryId,
                productUniqueId: productUniqueId,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * productBreadcrumbTrail
         * @param {int} siteId
         * @param {int} currentCategoryId
         * @param {string} manufacturer
         * @param {string} productId
         * @param {boolean} updateCache
         * @param {function} callback - function to call once async action complete
         */
        productBreadcrumbTrail: function(siteId, currentCategoryId, manufacturer, productId, updateCache, callback) {
            var reqUrl = '/categories/productBreadcrumbTrail?&siteId=${siteId}&currentCategoryId=${currentCategoryId}&manufacturer=${manufacturer}&productId=${productId}&updateCache=${updateCache}';
            var params = {
                siteId: siteId,
                currentCategoryId: currentCategoryId,
                manufacturer: manufacturer,
                productId: productId,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * categoryBreadcrumbTrail
         * @param {int} siteId
         * @param {int} categoryId
         * @param {function} callback - function to call once async action complete
         */
        categoryBreadcrumbTrail: function(siteId, categoryId, callback) {
            var reqUrl = '/categories/categoryBreadcrumbTrail?&siteId=${siteId}&categoryId=${categoryId}';
            var params = {
                siteId: siteId,
                categoryId: categoryId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * facetCategory
         * @param {int} siteId
         * @param {int} categoryId
         * @param {function} callback - function to call once async action complete
         */
        facetCategory: function(siteId, categoryId, callback) {
            var reqUrl = '/categories/facetCategory?&siteId=${siteId}&categoryId=${categoryId}';
            var params = {
                siteId: siteId,
                categoryId: categoryId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * subs
         * @param {int} siteId
         * @param {int} categoryId
         * @param {int} depth
         * @param {boolean} featured
         * @param {function} callback - function to call once async action complete
         */
        subs: function(siteId, categoryId, depth, featured, callback) {
            var reqUrl = '/categories/subs?&siteId=${siteId}&categoryId=${categoryId}&depth=${depth}&featured=${featured}';
            var params = {
                siteId: siteId,
                categoryId: categoryId,
                depth: depth,
                featured: featured
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * sideMenuComposite
         * @param {int} siteId
         * @param {int} currentCategoryId
         * @param {function} callback - function to call once async action complete
         */
        sideMenuComposite: function(siteId, currentCategoryId, callback) {
            var reqUrl = '/categories/sideMenuComposite?&siteId=${siteId}&currentCategoryId=${currentCategoryId}';
            var params = {
                siteId: siteId,
                currentCategoryId: currentCategoryId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * sitemapComposite
         * @param {int} storeId
         * @param {boolean} updateCache
         * @param {function} callback - callback(err,data)
         */
        sitemapComposite: function(storeId, updateCache, callback) {
            var reqUrl = '/categories/sitemapComposite?&storeId=${storeId}&updateCache=${updateCache}';
            var params = {
                storeId: storeId,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * brandsComposite
         * @param {int} siteId
         * @param {int} categoryId
         * @param {function} callback - callback(err,data)
         */
        brandsComposite: function(siteId, categoryId, callback) {
            var reqUrl = '/categories/brandsComposite?&siteId=${siteId}&categoryId=${categoryId}';
            var params = {
                siteId: siteId,
                categoryId: categoryId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * brands
         * @param {int} siteId
         * @param {function} callback - callback(err,data)
         */
        brands: function(siteId, callback) {
            var reqUrl = '/categories/brands?&siteId=${siteId}';
            var params = {
                siteId: siteId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * manufacturers
         * @param {int} siteId
         * @param {string} manufacturer
         * @param {function} callback - callback(err,data)
         */
        manufacturers: function(siteId, manufacturer, callback) {
            var reqUrl = '/categories/manufacturers?&siteId=${siteId}&manufacturer=${manufacturer}';
            var params = {
                siteId: siteId,
                manufacturer: manufacturer
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return categoriesService object
 * @type {Object}
 */
module.exports = categoriesService;
