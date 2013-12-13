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
client.stores(storeId, updateCache, log);
client.sitesId(siteName, log);
client.sites(log);
client.sites(siteName, log);
client.sites(siteId, log);
client.stateAbbrs(zipCode, log);
client.stateAbbrs(stateName, log);
client.programControls(programId, userId, log);
client.programControls(programId, log);
client.programControls(id, log);
