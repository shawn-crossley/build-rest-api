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
client.updateGroupDelete(requestObject,log);
client.updateGroupSave(requestObject,log);
client.groupIdentifier(pageName, locationName, learningCenterReferenceSection, siteId, log);
client.group(pageId, locationId, referenceId, siteId, updateCache, log);
client.tagsGroupsAll(log);
client.tagsReference(referenceId, tagContentId, log);
client.tagsAll(log);
client.tagsPopular(log);
client.tagsGroups(tagGroupId, log);
client.tagsGroups(tagId, log);
client.updateTagsGroups(requestObject,log);
client.tagsGroups(tagGroupId, log);
client.tagsAssociationsByTag(tagId, tagContentId, log);
client.updateTagsAssociationsByReference(requestObject,log);
client.updateTagsAssociations(requestObject,log);
client.tagsAssociations(tagAssociations, tagContentId, log);
client.tagsAssociations(tagContentId, log);
client.tagsAssociations(tagIds, log);
client.tagsAssociations(tagId, log);
client.tagsAssociations(tagAssociationId, log);
client.tagsAssociations(tagAssociationId, log);
client.updateTagsContents(requestObject,log);
client.tagsContents(tagContentId, log);
client.tagsContents(tagContentId, log);
client.updateTags(requestObject,log);
client.tags(tagId, log);
client.tags(tagId, log);
