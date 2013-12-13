/**
 * fileService functions
 * @type {Object}
 */
var fileService = function(buildApi) {
    return {

        /**
         * updateUpload
         * @param {string} filePath - undefined
         * @param {string} fileType - BAD, PRICEBOOK_CSV, IMAP_CSV, VENDOR_COST_CSV
         * @param {int} isAdmin - undefined
         * @param {int} userId - undefined
         * @param {object} callback - function to call once async action complete
         */
        updateUpload: function(filePath, fileType, isAdmin, userId, callback) {
            var reqUrl = '/file/upload?filePath=${filePath}fileType=${fileType}isAdmin=${isAdmin}userId=${userId}';
            var params = {
                filePath: filePath,
                fileType: fileType,
                isAdmin: isAdmin,
                userId: userId
            };
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return fileService object
 * @type {Object}
 */
module.exports = fileService;
