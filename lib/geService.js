/**
 * geService functions
 * @type {Object}
 */
var geService = function(buildApi) {
    return {

        /**
         * sendGeOrders
         * @param {object} callback - function to call once async action complete
         */
        sendGeOrders: function(callback) {
            var reqUrl = '/ge/sendGeOrders';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * realAvailability
         * @param {string} productId - undefined
         * @param {string} manufacturer - undefined
         * @param {string} zipCode - undefined
         * @param {object} callback - function to call once async action complete
         */
        realAvailability: function(productId, manufacturer, zipCode, callback) {
            var reqUrl = '/ge/realAvailability?&productId=${productId}&manufacturer=${manufacturer}&zipCode=${zipCode}';
            var params = {
                productId: productId,
                manufacturer: manufacturer,
                zipCode: zipCode
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * realAvailability
         * @param {int} uniqueId - undefined
         * @param {string} zipCode - undefined
         * @param {object} callback - function to call once async action complete
         */
        realAvailability: function(uniqueId, zipCode, callback) {
            var reqUrl = '/ge/realAvailability?&uniqueId=${uniqueId}&zipCode=${zipCode}';
            var params = {
                uniqueId: uniqueId,
                zipCode: zipCode
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * modelAvailability
         * @param {string} productId - undefined
         * @param {string} manufacturer - undefined
         * @param {string} zipCode - undefined
         * @param {object} callback - function to call once async action complete
         */
        modelAvailability: function(productId, manufacturer, zipCode, callback) {
            var reqUrl = '/ge/modelAvailability?&productId=${productId}&manufacturer=${manufacturer}&zipCode=${zipCode}';
            var params = {
                productId: productId,
                manufacturer: manufacturer,
                zipCode: zipCode
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * modelAvailability
         * @param {int} uniqueId - undefined
         * @param {string} zipCode - undefined
         * @param {object} callback - function to call once async action complete
         */
        modelAvailability: function(uniqueId, zipCode, callback) {
            var reqUrl = '/ge/modelAvailability?&uniqueId=${uniqueId}&zipCode=${zipCode}';
            var params = {
                uniqueId: uniqueId,
                zipCode: zipCode
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateReserveDeliveryDate
         * @param {int} poNumber - undefined
         * @param {object} callback - function to call once async action complete
         */
        updateReserveDeliveryDate: function(poNumber, callback) {
            var reqUrl = '/ge/reserveDeliveryDate/${poNumber}';
            var params = {
                poNumber: poNumber
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateValidateCart
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateValidateCart: function(requestObject, callback) {
            var reqUrl = '/ge/validateCart';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * deliveryDate
         * @param {int} poNumber - undefined
         * @param {object} callback - function to call once async action complete
         */
        deliveryDate: function(poNumber, callback) {
            var reqUrl = '/ge/deliveryDate/${poNumber}';
            var params = {
                poNumber: poNumber
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * deliveryAvailability
         * @param {string} zipCode - undefined
         * @param {object} callback - function to call once async action complete
         */
        deliveryAvailability: function(zipCode, callback) {
            var reqUrl = '/ge/deliveryAvailability/${zipCode}';
            var params = {
                zipCode: zipCode
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * requestDeliveryZipCodes
         * @param {object} callback - function to call once async action complete
         */
        requestDeliveryZipCodes: function(callback) {
            var reqUrl = '/ge/requestDeliveryZipCodes';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return geService object
 * @type {Object}
 */
module.exports = geService;

