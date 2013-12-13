/**
 * competitorService functions
 * @type {Object}
 */
var competitorService = function(buildApi) {
    return {

        /**
         * duplicates
         * @param {string} competitorName - undefined
         * @param {object} callback - function to call once async action complete
         */
        duplicates: function(competitorName, callback) {
            var reqUrl = '/competitor/duplicates/${competitorName}';
            var params = {
                competitorName: competitorName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCompetitors
         * @param {int} competitorId - undefined
         * @param {string} competitorName - undefined
         * @param {boolean} active - undefined
         * @param {object} callback - function to call once async action complete
         */
        updateCompetitors: function(competitorId, competitorName, active, callback) {
            var reqUrl = '/competitor/competitors/${competitorId}/{competitorName}/{active}';
            var params = {
                competitorId: competitorId,
                competitorName: competitorName,
                active: active
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCompetitors
         * @param {string} competitorName - undefined
         * @param {boolean} active - undefined
         * @param {object} callback - function to call once async action complete
         */
        updateCompetitors: function(competitorName, active, callback) {
            var reqUrl = '/competitor/competitors/${competitorName}/{active}';
            var params = {
                competitorName: competitorName,
                active: active
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateCompetitors
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateCompetitors: function(requestObject, callback) {
            var reqUrl = '/competitor/competitors';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * competitorsActives
         * @param {boolean} active - undefined
         * @param {object} callback - function to call once async action complete
         */
        competitorsActives: function(active, callback) {
            var reqUrl = '/competitor/competitors/actives/${active}';
            var params = {
                active: active
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * competitorsAll
         * @param {object} callback - function to call once async action complete
         */
        competitorsAll: function(callback) {
            var reqUrl = '/competitor/competitors/all';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * names
         * @param {string} competitorName - undefined
         * @param {object} callback - function to call once async action complete
         */
        names: function(competitorName, callback) {
            var reqUrl = '/competitor/names/${competitorName}';
            var params = {
                competitorName: competitorName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * competitors
         * @param {int} competitorId - undefined
         * @param {object} callback - function to call once async action complete
         */
        competitors: function(competitorId, callback) {
            var reqUrl = '/competitor/competitors/${competitorId}';
            var params = {
                competitorId: competitorId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * competitors
         * @param {int} competitorId - undefined
         * @param {object} callback - function to call once async action complete
         */
        competitors: function(competitorId, callback) {
            var reqUrl = '/competitor/competitors/${competitorId}';
            var params = {
                competitorId: competitorId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return competitorService object
 * @type {Object}
 */
module.exports = competitorService;
