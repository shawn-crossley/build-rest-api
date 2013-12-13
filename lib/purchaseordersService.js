/**
 * purchaseordersService functions
 * @type {Object}
 */
var purchaseordersService = function(buildApi) {
    return {

        /**
         * updateRunDynamicShipping
         * @param {int} purchaseOrderNumber - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        updateRunDynamicShipping: function(purchaseOrderNumber, siteName, callback) {
            var reqUrl = '/purchaseorders/runDynamicShipping?purchaseOrderNumber=${purchaseOrderNumber}siteName=${siteName}';
            var params = {
                purchaseOrderNumber: purchaseOrderNumber,
                siteName: siteName
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateFilter
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateFilter: function(requestObject, callback) {
            var reqUrl = '/purchaseorders/filter';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateRule
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateRule: function(requestObject, callback) {
            var reqUrl = '/purchaseorders/rule';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateSourceOrder
         * @param {int} orderNumber - undefined
         * @param {object} callback - function to call once async action complete
         */
        updateSourceOrder: function(orderNumber, callback) {
            var reqUrl = '/purchaseorders/sourceOrder/${orderNumber}';
            var params = {
                orderNumber: orderNumber
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * poTracking
         * @param {int} poNumber - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        poTracking: function(poNumber, siteName, callback) {
            var reqUrl = '/purchaseorders/poTracking?&poNumber=${poNumber}&siteName=${siteName}';
            var params = {
                poNumber: poNumber,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * poCartItems
         * @param {int} uniqueId - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        poCartItems: function(uniqueId, siteName, callback) {
            var reqUrl = '/purchaseorders/poCartItems?&uniqueId=${uniqueId}&siteName=${siteName}';
            var params = {
                uniqueId: uniqueId,
                siteName: siteName
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updatePoCartItems
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updatePoCartItems: function(requestObject, callback) {
            var reqUrl = '/purchaseorders/poCartItems';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * poCartItems
         * @param {int} transId - undefined
         * @param {string} siteName - undefined
         * @param {string} status - undefined
         * @param {object} callback - function to call once async action complete
         */
        poCartItems: function(transId, siteName, status, callback) {
            var reqUrl = '/purchaseorders/poCartItems?&transId=${transId}&siteName=${siteName}&status=${status}';
            var params = {
                transId: transId,
                siteName: siteName,
                status: status
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * poCartItems
         * @param {int} poNumber - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        poCartItems: function(poNumber, siteName, callback) {
            var reqUrl = '/purchaseorders/poCartItems?&poNumber=${poNumber}&siteName=${siteName}';
            var params = {
                poNumber: poNumber,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * poCartItems
         * @param {int} uniqueId - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        poCartItems: function(uniqueId, siteName, callback) {
            var reqUrl = '/purchaseorders/poCartItems/${uniqueId}?&siteName=${siteName}';
            var params = {
                uniqueId: uniqueId,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updatePurchaseorders
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updatePurchaseorders: function(requestObject, callback) {
            var reqUrl = '/purchaseorders/';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * purchaseorders
         * @param {int} orderNumber - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        purchaseorders: function(orderNumber, siteName, callback) {
            var reqUrl = '/purchaseorders/?&orderNumber=${orderNumber}&siteName=${siteName}';
            var params = {
                orderNumber: orderNumber,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * composite
         * @param {int} poNumber - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        composite: function(poNumber, siteName, callback) {
            var reqUrl = '/purchaseorders/composite/${poNumber}?&siteName=${siteName}';
            var params = {
                poNumber: poNumber,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * purchaseorders
         * @param {int} poNumber - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        purchaseorders: function(poNumber, siteName, callback) {
            var reqUrl = '/purchaseorders/${poNumber}?&siteName=${siteName}';
            var params = {
                poNumber: poNumber,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/** 
 * Return purchaseordersService object
 * @type {Object}
 */
module.exports = purchaseordersService;
/** Sample Calls
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
client.updateRunDynamicShipping(purchaseOrderNumber, siteName, log);
client.updateFilter(requestObject,log);
client.updateRule(requestObject,log);
client.updateSourceOrder(orderNumber, log);
client.poTracking(poNumber, siteName, log);
client.poCartItems(uniqueId, siteName, log);
client.updatePoCartItems(requestObject,log);
client.poCartItems(transId, siteName, status, log);
client.poCartItems(poNumber, siteName, log);
client.poCartItems(uniqueId, siteName, log);
client.updatePurchaseorders(requestObject,log);
client.purchaseorders(orderNumber, siteName, log);
client.composite(poNumber, siteName, log);
client.purchaseorders(poNumber, siteName, log);

*/
