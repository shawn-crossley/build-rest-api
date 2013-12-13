/**
 * bloomreachService functions
 * @type {Object}
 */
var bloomreachService = function(buildApi) {
    return {

        /**
         * updateCache
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateCache: function(requestObject, callback) {
            var reqUrl = '/bloomreach/cache';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * bloomreach
         * @param {int} bloomReachPageId - undefined
         * @param {object} callback - function to call once async action complete
         */
        bloomreach: function(bloomReachPageId, callback) {
            var reqUrl = '/bloomreach/${bloomReachPageId}';
            var params = {
                bloomReachPageId: bloomReachPageId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateBloomreach
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateBloomreach: function(requestObject, callback) {
            var reqUrl = '/bloomreach/';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * bloomreach
         * @param {int} bloomReachPageTypeId - undefined
         * @param {int} referenceId - undefined
         * @param {object} callback - function to call once async action complete
         */
        bloomreach: function(bloomReachPageTypeId, referenceId, callback) {
            var reqUrl = '/bloomreach/?&bloomReachPageTypeId=${bloomReachPageTypeId}&referenceId=${referenceId}';
            var params = {
                bloomReachPageTypeId: bloomReachPageTypeId,
                referenceId: referenceId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return bloomreachService object
 * @type {Object}
 */
module.exports = bloomreachService;
