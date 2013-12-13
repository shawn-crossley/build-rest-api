/**
 * returnsService functions
 * @type {Object}
 */
var returnsService = function(buildApi) {
    return {

        /**
         * ecrm
         * @param {int} customerId - undefined
         * @param {string} sortIndex - undefined
         * @param {string} sortOrder - undefined
         * @param {int} rows - undefined
         * @param {int} page - undefined
         * @param {object} callback - function to call once async action complete
         */
        ecrm: function(customerId, sortIndex, sortOrder, rows, page, callback) {
            var reqUrl = '/returns/ecrm?customerId=${customerId}sortIndex=${sortIndex}sortOrder=${sortOrder}rows=${rows}page=${page}';
            var params = {
                customerId: customerId,
                sortIndex: sortIndex,
                sortOrder: sortOrder,
                rows: rows,
                page: page
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * ecrmCount
         * @param {int} customerId - undefined
         * @param {object} callback - function to call once async action complete
         */
        ecrmCount: function(customerId, callback) {
            var reqUrl = '/returns/ecrmCount?&customerId=${customerId}';
            var params = {
                customerId: customerId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCreateReturn
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateCreateReturn: function(requestObject, callback) {
            var reqUrl = '/returns/createReturn';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCarts
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateCarts: function(requestObject, callback) {
            var reqUrl = '/returns/carts';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateReturns
         * @param {boolean} insert - undefined
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateReturns: function(insert, requestObject, callback) {
            var reqUrl = '/returns/?&insert=${insert}';
            var params = {
                insert: insert
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * composites
         * @param {int} returnId - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        composites: function(returnId, siteName, callback) {
            var reqUrl = '/returns/composites/${returnId}?&siteName=${siteName}';
            var params = {
                returnId: returnId,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * returns
         * @param {int} returnId - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        returns: function(returnId, siteName, callback) {
            var reqUrl = '/returns/${returnId}?&siteName=${siteName}';
            var params = {
                returnId: returnId,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * returns
         * @param {int} returnId - undefined
         * @param {object} callback - function to call once async action complete
         */
        returns: function(returnId, callback) {
            var reqUrl = '/returns/${returnId}';
            var params = {
                returnId: returnId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return returnsService object
 * @type {Object}
 */
module.exports = returnsService;
