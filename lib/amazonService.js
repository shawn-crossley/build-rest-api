/**
 * amazonService functions
 * @type {Object}
 */
var amazonService = function(buildApi) {
    return {

        /**
         * updateCharge
         * @param {int} orderNumber - undefined
         * @param {double} amount - undefined
         * @param {int} transactionId - undefined
         * @param {string} approvedBy - undefined
         * @param {object} callback - function to call once async action complete
         */
        updateCharge: function(orderNumber, amount, transactionId, approvedBy, callback) {
            var reqUrl = '/amazon/charge?orderNumber=${orderNumber}amount=${amount}transactionId=${transactionId}approvedBy=${approvedBy}';
            var params = {
                orderNumber: orderNumber,
                amount: amount,
                transactionId: transactionId,
                approvedBy: approvedBy
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCredit
         * @param {int} orderNumber - undefined
         * @param {double} amount - undefined
         * @param {int} transactionId - undefined
         * @param {string} approvedBy - undefined
         * @param {object} callback - function to call once async action complete
         */
        updateCredit: function(orderNumber, amount, transactionId, approvedBy, callback) {
            var reqUrl = '/amazon/credit?&orderNumber=${orderNumber}&amount=${amount}&transactionId=${transactionId}&approvedBy=${approvedBy}';
            var params = {
                orderNumber: orderNumber,
                amount: amount,
                transactionId: transactionId,
                approvedBy: approvedBy
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * orderReference
         * @param {string} orderReferenceId - undefined
         * @param {object} callback - function to call once async action complete
         */
        orderReference: function(orderReferenceId, callback) {
            var reqUrl = '/amazon/orderReference?&orderReferenceId=${orderReferenceId}';
            var params = {
                orderReferenceId: orderReferenceId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return amazonService object
 * @type {Object}
 */
module.exports = amazonService;

