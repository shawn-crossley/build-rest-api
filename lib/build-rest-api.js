var Client = require('./node-rest-client').Client,
    categoryWebService = require('./categoriesService'),
    md5 = require('MD5');



var BuildApi = function(api_url, api_key) {
    var client = new Client();

    function handleResponse(data, response, callback) {
        callback(null, data);
    }

    function handleError(err, callback) {
        callback(err, null);
    }

    return {
        callApi: function(method, url, params, requestData, callback) {
            var reqUrl = api_url + url;
            var options = {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': api_key
                },
                path: params,
                data: requestData
            };

            // Requrl + Options should be unique
            var hashKey = md5(JSON.stringify(options) + reqUrl);

            switch (method.toLowerCase()) {
                case 'delete':
                    client.del(reqUrl, options, function(data, response) {
                        handleResponse(data, response, callback);
                    }).on('error', function(err) {
                        handleError(err, callback);
                    });
                    break;
                case 'post':
                    client.post(reqUrl, options, function(data, response) {
                        handleResponse(data, response, callback);
                    }).on('error', function(err) {
                        handleError(err, callback);
                    });
                    break;
                case 'put':
                    client.put(reqUrl, options, function(data, response) {
                        handleResponse(data, response, callback);
                    }).on('error', function(err) {
                        handleError(err, callback);
                    });
                    break;
                case 'get':
                    client.get(reqUrl, options, function(data, response) {
                        handleResponse(data, response, callback);
                    }).on('error', function(err) {
                        handleError(err, callback);
                    });
                    break;
                default:
                    client.get(reqUrl, options, function(data, response) {
                        handleResponse(data, response, callback);
                    }).on('error', function(err) {
                        handleError(err, callback);
                    });


                    break;
            }
        }
    }

};

var BuildApiClient = function(api_url, api_key) {
    var api = new BuildApi(api_url, api_key);
    var categoryService = categoryWebService(api);
    return {
        categoryService: categoryService
    };

};

exports.BuildApiClient = BuildApiClient;
