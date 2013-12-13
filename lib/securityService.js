/**
 * securityService functions
 * @type {Object}
 */
var securityService = function(buildApi) {
    return {

        /**
         * authenticateCustomer
         * @param {string} login - undefined
         * @param {string} password - undefined
         * @param {object} callback - function to call once async action complete
         */
        authenticateCustomer: function(login, password, callback) {
            var reqUrl = '/security/authenticate/customer?login=${login}password=${password}';
            var params = {
                login: login,
                password: password
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * authenticateUser
         * @param {string} userName - undefined
         * @param {string} password - undefined
         * @param {object} callback - function to call once async action complete
         */
        authenticateUser: function(userName, password, callback) {
            var reqUrl = '/security/authenticate/user?&userName=${userName}&password=${password}';
            var params = {
                userName: userName,
                password: password
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return securityService object
 * @type {Object}
 */
module.exports = securityService;
