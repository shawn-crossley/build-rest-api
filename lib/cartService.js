/**
 * cartService functions
 * @type {Object}
 */
var cartService = function(buildApi) {
    return {

        /**
         * updatePmgsReasonsValidate
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updatePmgsReasonsValidate: function(requestObject, callback) {
            var reqUrl = '/cart/pmgs/reasons/validate';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * pmgsReasonsActive
         * @param {object} callback - function to call once async action complete
         */
        pmgsReasonsActive: function(callback) {
            var reqUrl = '/cart/pmgs/reasons/active';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updatePmgsReasonsCheckname
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updatePmgsReasonsCheckname: function(requestObject, callback) {
            var reqUrl = '/cart/pmgs/reasons/check-name';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * addPmgsReason
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        addPmgsReason: function(requestObject, callback) {
            var reqUrl = '/cart/pmgs/reason';
            var params = {};
            buildApi.callApi('PUT', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updatePmgsReason
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updatePmgsReason: function(requestObject, callback) {
            var reqUrl = '/cart/pmgs/reason';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * pmgsReason
         * @param {int} pmgItemReasonId - undefined
         * @param {object} callback - function to call once async action complete
         */
        pmgsReason: function(pmgItemReasonId, callback) {
            var reqUrl = '/cart/pmgs/reason/${pmgItemReasonId}';
            var params = {
                pmgItemReasonId: pmgItemReasonId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * pmgsReasonsAll
         * @param {object} callback - function to call once async action complete
         */
        pmgsReasonsAll: function(callback) {
            var reqUrl = '/cart/pmgs/reasons/all';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * newSessionCart
         * @param {object} callback - function to call once async action complete
         */
        newSessionCart: function(callback) {
            var reqUrl = '/cart/newSessionCart';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * packageItems
         * @param {int} uniqueId - undefined
         * @param {object} callback - function to call once async action complete
         */
        packageItems: function(uniqueId, callback) {
            var reqUrl = '/cart/packageItems?&uniqueId=${uniqueId}';
            var params = {
                uniqueId: uniqueId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateSaveSessionCartItemPmg
         * @param {boolean} removePmg - undefined
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateSaveSessionCartItemPmg: function(removePmg, requestObject, callback) {
            var reqUrl = '/cart/saveSessionCartItemPmg?&removePmg=${removePmg}';
            var params = {
                removePmg: removePmg
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateSaveSessionCartItem
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateSaveSessionCartItem: function(requestObject, callback) {
            var reqUrl = '/cart/saveSessionCartItem';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateMergeSessionCartItems
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateMergeSessionCartItems: function(requestObject, callback) {
            var reqUrl = '/cart/mergeSessionCartItems';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * sessionCartItem
         * @param {long} sessionCartId - undefined
         * @param {string} itemKey - undefined
         * @param {object} callback - function to call once async action complete
         */
        sessionCartItem: function(sessionCartId, itemKey, callback) {
            var reqUrl = '/cart/sessionCartItem?&sessionCartId=${sessionCartId}&itemKey=${itemKey}';
            var params = {
                sessionCartId: sessionCartId,
                itemKey: itemKey
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateSessionCartItem
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateSessionCartItem: function(requestObject, callback) {
            var reqUrl = '/cart/sessionCartItem';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * sessionCartItem
         * @param {long} sessionCartId - undefined
         * @param {string} itemKey - undefined
         * @param {string} parentKey - undefined
         * @param {boolean} includeDeletedItem - undefined
         * @param {object} callback - function to call once async action complete
         */
        sessionCartItem: function(sessionCartId, itemKey, parentKey, includeDeletedItem, callback) {
            var reqUrl = '/cart/sessionCartItem?&sessionCartId=${sessionCartId}&itemKey=${itemKey}&parentKey=${parentKey}&includeDeletedItem=${includeDeletedItem}';
            var params = {
                sessionCartId: sessionCartId,
                itemKey: itemKey,
                parentKey: parentKey,
                includeDeletedItem: includeDeletedItem
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * sessionCartItem
         * @param {long} sessionCartId - undefined
         * @param {string} itemKey - undefined
         * @param {boolean} includeDeletedItem - undefined
         * @param {object} callback - function to call once async action complete
         */
        sessionCartItem: function(sessionCartId, itemKey, includeDeletedItem, callback) {
            var reqUrl = '/cart/sessionCartItem?&sessionCartId=${sessionCartId}&itemKey=${itemKey}&includeDeletedItem=${includeDeletedItem}';
            var params = {
                sessionCartId: sessionCartId,
                itemKey: itemKey,
                includeDeletedItem: includeDeletedItem
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateSessionCartItems
         * @param {long} sessionCartId - undefined
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateSessionCartItems: function(sessionCartId, requestObject, callback) {
            var reqUrl = '/cart/sessionCartItems?&sessionCartId=${sessionCartId}';
            var params = {
                sessionCartId: sessionCartId
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * sessionCartItems
         * @param {long} sessionCartId - undefined
         * @param {object} callback - function to call once async action complete
         */
        sessionCartItems: function(sessionCartId, callback) {
            var reqUrl = '/cart/sessionCartItems?&sessionCartId=${sessionCartId}';
            var params = {
                sessionCartId: sessionCartId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * sessionCart
         * @param {long} sessionCartId - undefined
         * @param {object} callback - function to call once async action complete
         */
        sessionCart: function(sessionCartId, callback) {
            var reqUrl = '/cart/sessionCart?&sessionCartId=${sessionCartId}';
            var params = {
                sessionCartId: sessionCartId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateSessionCart
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateSessionCart: function(requestObject, callback) {
            var reqUrl = '/cart/sessionCart';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * sessionCart
         * @param {long} sessionCartId - undefined
         * @param {int} siteId - undefined
         * @param {boolean} recalculatePrice - undefined
         * @param {int} priceBookId - undefined
         * @param {boolean} updateCache - undefined
         * @param {object} callback - function to call once async action complete
         */
        sessionCart: function(sessionCartId, siteId, recalculatePrice, priceBookId, updateCache, callback) {
            var reqUrl = '/cart/sessionCart?&sessionCartId=${sessionCartId}&siteId=${siteId}&recalculatePrice=${recalculatePrice}&priceBookId=${priceBookId}&updateCache=${updateCache}';
            var params = {
                sessionCartId: sessionCartId,
                siteId: siteId,
                recalculatePrice: recalculatePrice,
                priceBookId: priceBookId,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * sessionCart
         * @param {long} sessionCartId - undefined
         * @param {int} siteId - undefined
         * @param {boolean} recalculatePrice - undefined
         * @param {int} priceBookId - undefined
         * @param {object} callback - function to call once async action complete
         */
        sessionCart: function(sessionCartId, siteId, recalculatePrice, priceBookId, callback) {
            var reqUrl = '/cart/sessionCart?&sessionCartId=${sessionCartId}&siteId=${siteId}&recalculatePrice=${recalculatePrice}&priceBookId=${priceBookId}';
            var params = {
                sessionCartId: sessionCartId,
                siteId: siteId,
                recalculatePrice: recalculatePrice,
                priceBookId: priceBookId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * cartItems
         * @param {string} cartId - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        cartItems: function(cartId, siteName, callback) {
            var reqUrl = '/cart/cartItems?&cartId=${cartId}&siteName=${siteName}';
            var params = {
                cartId: cartId,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * cartItem
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        cartItem: function(requestObject, callback) {
            var reqUrl = '/cart/cartItem';
            var params = {};
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCartItem
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateCartItem: function(requestObject, callback) {
            var reqUrl = '/cart/cartItem';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * cartItem
         * @param {string} cartId - undefined
         * @param {string} itemId - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        cartItem: function(cartId, itemId, siteName, callback) {
            var reqUrl = '/cart/cartItem?&cartId=${cartId}&itemId=${itemId}&siteName=${siteName}';
            var params = {
                cartId: cartId,
                itemId: itemId,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * cart
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        cart: function(requestObject, callback) {
            var reqUrl = '/cart/cart';
            var params = {};
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCart
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateCart: function(requestObject, callback) {
            var reqUrl = '/cart/cart';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * cart
         * @param {string} cartId - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        cart: function(cartId, siteName, callback) {
            var reqUrl = '/cart/cart?&cartId=${cartId}&siteName=${siteName}';
            var params = {
                cartId: cartId,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return cartService object
 * @type {Object}
 */
module.exports = cartService;
