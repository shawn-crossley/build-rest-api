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
/** Sample Calls
var api = require('./lib/build-api.js'),
client = new api.BuildApiClient('http://devbox2:8080/build-webservices-1.0.0/services/', '');

function log(err,data,callback){
if (err != null){
console.log('Error:' + err);
}
console.log(data);
if (callback !=null){
callback(err,data);
}
}
client.updateUpdatepriceinventorybympn(requestObject,log);
client.updateBuilders(uniqueId, log);

*/
