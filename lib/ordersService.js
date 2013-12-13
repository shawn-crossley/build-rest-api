/**
 * ordersService functions
 * @type {Object}
 */
var ordersService = function(buildApi) {
    return {

        /**
         * chargesEcrm
         * @param {int} customerId - undefined
         * @param {string} sortIndex - undefined
         * @param {string} sortOrder - undefined
         * @param {int} rows - undefined
         * @param {int} page - undefined
         * @param {object} callback - function to call once async action complete
         */
        chargesEcrm: function(customerId, sortIndex, sortOrder, rows, page, callback) {
            var reqUrl = '/orders/charges/ecrm?customerId=${customerId}sortIndex=${sortIndex}sortOrder=${sortOrder}rows=${rows}page=${page}';
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
         * chargesEcrmCount
         * @param {int} customerId - undefined
         * @param {object} callback - function to call once async action complete
         */
        chargesEcrmCount: function(customerId, callback) {
            var reqUrl = '/orders/charges/ecrmCount?&customerId=${customerId}';
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
         * @param {string} sortIndex - undefined
         * @param {string} sortOrder - undefined
         * @param {int} rows - undefined
         * @param {int} page - undefined
         * @param {object} callback - function to call once async action complete
         */
        ecrm: function(customerId, sortIndex, sortOrder, rows, page, callback) {
            var reqUrl = '/orders/ecrm?&customerId=${customerId}&sortIndex=${sortIndex}&sortOrder=${sortOrder}&rows=${rows}&page=${page}';
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
            var reqUrl = '/orders/ecrmCount?&customerId=${customerId}';
            var params = {
                customerId: customerId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCheckout
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateCheckout: function(requestObject, callback) {
            var reqUrl = '/orders/checkout';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateGenerateBol
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateGenerateBol: function(requestObject, callback) {
            var reqUrl = '/orders/generateBol';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * googlePayments
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        googlePayments: function(requestObject, callback) {
            var reqUrl = '/orders/googlePayments';
            var params = {};
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateGooglePayments
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateGooglePayments: function(requestObject, callback) {
            var reqUrl = '/orders/googlePayments';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * googlePayments
         * @param {string} googleTransactionId - undefined
         * @param {object} callback - function to call once async action complete
         */
        googlePayments: function(googleTransactionId, callback) {
            var reqUrl = '/orders/googlePayments?&googleTransactionId=${googleTransactionId}';
            var params = {
                googleTransactionId: googleTransactionId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * googlePayments
         * @param {int} paymentId - undefined
         * @param {object} callback - function to call once async action complete
         */
        googlePayments: function(paymentId, callback) {
            var reqUrl = '/orders/googlePayments?&paymentId=${paymentId}';
            var params = {
                paymentId: paymentId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * googlePayments
         * @param {int} googlePaymentId - undefined
         * @param {object} callback - function to call once async action complete
         */
        googlePayments: function(googlePaymentId, callback) {
            var reqUrl = '/orders/googlePayments?&googlePaymentId=${googlePaymentId}';
            var params = {
                googlePaymentId: googlePaymentId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updatePaypalPayments
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updatePaypalPayments: function(requestObject, callback) {
            var reqUrl = '/orders/paypalPayments';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * paypalPayments
         * @param {int} paypalOrderNumber - undefined
         * @param {object} callback - function to call once async action complete
         */
        paypalPayments: function(paypalOrderNumber, callback) {
            var reqUrl = '/orders/paypalPayments?&paypalOrderNumber=${paypalOrderNumber}';
            var params = {
                paypalOrderNumber: paypalOrderNumber
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * paypalPayments
         * @param {int} paymentId - undefined
         * @param {object} callback - function to call once async action complete
         */
        paypalPayments: function(paymentId, callback) {
            var reqUrl = '/orders/paypalPayments?&paymentId=${paymentId}';
            var params = {
                paymentId: paymentId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * paypalPayments
         * @param {int} paypalPaymentId - undefined
         * @param {object} callback - function to call once async action complete
         */
        paypalPayments: function(paypalPaymentId, callback) {
            var reqUrl = '/orders/paypalPayments/${paypalPaymentId}';
            var params = {
                paypalPaymentId: paypalPaymentId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * paypalPayments
         * @param {int} paypalPaymentId - undefined
         * @param {object} callback - function to call once async action complete
         */
        paypalPayments: function(paypalPaymentId, callback) {
            var reqUrl = '/orders/paypalPayments/${paypalPaymentId}';
            var params = {
                paypalPaymentId: paypalPaymentId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updatePaypalPendingOrders
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updatePaypalPendingOrders: function(requestObject, callback) {
            var reqUrl = '/orders/paypalPendingOrders';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * paypalPendingOrders
         * @param {int} paypalPendingOrderId - undefined
         * @param {object} callback - function to call once async action complete
         */
        paypalPendingOrders: function(paypalPendingOrderId, callback) {
            var reqUrl = '/orders/paypalPendingOrders/${paypalPendingOrderId}';
            var params = {
                paypalPendingOrderId: paypalPendingOrderId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * paypalPendingOrders
         * @param {int} paypalPendingOrderId - undefined
         * @param {object} callback - function to call once async action complete
         */
        paypalPendingOrders: function(paypalPendingOrderId, callback) {
            var reqUrl = '/orders/paypalPendingOrders/${paypalPendingOrderId}';
            var params = {
                paypalPendingOrderId: paypalPendingOrderId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCharges
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateCharges: function(requestObject, callback) {
            var reqUrl = '/orders/charges';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * charges
         * @param {int} orderNumber - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        charges: function(orderNumber, siteName, callback) {
            var reqUrl = '/orders/charges?&orderNumber=${orderNumber}&siteName=${siteName}';
            var params = {
                orderNumber: orderNumber,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * charges
         * @param {int} transId - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        charges: function(transId, siteName, callback) {
            var reqUrl = '/orders/charges?&transId=${transId}&siteName=${siteName}';
            var params = {
                transId: transId,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateTokenize
         * @param {string} cardNumber - undefined
         * @param {string} cvv - undefined
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateTokenize: function(cardNumber, cvv, requestObject, callback) {
            var reqUrl = '/orders/tokenize?&cardNumber=${cardNumber}&cvv=${cvv}';
            var params = {
                cardNumber: cardNumber,
                cvv: cvv
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateComposite
         * @param {string} cvv - undefined
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateComposite: function(cvv, requestObject, callback) {
            var reqUrl = '/orders/composite?&cvv=${cvv}';
            var params = {
                cvv: cvv
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * composite
         * @param {int} orderNumber - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        composite: function(orderNumber, siteName, callback) {
            var reqUrl = '/orders/composite/${orderNumber}?&siteName=${siteName}';
            var params = {
                orderNumber: orderNumber,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateOrders
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateOrders: function(requestObject, callback) {
            var reqUrl = '/orders/';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * orders
         * @param {int} orderNumber - undefined
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        orders: function(orderNumber, siteName, callback) {
            var reqUrl = '/orders/${orderNumber}?&siteName=${siteName}';
            var params = {
                orderNumber: orderNumber,
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return ordersService object
 * @type {Object}
 */
module.exports = ordersService;
