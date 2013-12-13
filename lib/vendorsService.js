/**
 * vendorsService functions
 * @type {Object}
 */
var vendorsService = function(buildApi) {
    return {

        /**
         * vendorshiptimesbyvendoruid
         * @param {int} vendorUId - undefined
         * @param {object} callback - function to call once async action complete
         */
        vendorshiptimesbyvendoruid: function(vendorUId, callback) {
            var reqUrl = '/vendors/vendorshiptimesbyvendoruid?vendorUId=${vendorUId}';
            var params = {
                vendorUId: vendorUId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * nameValuePairByManufacturerName
         * @param {string} manufacturerName - undefined
         * @param {object} callback - function to call once async action complete
         */
        nameValuePairByManufacturerName: function(manufacturerName, callback) {
            var reqUrl = '/vendors/nameValuePairByManufacturerName?&manufacturerName=${manufacturerName}';
            var params = {
                manufacturerName: manufacturerName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * allVendorNameValuePairs
         * @param {object} callback - function to call once async action complete
         */
        allVendorNameValuePairs: function(callback) {
            var reqUrl = '/vendors/allVendorNameValuePairs';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * vendorswithshiptimes
         * @param {object} callback - function to call once async action complete
         */
        vendorswithshiptimes: function(callback) {
            var reqUrl = '/vendors/vendorswithshiptimes';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * vendorshiptimes
         * @param {object} callback - function to call once async action complete
         */
        vendorshiptimes: function(callback) {
            var reqUrl = '/vendors/vendorshiptimes';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * vendorshiptime
         * @param {int} shipTimeId - undefined
         * @param {object} callback - function to call once async action complete
         */
        vendorshiptime: function(shipTimeId, callback) {
            var reqUrl = '/vendors/vendorshiptime?&shipTimeId=${shipTimeId}';
            var params = {
                shipTimeId: shipTimeId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * addVendorshiptime
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        addVendorshiptime: function(requestObject, callback) {
            var reqUrl = '/vendors/vendorshiptime';
            var params = {};
            buildApi.callApi('PUT', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateVendorshiptime
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateVendorshiptime: function(requestObject, callback) {
            var reqUrl = '/vendors/vendorshiptime';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * vendorshiptime
         * @param {int} Id - undefined
         * @param {object} callback - function to call once async action complete
         */
        vendorshiptime: function(Id, callback) {
            var reqUrl = '/vendors/vendorshiptime?&Id=${Id}';
            var params = {
                Id: Id
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * all
         * @param {object} callback - function to call once async action complete
         */
        all: function(callback) {
            var reqUrl = '/vendors/all';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * byManufacturer
         * @param {string} manufacturerName - undefined
         * @param {object} callback - function to call once async action complete
         */
        byManufacturer: function(manufacturerName, callback) {
            var reqUrl = '/vendors/byManufacturer?&manufacturerName=${manufacturerName}';
            var params = {
                manufacturerName: manufacturerName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * find
         * @param {int} vendorUid - undefined
         * @param {string} vendorId - undefined
         * @param {string} vendorName - undefined
         * @param {string} sortIndex - undefined
         * @param {string} sortOrder - undefined
         * @param {int} offset - undefined
         * @param {int} limit - undefined
         * @param {object} callback - function to call once async action complete
         */
        find: function(vendorUid, vendorId, vendorName, sortIndex, sortOrder, offset, limit, callback) {
            var reqUrl = '/vendors/find?&vendorUid=${vendorUid}&vendorId=${vendorId}&vendorName=${vendorName}&sortIndex=${sortIndex}&sortOrder=${sortOrder}&offset=${offset}&limit=${limit}';
            var params = {
                vendorUid: vendorUid,
                vendorId: vendorId,
                vendorName: vendorName,
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
         * queryCount
         * @param {int} vendorUid - undefined
         * @param {string} vendorId - undefined
         * @param {string} vendorName - undefined
         * @param {object} callback - function to call once async action complete
         */
        queryCount: function(vendorUid, vendorId, vendorName, callback) {
            var reqUrl = '/vendors/queryCount?&vendorUid=${vendorUid}&vendorId=${vendorId}&vendorName=${vendorName}';
            var params = {
                vendorUid: vendorUid,
                vendorId: vendorId,
                vendorName: vendorName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * groups
         * @param {int} vendorGroupId - undefined
         * @param {object} callback - function to call once async action complete
         */
        groups: function(vendorGroupId, callback) {
            var reqUrl = '/vendors/groups/${vendorGroupId}';
            var params = {
                vendorGroupId: vendorGroupId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * groups
         * @param {string} vendorId - undefined
         * @param {object} callback - function to call once async action complete
         */
        groups: function(vendorId, callback) {
            var reqUrl = '/vendors/groups?&vendorId=${vendorId}';
            var params = {
                vendorId: vendorId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * groups
         * @param {object} callback - function to call once async action complete
         */
        groups: function(callback) {
            var reqUrl = '/vendors/groups';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * removeUnconfirmedVendorServiceableZipCode
         * @param {object} callback - function to call once async action complete
         */
        removeUnconfirmedVendorServiceableZipCode: function(callback) {
            var reqUrl = '/vendors/removeUnconfirmedVendorServiceableZipCode';
            var params = {};
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * resetConfirmZipVendorServiceableZipCode
         * @param {object} callback - function to call once async action complete
         */
        resetConfirmZipVendorServiceableZipCode: function(callback) {
            var reqUrl = '/vendors/resetConfirmZipVendorServiceableZipCode';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * serviceableZipCodes
         * @param {int} vendorServiceableZipCodeId - undefined
         * @param {object} callback - function to call once async action complete
         */
        serviceableZipCodes: function(vendorServiceableZipCodeId, callback) {
            var reqUrl = '/vendors/serviceableZipCodes/${vendorServiceableZipCodeId}';
            var params = {
                vendorServiceableZipCodeId: vendorServiceableZipCodeId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateServiceableZipCodes
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateServiceableZipCodes: function(requestObject, callback) {
            var reqUrl = '/vendors/serviceableZipCodes';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * serviceableZipCodes
         * @param {int} vendorServiceableZipCodeId - undefined
         * @param {int} vendorUid - undefined
         * @param {string} zipCode - undefined
         * @param {object} callback - function to call once async action complete
         */
        serviceableZipCodes: function(vendorServiceableZipCodeId, vendorUid, zipCode, callback) {
            var reqUrl = '/vendors/serviceableZipCodes?&vendorServiceableZipCodeId=${vendorServiceableZipCodeId}&vendorUid=${vendorUid}&zipCode=${zipCode}';
            var params = {
                vendorServiceableZipCodeId: vendorServiceableZipCodeId,
                vendorUid: vendorUid,
                zipCode: zipCode
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * vendorInventory
         * @param {string} vendorId - undefined
         * @param {string} sku - undefined
         * @param {object} callback - function to call once async action complete
         */
        vendorInventory: function(vendorId, sku, callback) {
            var reqUrl = '/vendors/vendorInventory?&vendorId=${vendorId}&sku=${sku}';
            var params = {
                vendorId: vendorId,
                sku: sku
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * inventory
         * @param {string} productId - undefined
         * @param {string} manufacturer - undefined
         * @param {string} finish - undefined
         * @param {object} callback - function to call once async action complete
         */
        inventory: function(productId, manufacturer, finish, callback) {
            var reqUrl = '/vendors/inventory?&productId=${productId}&manufacturer=${manufacturer}&finish=${finish}';
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
         * updateVendorMapping
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateVendorMapping: function(requestObject, callback) {
            var reqUrl = '/vendors/vendorMapping';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * vendorMapping
         * @param {string} productId - undefined
         * @param {string} finish - undefined
         * @param {string} manufacturer - undefined
         * @param {string} vendor - undefined
         * @param {object} callback - function to call once async action complete
         */
        vendorMapping: function(productId, finish, manufacturer, vendor, callback) {
            var reqUrl = '/vendors/vendorMapping?&productId=${productId}&finish=${finish}&manufacturer=${manufacturer}&vendor=${vendor}';
            var params = {
                productId: productId,
                finish: finish,
                manufacturer: manufacturer,
                vendor: vendor
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateVendorPricing
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateVendorPricing: function(requestObject, callback) {
            var reqUrl = '/vendors/vendorPricing';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * vendorPricing
         * @param {string} vendorId - undefined
         * @param {string} sku - undefined
         * @param {object} callback - function to call once async action complete
         */
        vendorPricing: function(vendorId, sku, callback) {
            var reqUrl = '/vendors/vendorPricing?&vendorId=${vendorId}&sku=${sku}';
            var params = {
                vendorId: vendorId,
                sku: sku
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * costs
         * @param {int} uniqueId - undefined
         * @param {double} cost - undefined
         * @param {object} callback - function to call once async action complete
         */
        costs: function(uniqueId, cost, callback) {
            var reqUrl = '/vendors/costs?&uniqueId=${uniqueId}&cost=${cost}';
            var params = {
                uniqueId: uniqueId,
                cost: cost
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCosts
         * @param {int} vendorUid - undefined
         * @param {int} uniqueId - undefined
         * @param {int} pricedOptionId - undefined
         * @param {double} cost - undefined
         * @param {object} callback - function to call once async action complete
         */
        updateCosts: function(vendorUid, uniqueId, pricedOptionId, cost, callback) {
            var reqUrl = '/vendors/costs?&vendorUid=${vendorUid}&uniqueId=${uniqueId}&pricedOptionId=${pricedOptionId}&cost=${cost}';
            var params = {
                vendorUid: vendorUid,
                uniqueId: uniqueId,
                pricedOptionId: pricedOptionId,
                cost: cost
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCosts
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateCosts: function(requestObject, callback) {
            var reqUrl = '/vendors/costs';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * costs
         * @param {int} vendorUid - undefined
         * @param {string} productId - undefined
         * @param {string} manufacturer - undefined
         * @param {string} finish - undefined
         * @param {int} pricedOptionId - undefined
         * @param {object} callback - function to call once async action complete
         */
        costs: function(vendorUid, productId, manufacturer, finish, pricedOptionId, callback) {
            var reqUrl = '/vendors/costs?&vendorUid=${vendorUid}&productId=${productId}&manufacturer=${manufacturer}&finish=${finish}&pricedOptionId=${pricedOptionId}';
            var params = {
                vendorUid: vendorUid,
                productId: productId,
                manufacturer: manufacturer,
                finish: finish,
                pricedOptionId: pricedOptionId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * costs
         * @param {int} vendorUid - undefined
         * @param {int} uniqueId - undefined
         * @param {int} pricedOptionId - undefined
         * @param {object} callback - function to call once async action complete
         */
        costs: function(vendorUid, uniqueId, pricedOptionId, callback) {
            var reqUrl = '/vendors/costs?&vendorUid=${vendorUid}&uniqueId=${uniqueId}&pricedOptionId=${pricedOptionId}';
            var params = {
                vendorUid: vendorUid,
                uniqueId: uniqueId,
                pricedOptionId: pricedOptionId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * costs
         * @param {int} vendorUid - undefined
         * @param {int} uniqueId - undefined
         * @param {int} pricedOptionId - undefined
         * @param {object} callback - function to call once async action complete
         */
        costs: function(vendorUid, uniqueId, pricedOptionId, callback) {
            var reqUrl = '/vendors/costs?&vendorUid=${vendorUid}&uniqueId=${uniqueId}&pricedOptionId=${pricedOptionId}';
            var params = {
                vendorUid: vendorUid,
                uniqueId: uniqueId,
                pricedOptionId: pricedOptionId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * costs
         * @param {int} vendorCostId - undefined
         * @param {object} callback - function to call once async action complete
         */
        costs: function(vendorCostId, callback) {
            var reqUrl = '/vendors/costs/${vendorCostId}';
            var params = {
                vendorCostId: vendorCostId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * costs
         * @param {int} vendorCostId - undefined
         * @param {object} callback - function to call once async action complete
         */
        costs: function(vendorCostId, callback) {
            var reqUrl = '/vendors/costs/${vendorCostId}';
            var params = {
                vendorCostId: vendorCostId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateVendors
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateVendors: function(requestObject, callback) {
            var reqUrl = '/vendors/';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * vendors
         * @param {string} vendorId - undefined
         * @param {object} callback - function to call once async action complete
         */
        vendors: function(vendorId, callback) {
            var reqUrl = '/vendors/?&vendorId=${vendorId}';
            var params = {
                vendorId: vendorId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * vendors
         * @param {int} vendorUid - undefined
         * @param {object} callback - function to call once async action complete
         */
        vendors: function(vendorUid, callback) {
            var reqUrl = '/vendors/${vendorUid}';
            var params = {
                vendorUid: vendorUid
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * vendors
         * @param {int} vendorUid - undefined
         * @param {object} callback - function to call once async action complete
         */
        vendors: function(vendorUid, callback) {
            var reqUrl = '/vendors/${vendorUid}';
            var params = {
                vendorUid: vendorUid
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return vendorsService object
 * @type {Object}
 */
module.exports = vendorsService;
