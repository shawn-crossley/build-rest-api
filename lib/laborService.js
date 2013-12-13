/**
 * laborService functions
 * @type {Object}
 */
var laborService = function(buildApi) {
    return {

        /**
         * zipcodes
         * @param {int} vendorServiceableZipCodeServiceId - undefined
         * @param {object} callback - function to call once async action complete
         */
        zipcodes: function(vendorServiceableZipCodeServiceId, callback) {
            var reqUrl = '/labor/zipcodes/${vendorServiceableZipCodeServiceId}';
            var params = {
                vendorServiceableZipCodeServiceId: vendorServiceableZipCodeServiceId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateZipcodes
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateZipcodes: function(requestObject, callback) {
            var reqUrl = '/labor/zipcodes';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * zipcodes
         * @param {string} zipCode - undefined
         * @param {object} callback - function to call once async action complete
         */
        zipcodes: function(zipCode, callback) {
            var reqUrl = '/labor/zipcodes?&zipCode=${zipCode}';
            var params = {
                zipCode: zipCode
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * zipcodes
         * @param {int} vendorServiceableZipCodeId - undefined
         * @param {int} serviceId - undefined
         * @param {object} callback - function to call once async action complete
         */
        zipcodes: function(vendorServiceableZipCodeId, serviceId, callback) {
            var reqUrl = '/labor/zipcodes?&vendorServiceableZipCodeId=${vendorServiceableZipCodeId}&serviceId=${serviceId}';
            var params = {
                vendorServiceableZipCodeId: vendorServiceableZipCodeId,
                serviceId: serviceId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * zipcodes
         * @param {int} vendorServiceableZipCodeServiceId - undefined
         * @param {object} callback - function to call once async action complete
         */
        zipcodes: function(vendorServiceableZipCodeServiceId, callback) {
            var reqUrl = '/labor/zipcodes?&vendorServiceableZipCodeServiceId=${vendorServiceableZipCodeServiceId}';
            var params = {
                vendorServiceableZipCodeServiceId: vendorServiceableZipCodeServiceId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * products
         * @param {int} productXServiceId - undefined
         * @param {object} callback - function to call once async action complete
         */
        products: function(productXServiceId, callback) {
            var reqUrl = '/labor/products/${productXServiceId}';
            var params = {
                productXServiceId: productXServiceId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateProducts
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateProducts: function(requestObject, callback) {
            var reqUrl = '/labor/products';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * products
         * @param {int} productUniqueId - undefined
         * @param {object} callback - function to call once async action complete
         */
        products: function(productUniqueId, callback) {
            var reqUrl = '/labor/products?&productUniqueId=${productUniqueId}';
            var params = {
                productUniqueId: productUniqueId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * products
         * @param {int} uniqueId - undefined
         * @param {int} serviceId - undefined
         * @param {object} callback - function to call once async action complete
         */
        products: function(uniqueId, serviceId, callback) {
            var reqUrl = '/labor/products?&uniqueId=${uniqueId}&serviceId=${serviceId}';
            var params = {
                uniqueId: uniqueId,
                serviceId: serviceId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * products
         * @param {int} productXServiceId - undefined
         * @param {object} callback - function to call once async action complete
         */
        products: function(productXServiceId, callback) {
            var reqUrl = '/labor/products?&productXServiceId=${productXServiceId}';
            var params = {
                productXServiceId: productXServiceId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * services
         * @param {int} serviceId - undefined
         * @param {object} callback - function to call once async action complete
         */
        services: function(serviceId, callback) {
            var reqUrl = '/labor/services/${serviceId}';
            var params = {
                serviceId: serviceId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * services
         * @param {string} unavailableZipCode - undefined
         * @param {int} unavailableProductUniqueId - undefined
         * @param {object} callback - function to call once async action complete
         */
        services: function(unavailableZipCode, unavailableProductUniqueId, callback) {
            var reqUrl = '/labor/services?&unavailableZipCode=${unavailableZipCode}&unavailableProductUniqueId=${unavailableProductUniqueId}';
            var params = {
                unavailableZipCode: unavailableZipCode,
                unavailableProductUniqueId: unavailableProductUniqueId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * services
         * @param {string} availableZipCode - undefined
         * @param {int} availableProductUniqueId - undefined
         * @param {object} callback - function to call once async action complete
         */
        services: function(availableZipCode, availableProductUniqueId, callback) {
            var reqUrl = '/labor/services?&availableZipCode=${availableZipCode}&availableProductUniqueId=${availableProductUniqueId}';
            var params = {
                availableZipCode: availableZipCode,
                availableProductUniqueId: availableProductUniqueId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * services
         * @param {string} type - undefined
         * @param {object} callback - function to call once async action complete
         */
        services: function(type, callback) {
            var reqUrl = '/labor/services?&type=${type}';
            var params = {
                type: type
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * services
         * @param {int} serviceTypeId - undefined
         * @param {object} callback - function to call once async action complete
         */
        services: function(serviceTypeId, callback) {
            var reqUrl = '/labor/services?&serviceTypeId=${serviceTypeId}';
            var params = {
                serviceTypeId: serviceTypeId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateServices
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateServices: function(requestObject, callback) {
            var reqUrl = '/labor/services';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * services
         * @param {string} externalServiceId - undefined
         * @param {object} callback - function to call once async action complete
         */
        services: function(externalServiceId, callback) {
            var reqUrl = '/labor/services?&externalServiceId=${externalServiceId}';
            var params = {
                externalServiceId: externalServiceId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * services
         * @param {int} serviceId - undefined
         * @param {object} callback - function to call once async action complete
         */
        services: function(serviceId, callback) {
            var reqUrl = '/labor/services?&serviceId=${serviceId}';
            var params = {
                serviceId: serviceId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return laborService object
 * @type {Object}
 */
module.exports = laborService;
