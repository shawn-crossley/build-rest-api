/**
 * customersService functions
 * @type {Object}
 */
var customersService = function(buildApi) {
    return {

        /**
         * orderInfo
         * @param {int} customerId - undefined
         * @param {object} callback - function to call once async action complete
         */
        orderInfo: function(customerId, callback) {
            var reqUrl = '/customers/orderInfo/${customerId}';
            var params = {
                customerId: customerId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * ecrm
         * @param {int} customerId - undefined
         * @param {object} callback - function to call once async action complete
         */
        ecrm: function(customerId, callback) {
            var reqUrl = '/customers/${customerId}/ecrm';
            var params = {
                customerId: customerId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateGetMatchingAddressId
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateGetMatchingAddressId: function(requestObject, callback) {
            var reqUrl = '/customers/getMatchingAddressId';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCreditCards
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateCreditCards: function(requestObject, callback) {
            var reqUrl = '/customers/creditCards';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * creditCards
         * @param {int} creditCardId - undefined
         * @param {object} callback - function to call once async action complete
         */
        creditCards: function(creditCardId, callback) {
            var reqUrl = '/customers/creditCards/${creditCardId}';
            var params = {
                creditCardId: creditCardId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateAddresses
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateAddresses: function(requestObject, callback) {
            var reqUrl = '/customers/addresses';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * addresses
         * @param {int} addressId - undefined
         * @param {object} callback - function to call once async action complete
         */
        addresses: function(addressId, callback) {
            var reqUrl = '/customers/addresses/${addressId}';
            var params = {
                addressId: addressId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * composites
         * @param {string} buyerId - undefined
         * @param {object} callback - function to call once async action complete
         */
        composites: function(buyerId, callback) {
            var reqUrl = '/customers/composites?&buyerId=${buyerId}';
            var params = {
                buyerId: buyerId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * composites
         * @param {int} customerId - undefined
         * @param {object} callback - function to call once async action complete
         */
        composites: function(customerId, callback) {
            var reqUrl = '/customers/composites/${customerId}';
            var params = {
                customerId: customerId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCustomers
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateCustomers: function(requestObject, callback) {
            var reqUrl = '/customers/';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCustomers
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateCustomers: function(requestObject, callback) {
            var reqUrl = '/customers/';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * customers
         * @param {string} buyerId - undefined
         * @param {object} callback - function to call once async action complete
         */
        customers: function(buyerId, callback) {
            var reqUrl = '/customers/?&buyerId=${buyerId}';
            var params = {
                buyerId: buyerId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * customers
         * @param {int} customerId - undefined
         * @param {object} callback - function to call once async action complete
         */
        customers: function(customerId, callback) {
            var reqUrl = '/customers/${customerId}';
            var params = {
                customerId: customerId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return customersService object
 * @type {Object}
 */
module.exports = customersService;

