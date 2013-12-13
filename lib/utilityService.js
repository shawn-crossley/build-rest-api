/**
 * utilityService functions
 * @type {Object}
 */
var utilityService = function(buildApi) {
    return {

        /**
         * stores
         * @param {int} storeId - undefined
         * @param {boolean} updateCache - undefined
         * @param {object} callback - function to call once async action complete
         */
        stores: function(storeId, updateCache, callback) {
            var reqUrl = '/utility/stores/${storeId}?updateCache=${updateCache}';
            var params = {
                storeId: storeId,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * sitesId
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        sitesId: function(siteName, callback) {
            var reqUrl = '/utility/sites/id?&siteName=${siteName}';
            var params = {
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * sites
         * @param {object} callback - function to call once async action complete
         */
        sites: function(callback) {
            var reqUrl = '/utility/sites';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * sites
         * @param {string} siteName - undefined
         * @param {object} callback - function to call once async action complete
         */
        sites: function(siteName, callback) {
            var reqUrl = '/utility/sites?&siteName=${siteName}';
            var params = {
                siteName: siteName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * sites
         * @param {int} siteId - undefined
         * @param {object} callback - function to call once async action complete
         */
        sites: function(siteId, callback) {
            var reqUrl = '/utility/sites?&siteId=${siteId}';
            var params = {
                siteId: siteId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * stateAbbrs
         * @param {string} zipCode - undefined
         * @param {object} callback - function to call once async action complete
         */
        stateAbbrs: function(zipCode, callback) {
            var reqUrl = '/utility/stateAbbrs?&zipCode=${zipCode}';
            var params = {
                zipCode: zipCode
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * stateAbbrs
         * @param {string} stateName - undefined
         * @param {object} callback - function to call once async action complete
         */
        stateAbbrs: function(stateName, callback) {
            var reqUrl = '/utility/stateAbbrs?&stateName=${stateName}';
            var params = {
                stateName: stateName
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * programControls
         * @param {string} programId - undefined
         * @param {int} userId - undefined
         * @param {object} callback - function to call once async action complete
         */
        programControls: function(programId, userId, callback) {
            var reqUrl = '/utility/programControls?&programId=${programId}&userId=${userId}';
            var params = {
                programId: programId,
                userId: userId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * programControls
         * @param {string} programId - undefined
         * @param {object} callback - function to call once async action complete
         */
        programControls: function(programId, callback) {
            var reqUrl = '/utility/programControls?&programId=${programId}';
            var params = {
                programId: programId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * programControls
         * @param {int} id - undefined
         * @param {object} callback - function to call once async action complete
         */
        programControls: function(id, callback) {
            var reqUrl = '/utility/programControls/${id}';
            var params = {
                id: id
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return utilityService object
 * @type {Object}
 */
module.exports = utilityService;
