/**
 * productsService functions
 * @type {Object}
 */
var productsService = function(buildApi) {
    return {

        /**
         * compositeids
         * @param {int} id - undefined
         * @param {boolean} updateCache - undefined
         * @param {object} callback - function to call once async action complete
         */
        compositeids: function(id, updateCache, callback) {
            var reqUrl = '/products/compositeids?id=${id}updateCache=${updateCache}';
            var params = {
                id: id,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * composite
         * @param {int} compositeId - undefined
         * @param {boolean} updateCache - undefined
         * @param {object} callback - function to call once async action complete
         */
        composite: function(compositeId, updateCache, callback) {
            var reqUrl = '/products/composite/${compositeId}?&updateCache=${updateCache}';
            var params = {
                compositeId: compositeId,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * cacheUpdateRequest
         * @param {string} type - CF8, CF10
         * @param {object} callback - function to call once async action complete
         */
        cacheUpdateRequest: function(type, callback) {
            var reqUrl = '/products/cacheUpdateRequest?&type=${type}';
            var params = {
                type: type
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * mayWeSuggestViews
         * @param {string} productId - undefined
         * @param {string} manufacturer - undefined
         * @param {int} priceBookId - undefined
         * @param {boolean} updateCache - undefined
         * @param {object} callback - function to call once async action complete
         */
        mayWeSuggestViews: function(productId, manufacturer, priceBookId, updateCache, callback) {
            var reqUrl = '/products/mayWeSuggestViews?&productId=${productId}&manufacturer=${manufacturer}&priceBookId=${priceBookId}&updateCache=${updateCache}';
            var params = {
                productId: productId,
                manufacturer: manufacturer,
                priceBookId: priceBookId,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * mayWeSuggestViews
         * @param {int} uniqueId - undefined
         * @param {int} priceBookId - undefined
         * @param {boolean} updateCache - undefined
         * @param {object} callback - function to call once async action complete
         */
        mayWeSuggestViews: function(uniqueId, priceBookId, updateCache, callback) {
            var reqUrl = '/products/mayWeSuggestViews?&uniqueId=${uniqueId}&priceBookId=${priceBookId}&updateCache=${updateCache}';
            var params = {
                uniqueId: uniqueId,
                priceBookId: priceBookId,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * bundle
         * @param {int} uniqueId - undefined
         * @param {object} callback - function to call once async action complete
         */
        bundle: function(uniqueId, callback) {
            var reqUrl = '/products/bundle?&uniqueId=${uniqueId}';
            var params = {
                uniqueId: uniqueId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCategorySearch
         * @param {boolean} updateCache - undefined
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateCategorySearch: function(updateCache, requestObject, callback) {
            var reqUrl = '/products/categorySearch?&updateCache=${updateCache}';
            var params = {
                updateCache: updateCache
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateKeywordSearch
         * @param {boolean} updateCache - undefined
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateKeywordSearch: function(updateCache, requestObject, callback) {
            var reqUrl = '/products/keywordSearch?&updateCache=${updateCache}';
            var params = {
                updateCache: updateCache
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * removeImapFlag
         * @param {int} uniqueId - undefined
         * @param {object} callback - function to call once async action complete
         */
        removeImapFlag: function(uniqueId, callback) {
            var reqUrl = '/products/removeImapFlag?&uniqueId=${uniqueId}';
            var params = {
                uniqueId: uniqueId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateAddImapFlag
         * @param {int} uniqueId - undefined
         * @param {object} callback - function to call once async action complete
         */
        updateAddImapFlag: function(uniqueId, callback) {
            var reqUrl = '/products/addImapFlag?&uniqueId=${uniqueId}';
            var params = {
                uniqueId: uniqueId
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * getImapFlag
         * @param {int} uniqueId - undefined
         * @param {object} callback - function to call once async action complete
         */
        getImapFlag: function(uniqueId, callback) {
            var reqUrl = '/products/getImapFlag?&uniqueId=${uniqueId}';
            var params = {
                uniqueId: uniqueId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateUploadFile
         * @param {string} method - IMAP_FLAG
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateUploadFile: function(method, requestObject, callback) {
            var reqUrl = '/products/uploadFile?&method=${method}';
            var params = {
                method: method
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * lowestPrice
         * @param {int} uniqueId - undefined
         * @param {object} callback - function to call once async action complete
         */
        lowestPrice: function(uniqueId, callback) {
            var reqUrl = '/products/lowestPrice?&uniqueId=${uniqueId}';
            var params = {
                uniqueId: uniqueId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * productquestions
         * @param {int} prid - undefined
         * @param {object} callback - function to call once async action complete
         */
        productquestions: function(prid, callback) {
            var reqUrl = '/products/productquestions?&prid=${prid}';
            var params = {
                prid: prid
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * productquestions
         * @param {int} quid - undefined
         * @param {object} callback - function to call once async action complete
         */
        productquestions: function(quid, callback) {
            var reqUrl = '/products/productquestions?&quid=${quid}';
            var params = {
                quid: quid
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * productquestions
         * @param {int} prid - undefined
         * @param {boolean} updateCache - undefined
         * @param {object} callback - function to call once async action complete
         */
        productquestions: function(prid, updateCache, callback) {
            var reqUrl = '/products/productquestions?&prid=${prid}&updateCache=${updateCache}';
            var params = {
                prid: prid,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * productquestions
         * @param {int} prid - undefined
         * @param {object} callback - function to call once async action complete
         */
        productquestions: function(prid, callback) {
            var reqUrl = '/products/productquestions?&prid=${prid}';
            var params = {
                prid: prid
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateProductquestions
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateProductquestions: function(requestObject, callback) {
            var reqUrl = '/products/productquestions';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateSaveShippingCalculationName
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateSaveShippingCalculationName: function(requestObject, callback) {
            var reqUrl = '/products/saveShippingCalculationName';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * composite
         * @param {string} manufacturer - undefined
         * @param {string} productId - undefined
         * @param {string} siteName - undefined
         * @param {int} storeId - undefined
         * @param {boolean} internalView - undefined
         * @param {int} accountTypeId - undefined
         * @param {int} currentCategoryId - undefined
         * @param {boolean} updateCache - undefined
         * @param {object} callback - function to call once async action complete
         */
        composite: function(manufacturer, productId, siteName, storeId, internalView, accountTypeId, currentCategoryId, updateCache, callback) {
            var reqUrl = '/products/composite?&manufacturer=${manufacturer}&productId=${productId}&siteName=${siteName}&storeId=${storeId}&internalView=${internalView}&accountTypeId=${accountTypeId}&currentCategoryId=${currentCategoryId}&updateCache=${updateCache}';
            var params = {
                manufacturer: manufacturer,
                productId: productId,
                siteName: siteName,
                storeId: storeId,
                internalView: internalView,
                accountTypeId: accountTypeId,
                currentCategoryId: currentCategoryId,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * composite
         * @param {int} uniqueId - undefined
         * @param {string} siteName - undefined
         * @param {int} storeId - undefined
         * @param {boolean} internalView - undefined
         * @param {int} accountTypeId - undefined
         * @param {int} currentCategoryId - undefined
         * @param {boolean} updateCache - undefined
         * @param {object} callback - function to call once async action complete
         */
        composite: function(uniqueId, siteName, storeId, internalView, accountTypeId, currentCategoryId, updateCache, callback) {
            var reqUrl = '/products/composite?&uniqueId=${uniqueId}&siteName=${siteName}&storeId=${storeId}&internalView=${internalView}&accountTypeId=${accountTypeId}&currentCategoryId=${currentCategoryId}&updateCache=${updateCache}';
            var params = {
                uniqueId: uniqueId,
                siteName: siteName,
                storeId: storeId,
                internalView: internalView,
                accountTypeId: accountTypeId,
                currentCategoryId: currentCategoryId,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * productAttributesFind
         * @param {string} name - undefined
         * @param {boolean} productFeedInclude - undefined
         * @param {string} sortIndex - undefined
         * @param {string} sortOrder - undefined
         * @param {int} offset - undefined
         * @param {int} limit - undefined
         * @param {object} callback - function to call once async action complete
         */
        productAttributesFind: function(name, productFeedInclude, sortIndex, sortOrder, offset, limit, callback) {
            var reqUrl = '/products/productAttributes/find?&name=${name}&productFeedInclude=${productFeedInclude}&sortIndex=${sortIndex}&sortOrder=${sortOrder}&offset=${offset}&limit=${limit}';
            var params = {
                name: name,
                productFeedInclude: productFeedInclude,
                sortIndex: sortIndex,
                sortOrder: sortOrder,
                offset: offset,
                limit: limit
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * productAttributesQueryCount
         * @param {string} name - undefined
         * @param {boolean} productFeedInclude - undefined
         * @param {object} callback - function to call once async action complete
         */
        productAttributesQueryCount: function(name, productFeedInclude, callback) {
            var reqUrl = '/products/productAttributes/queryCount?&name=${name}&productFeedInclude=${productFeedInclude}';
            var params = {
                name: name,
                productFeedInclude: productFeedInclude
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateProductAttributes
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateProductAttributes: function(requestObject, callback) {
            var reqUrl = '/products/productAttributes';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * productAttributes
         * @param {int} productAttributeId - undefined
         * @param {object} callback - function to call once async action complete
         */
        productAttributes: function(productAttributeId, callback) {
            var reqUrl = '/products/productAttributes/${productAttributeId}';
            var params = {
                productAttributeId: productAttributeId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * shippingCalculationName
         * @param {int} Id - undefined
         * @param {object} callback - function to call once async action complete
         */
        shippingCalculationName: function(Id, callback) {
            var reqUrl = '/products/shippingCalculationName?&Id=${Id}';
            var params = {
                Id: Id
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * shippingCalculationName
         * @param {boolean} active - undefined
         * @param {boolean} omc - undefined
         * @param {boolean} site - undefined
         * @param {boolean} customers - undefined
         * @param {object} callback - function to call once async action complete
         */
        shippingCalculationName: function(active, omc, site, customers, callback) {
            var reqUrl = '/products/shippingCalculationName?&active=${active}&omc=${omc}&site=${site}&customers=${customers}';
            var params = {
                active: active,
                omc: omc,
                site: site,
                customers: customers
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateFreightRate
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateFreightRate: function(requestObject, callback) {
            var reqUrl = '/products/freightRate';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * imageGallery
         * @param {string} productId - undefined
         * @param {string} manufacturer - undefined
         * @param {object} callback - function to call once async action complete
         */
        imageGallery: function(productId, manufacturer, callback) {
            var reqUrl = '/products/imageGallery?&productId=${productId}&manufacturer=${manufacturer}';
            var params = {
                productId: productId,
                manufacturer: manufacturer
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * price
         * @param {int} uniqueId - undefined
         * @param {double} cost - undefined
         * @param {object} callback - function to call once async action complete
         */
        price: function(uniqueId, cost, callback) {
            var reqUrl = '/products/price?&uniqueId=${uniqueId}&cost=${cost}';
            var params = {
                uniqueId: uniqueId,
                cost: cost
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * price
         * @param {int} uniqueId - undefined
         * @param {int} pricebookId - undefined
         * @param {object} callback - function to call once async action complete
         */
        price: function(uniqueId, pricebookId, callback) {
            var reqUrl = '/products/price?&uniqueId=${uniqueId}&pricebookId=${pricebookId}';
            var params = {
                uniqueId: uniqueId,
                pricebookId: pricebookId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updatePrice
         * @param {int} uniqueId - undefined
         * @param {int} pricebookId - undefined
         * @param {double} cost - undefined
         * @param {object} callback - function to call once async action complete
         */
        updatePrice: function(uniqueId, pricebookId, cost, callback) {
            var reqUrl = '/products/price?&uniqueId=${uniqueId}&pricebookId=${pricebookId}&cost=${cost}';
            var params = {
                uniqueId: uniqueId,
                pricebookId: pricebookId,
                cost: cost
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updatePrice
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updatePrice: function(requestObject, callback) {
            var reqUrl = '/products/price';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * price
         * @param {int} uniqueId - undefined
         * @param {int} pricebookId - undefined
         * @param {object} callback - function to call once async action complete
         */
        price: function(uniqueId, pricebookId, callback) {
            var reqUrl = '/products/price?&uniqueId=${uniqueId}&pricebookId=${pricebookId}';
            var params = {
                uniqueId: uniqueId,
                pricebookId: pricebookId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * price
         * @param {int} uniqueId - undefined
         * @param {int} pricebookId - undefined
         * @param {object} callback - function to call once async action complete
         */
        price: function(uniqueId, pricebookId, callback) {
            var reqUrl = '/products/price?&uniqueId=${uniqueId}&pricebookId=${pricebookId}';
            var params = {
                uniqueId: uniqueId,
                pricebookId: pricebookId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * dropsPopular
         * @param {int} storeId - undefined
         * @param {string} platform - DESKTOP, MOBILE
         * @param {int} numResultsPerCategory - undefined
         * @param {int} pricebookId - undefined
         * @param {string} viewType - GALLERY, LIST, FINISH
         * @param {boolean} updateCache - undefined
         * @param {object} callback - function to call once async action complete
         */
        dropsPopular: function(storeId, platform, numResultsPerCategory, pricebookId, viewType, updateCache, callback) {
            var reqUrl = '/products/drops/popular?&storeId=${storeId}&platform=${platform}&numResultsPerCategory=${numResultsPerCategory}&pricebookId=${pricebookId}&viewType=${viewType}&updateCache=${updateCache}';
            var params = {
                storeId: storeId,
                platform: platform,
                numResultsPerCategory: numResultsPerCategory,
                pricebookId: pricebookId,
                viewType: viewType,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateDropsFinish
         * @param {int} priceBookId - undefined
         * @param {boolean} updateCache - undefined
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateDropsFinish: function(priceBookId, updateCache, requestObject, callback) {
            var reqUrl = '/products/drops/finish?&priceBookId=${priceBookId}&updateCache=${updateCache}';
            var params = {
                priceBookId: priceBookId,
                updateCache: updateCache
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * dropFinish
         * @param {int} compositeId - undefined
         * @param {int} priceBookId - undefined
         * @param {boolean} updateCache - undefined
         * @param {object} callback - function to call once async action complete
         */
        dropFinish: function(compositeId, priceBookId, updateCache, callback) {
            var reqUrl = '/products/drop/finish?&compositeId=${compositeId}&priceBookId=${priceBookId}&updateCache=${updateCache}';
            var params = {
                compositeId: compositeId,
                priceBookId: priceBookId,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateDrops
         * @param {int} pricebookId - undefined
         * @param {string} masterFinish - undefined
         * @param {string} finish - undefined
         * @param {string} viewType - GALLERY, LIST, FINISH
         * @param {boolean} updateCache - undefined
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateDrops: function(pricebookId, masterFinish, finish, viewType, updateCache, requestObject, callback) {
            var reqUrl = '/products/drops?&pricebookId=${pricebookId}&masterFinish=${masterFinish}&finish=${finish}&viewType=${viewType}&updateCache=${updateCache}';
            var params = {
                pricebookId: pricebookId,
                masterFinish: masterFinish,
                finish: finish,
                viewType: viewType,
                updateCache: updateCache
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * drops
         * @param {string} manufacturer - undefined
         * @param {string} productId - undefined
         * @param {int} pricebookId - undefined
         * @param {string} masterFinish - undefined
         * @param {string} finish - undefined
         * @param {string} viewType - GALLERY, LIST, FINISH
         * @param {boolean} updateCache - undefined
         * @param {object} callback - function to call once async action complete
         */
        drops: function(manufacturer, productId, pricebookId, masterFinish, finish, viewType, updateCache, callback) {
            var reqUrl = '/products/drops?&manufacturer=${manufacturer}&productId=${productId}&pricebookId=${pricebookId}&masterFinish=${masterFinish}&finish=${finish}&viewType=${viewType}&updateCache=${updateCache}';
            var params = {
                manufacturer: manufacturer,
                productId: productId,
                pricebookId: pricebookId,
                masterFinish: masterFinish,
                finish: finish,
                viewType: viewType,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateSaveAll
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateSaveAll: function(requestObject, callback) {
            var reqUrl = '/products/saveAll';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateUniqueids
         * @param {boolean} updateCache - undefined
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateUniqueids: function(updateCache, requestObject, callback) {
            var reqUrl = '/products/uniqueids?&updateCache=${updateCache}';
            var params = {
                updateCache: updateCache
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateProducts
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateProducts: function(requestObject, callback) {
            var reqUrl = '/products/';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * products
         * @param {string} productId - undefined
         * @param {string} manufacturer - undefined
         * @param {object} callback - function to call once async action complete
         */
        products: function(productId, manufacturer, callback) {
            var reqUrl = '/products/?&productId=${productId}&manufacturer=${manufacturer}';
            var params = {
                productId: productId,
                manufacturer: manufacturer
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * products
         * @param {string} productId - undefined
         * @param {string} manufacturer - undefined
         * @param {string} finish - undefined
         * @param {object} callback - function to call once async action complete
         */
        products: function(productId, manufacturer, finish, callback) {
            var reqUrl = '/products/?&productId=${productId}&manufacturer=${manufacturer}&finish=${finish}';
            var params = {
                productId: productId,
                manufacturer: manufacturer,
                finish: finish
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * products
         * @param {int} uniqueId - undefined
         * @param {object} callback - function to call once async action complete
         */
        products: function(uniqueId, callback) {
            var reqUrl = '/products/${uniqueId}';
            var params = {
                uniqueId: uniqueId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * products
         * @param {int} uniqueId - undefined
         * @param {boolean} updateCache - undefined
         * @param {object} callback - function to call once async action complete
         */
        products: function(uniqueId, updateCache, callback) {
            var reqUrl = '/products/${uniqueId}?&updateCache=${updateCache}';
            var params = {
                uniqueId: uniqueId,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return productsService object
 * @type {Object}
 */
module.exports = productsService;
