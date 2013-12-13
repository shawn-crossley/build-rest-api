/**
 * upsService functions
 * @type {Object}
 */
var upsService = function(buildApi) {
    return {

        /**
         * getShipmentAccept
         * @param {string} rgaNumber - undefined
         * @param {string} shipmentDigest - undefined
         * @param {object} callback - function to call once async action complete
         */
        getShipmentAccept: function(rgaNumber, shipmentDigest, callback) {
            var reqUrl = '/ups/getShipmentAccept?rgaNumber=${rgaNumber}shipmentDigest=${shipmentDigest}';
            var params = {
                rgaNumber: rgaNumber,
                shipmentDigest: shipmentDigest
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * getShipmentConfirm
         * @param {string} rgaNumber - undefined
         * @param {string} email - undefined
         * @param {intstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringintstringstringstringstringstringintstringstringbooleanstringstringstringstringintdoubleintintstringstringstringstringstringstringstringstringstringstringstringintstringstringstringstringstringstringstringstringintstringstringstringstringstringstringstringintintstringstringstringintintstringbooleanintstringstringstringbooleanbooleanstringbooleanintbooleanbooleanbooleanintintstringstringstringstringstringstringbooleanbooleanstringintintstringstringdoublestringstringstringstringstringdoubleintstringstringbooleanintbooleanstringbooleanstringstringbooleanstringstringbooleanbooleanintstringboolean} shipper - undefined
         * @param {intintstringstringstringstringstringstringstringstringstringstringstringstringbooleanintintintintstringstringdoublebooleanstring} fromAddress - undefined
         * @param {intintstringstringstringstringstringstringstringstringstringstringstringstringbooleanintintintintstringstringdoublebooleanstring} toAddress - undefined
         * @param {double} totalWeight - undefined
         * @param {object} callback - function to call once async action complete
         */
        getShipmentConfirm: function(rgaNumber, email, shipper, fromAddress, toAddress, totalWeight, callback) {
            var reqUrl = '/ups/getShipmentConfirm?&rgaNumber=${rgaNumber}&email=${email}&shipper=${shipper}&fromAddress=${fromAddress}&toAddress=${toAddress}&totalWeight=${totalWeight}';
            var params = {
                rgaNumber: rgaNumber,
                email: email,
                shipper: shipper,
                fromAddress: fromAddress,
                toAddress: toAddress,
                totalWeight: totalWeight
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * getTimeInTransit
         * @param {string} fromPostalCode - undefined
         * @param {string} fromCountry - undefined
         * @param {string} toPostalCode - undefined
         * @param {string} toCountry - undefined
         * @param {timestamp} shipDate - undefined
         * @param {string} monetaryValue - undefined
         * @param {string} weight - undefined
         * @param {object} callback - function to call once async action complete
         */
        getTimeInTransit: function(fromPostalCode, fromCountry, toPostalCode, toCountry, shipDate, monetaryValue, weight, callback) {
            var reqUrl = '/ups/getTimeInTransit?&fromPostalCode=${fromPostalCode}&fromCountry=${fromCountry}&toPostalCode=${toPostalCode}&toCountry=${toCountry}&shipDate=${shipDate}&monetaryValue=${monetaryValue}&weight=${weight}';
            var params = {
                fromPostalCode: fromPostalCode,
                fromCountry: fromCountry,
                toPostalCode: toPostalCode,
                toCountry: toCountry,
                shipDate: shipDate,
                monetaryValue: monetaryValue,
                weight: weight
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/** 
 * Return upsService object
 * @type {Object}
 */
module.exports = upsService;
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
client.getShipmentAccept(rgaNumber, shipmentDigest, log);
client.getShipmentConfirm(rgaNumber, email, shipper, fromAddress, toAddress, totalWeight, log);
client.getTimeInTransit(fromPostalCode, fromCountry, toPostalCode, toCountry, shipDate, monetaryValue, weight, log);

*/
