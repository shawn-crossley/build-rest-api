/**
 * emailsService functions
 * @type {Object}
 */
var emailsService = function(buildApi) {
    return {

        /**
         * updateTransactionLog
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateTransactionLog: function(requestObject, callback) {
            var reqUrl = '/emails/transactionLog';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * returnMessageRequest
         * @param {object} callback - function to call once async action complete
         */
        returnMessageRequest: function(callback) {
            var reqUrl = '/emails/returnMessageRequest';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * messageRequest
         * @param {object} callback - function to call once async action complete
         */
        messageRequest: function(callback) {
            var reqUrl = '/emails/messageRequest';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateTemplate
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateTemplate: function(requestObject, callback) {
            var reqUrl = '/emails/template';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * amqp
         * @param {string} templateType - ACCOUNT_INFO, AUTO_RENEW, CANCELLATION_REQUEST, CROSS_DOCK_RGA_REQUEST, CROSS_DOCK_TRACKING_NUMBER, CS_REQUEST, CS_REQUEST_RESPONSE, CUSTOMER_EMAIL, DECLINED_CREDIT_CARD, DELIVERY_DATE_EMAIL, EBILLME_OVERPAYMENT, EBILLME_PARTIAL_PAYMENT, EBILLME_UNKNOWN_PAYMENT, EVERY_DAY_SAVINGS, FORGOT_PASSWORD, FREIGHT_DELIVERY, GENERIC_EMAIL, LEAD_TIME, MEMBERSHIP_RECEIPT, NEW_ACCOUNT, NEWSLETTER_SIGNUP, NPS_EMAIL, ORDER_CONFIRMATION, PO_NOTE, PRO_APPROVED, PRO_APPROVED_NEW_USER, PRO_SIGNUP, PRO_SIGNUP_PENDING, PRO_SIGNUP_PENDING_FINAL, PRO_SIGNUP_PENDING_TWO, PRO_UNCONVERTED_REMINDER, PRO_UNCONVERTED_REMINDER_FOUR, PRO_UNCONVERTED_REMINDER_THREE, PRO_UNCONVERTED_REMINDER_TWO, QUOTE, RENEW_REMINDER, RETURN_NCR, REVIEW_PRODUCTS, RGA_PROCESSED, RGA_REQUEST, TELL_A_FRIEND, TRACKING_NUMBER, TRIAL_ENDING, TRIAL_WELCOME, UPDATE_PROFILE, WELCOME, RISK_EMAIL, CART_REMINDER, DELIVERY_CONFIRMATION_EMAIL, CUSTOMER_EMAIL_RISK, CREDIT_REQUEST, PRICE_ALERT, NCR_ORDER_CHARGED, NCR_TEN_DAY_REMINDER
         * @param {object} callback - function to call once async action complete
         */
        amqp: function(templateType, callback) {
            var reqUrl = '/emails/amqp?&templateType=${templateType}';
            var params = {
                templateType: templateType
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return emailsService object
 * @type {Object}
 */
module.exports = emailsService;

