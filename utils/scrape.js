var request = require('request'),
    util = require('util'),
    jsdom = require('jsdom');
var service = process.argv[2];
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
request({
    url: 'http://devbox2:8080/build-webservices-1.0.0/'
}, function(error, response, body) {
    if (error && response.statusCode !== 200) {
        console.log('Error when contacting google.com');
    }
    jsdom.env({
        html: body,
        scripts: ['http://code.jquery.com/jquery-1.10.2.min.js'],
        done: function(err, window) {
            var $ = window.jQuery;
            var endPoints = [];
            var $actions = $('.resource');
            var $paths = $('.resource .path');
            var $methods = $('.resource .method');
            $.each($actions, function(index, action) {
                var $action, method, path, parameters = [],
                    urlparameters = [],
                    request, response, requestObject = false,
                    root;

                $action = $(action);
                $url_params = $action.find('td.url-info-key');
                $url_params_expected = $action.find('td.url-info-expected-type');
                $params = $action.find('span.url-param-key');
                $params_expected = $action.find('span.url-param-expected-type');
                $requestBody = $action.find('.request-body');

                if ($requestBody.length) {
                    requestObject = true;
                }

                $.each($url_params, function(i, param) {

                    var params_type = $url_params_expected.eq(i).find('.json-primitive-type').text();
                    var params_type_restrictions = $url_params_expected.eq(i).find('.json-primitive-restrictions').text().replace('one of [', '').replace(']', '').trim();

                    var urlparameter = {
                        key: $(param).text(),
                        type: params_type
                    };

                    if (params_type_restrictions != '') {
                        parameter.restrictions = params_type_restrictions;
                    }

                    urlparameters.push(urlparameter);

                });


                $.each($params, function(i, param) {
                    var params_type = $params_expected.eq(i).find('.json-primitive-type').text();
                    var params_type_restrictions = $params_expected.eq(i).find('.json-primitive-restrictions').text().replace('one of [', '').replace(']', '').trim();

                    parameter = {
                        key: $(param).text(),
                        type: params_type
                    };

                    if (params_type_restrictions != '') {
                        parameter.restrictions = params_type_restrictions;
                    }

                    parameters.push(parameter);

                });

                method = $methods.eq(index).text();
                path = $paths.eq(index).text();
                root = path.split('/');
                functionName = '';
                for (var i = 2; i < root.length; i++) {
                    if (i > 2 && (root[i].indexOf('{') < 0)) {
                        functionName += capitaliseFirstLetter(root[i]);
                    } else if (root[i].indexOf('{') < 0) {
                        functionName += capitaliseFirstLetter(root[i]);
                    }
                }

                if (functionName == '') {
                    functionName = root[1];
                }

                functionName = lowerFirstLetter(functionName).replace('-', '');
                switch (method.toLowerCase()) {
                    case "post":
                        functionName = "update" + capitaliseFirstLetter(functionName);
                        break;
                    case "put":
                        functionName = 'add' + capitaliseFirstLetter(functionName);
                        break;
                    default:

                        break;
                }

                endPoints.push({
                    id: index,
                    service: root[1],
                    method: method,
                    functionName: functionName,
                    path: path,
                    parameters: parameters,
                    urlparameters: urlparameters,
                    requestBody: requestObject
                });

            })

            var services = {};

            for (var i = endPoints.length - 1; i >= 0; i--) {
                if (services[endPoints[i].service] == undefined) {
                    services[endPoints[i].service] = {
                        name: endPoints[i].service + "Service",
                        endPoints: []
                    };
                }
                services[endPoints[i].service].endPoints.push(endPoints[i]);
            };

            //for (var service in services) {

            var sample = '/** Sample Calls\r\n';
            sample += 'var api = require(\'./lib/build-api.js\'),\r\n';
            sample += 'client = new api.BuildApiClient(\'http://devbox2:8080/build-webservices-1.0.0/services/\', \'\');\r\n';
            sample += '\r\n';
            sample += 'function log(err,data,callback){\r\n';
            sample += 'if (err != null){\r\n';
            sample += 'console.log(\'Error:\' + err);\r\n';
            sample += '}\r\n';
            sample += 'console.log(data);\r\n';
            sample += 'if (callback !=null){\r\n';
            sample += 'callback(err,data);\r\n';
            sample += '}\r\n';
            sample += '}\r\n';

            console.log('/**');
            console.log('* ' + services[service].name + ' functions');
            console.log('* @type {Object}');

            console.log('*/');

            console.log('var ' + services[service].name + '  = function(buildApi) { ');
            console.log('return {');
            for (var i = 0; i < services[service].endPoints.length; i++) {

                var s = services[service].endPoints[i];
                var params = '',
                    urlParams = '';
                var reqParams = "";
                var jsDoc = "\r\n/**\r\n";
                jsDoc += "* " + s.functionName + "\r\n";



                for (var j = 0; j < s.urlparameters.length; j++) {
                    jsDoc += "* @param {" + s.urlparameters[j].type + "} " + s.urlparameters[j].key + " - " + s.urlparameters[j].restrictions + " \r\n";
                    params += s.urlparameters[j].key + ", ";
                    reqParams += s.urlparameters[j].key + ':' + s.urlparameters[j].key + ',';

                };




                for (var j = 0; j < s.parameters.length; j++) {
                    jsDoc += "* @param {" + s.parameters[j].type + "} " + s.parameters[j].key + " - " + s.parameters[j].restrictions + " \r\n";

                    params += s.parameters[j].key + ", ";
                    reqParams += s.parameters[j].key + ':' + s.parameters[j].key + ',';
                    if (i > 0) {
                        urlParams += "&";
                    }
                    urlParams += s.parameters[j].key + '=${' + s.parameters[j].key + '}';
                };

                reqParams = reqParams.substring(0, reqParams.length - 1);
                if (s.requestBody) {
                    params += "requestObject,";
                    jsDoc += "* @param {object} requestObject - object representing requestParameters \r\n";
                }
                jsDoc += "* @param {object} callback - function to call once async action complete \r\n";
                jsDoc += '*/';

                params += "callback";
                if (urlParams != '') {
                    urlParams = '?' + urlParams;
                }


                console.log(jsDoc);
                sample += 'client.' + s.functionName + '(' + params.replace('callback', 'log') + ');\r\n';

                console.log(s.functionName + ':' + 'function(' + params + ') {');
                console.log('var reqUrl = \'' + s.path.replace('{', '${') + urlParams + '\';');
                console.log('var params = {' + reqParams + '};');

                console.log('buildApi.callApi(\'' + s.method + '\',reqUrl, params, null ,function(err, data) {');
                console.log('callback(err, data);');
                console.log('});');
                console.log('}');
                if (i < services[service].endPoints.length - 1) {
                    console.log(',');
                }
            };


            console.log('}};');

            console.log('/** ');
            console.log('* Return ' + services[service].name + ' object');
            console.log('* @type {Object}');
            console.log('*/');
            console.log('module.exports = ' + services[service].name + ';');
            console.log(sample);

            //};


        }
    });

});
