/**
 * fergusonService functions
 * @type {Object}
 */
var fergusonService = function(buildApi) {
    return {

        /**
         * updateUpdatepriceinventorybympn
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateUpdatepriceinventorybympn: function(requestObject, callback) {
            var reqUrl = '/ferguson/updatepriceinventorybympn';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateBuilders
         * @param {int} uniqueId - undefined
         * @param {object} callback - function to call once async action complete
         */
        updateBuilders: function(uniqueId, callback) {
            var reqUrl = '/ferguson/builders?&uniqueId=${uniqueId}';
            var params = {
                uniqueId: uniqueId
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return fergusonService object
 * @type {Object}
 */
module.exports = fergusonService;
