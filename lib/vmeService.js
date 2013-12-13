/**
 * vmeService functions
 * @type {Object}
 */
var vmeService = function(buildApi) {
    return {

        /**
         * updateCharge
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateCharge: function(requestObject, callback) {
            var reqUrl = '/vme/charge';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCredit
         * @param {int} transId - undefined
         * @param {string} siteName - undefined
         * @param {string} approvedBy - undefined
         * @param {object} callback - function to call once async action complete
         */
        updateCredit: function(transId, siteName, approvedBy, callback) {
            var reqUrl = '/vme/credit?&transId=${transId}&siteName=${siteName}&approvedBy=${approvedBy}';
            var params = {
                transId: transId,
                siteName: siteName,
                approvedBy: approvedBy
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCreateCustomerAccount
         * @param {long} callId - undefined
         * @param {string} siteName - undefined
         * @param {int} customerId - undefined
         * @param {object} callback - function to call once async action complete
         */
        updateCreateCustomerAccount: function(callId, siteName, customerId, callback) {
            var reqUrl = '/vme/createCustomerAccount?&callId=${callId}&siteName=${siteName}&customerId=${customerId}';
            var params = {
                callId: callId,
                siteName: siteName,
                customerId: customerId
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return vmeService object
 * @type {Object}
 */
module.exports = vmeService;
