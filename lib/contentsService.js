/**
 * contentsService functions
 * @type {Object}
 */
var contentsService = function(buildApi) {
    return {

        /**
         * updateGroupDelete
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateGroupDelete: function(requestObject, callback) {
            var reqUrl = '/contents/group/delete';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateGroupSave
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateGroupSave: function(requestObject, callback) {
            var reqUrl = '/contents/group/save';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * groupIdentifier
         * @param {string} pageName - undefined
         * @param {string} locationName - undefined
         * @param {string} learningCenterReferenceSection - undefined
         * @param {int} siteId - undefined
         * @param {object} callback - function to call once async action complete
         */
        groupIdentifier: function(pageName, locationName, learningCenterReferenceSection, siteId, callback) {
            var reqUrl = '/contents/groupIdentifier?&pageName=${pageName}&locationName=${locationName}&learningCenterReferenceSection=${learningCenterReferenceSection}&siteId=${siteId}';
            var params = {
                pageName: pageName,
                locationName: locationName,
                learningCenterReferenceSection: learningCenterReferenceSection,
                siteId: siteId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * group
         * @param {int} pageId - undefined
         * @param {int} locationId - undefined
         * @param {int} referenceId - undefined
         * @param {int} siteId - undefined
         * @param {boolean} updateCache - undefined
         * @param {object} callback - function to call once async action complete
         */
        group: function(pageId, locationId, referenceId, siteId, updateCache, callback) {
            var reqUrl = '/contents/group?&pageId=${pageId}&locationId=${locationId}&referenceId=${referenceId}&siteId=${siteId}&updateCache=${updateCache}';
            var params = {
                pageId: pageId,
                locationId: locationId,
                referenceId: referenceId,
                siteId: siteId,
                updateCache: updateCache
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsGroupsAll
         * @param {object} callback - function to call once async action complete
         */
        tagsGroupsAll: function(callback) {
            var reqUrl = '/contents/tags/groups/all';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsReference
         * @param {int} referenceId - undefined
         * @param {int} tagContentId - undefined
         * @param {object} callback - function to call once async action complete
         */
        tagsReference: function(referenceId, tagContentId, callback) {
            var reqUrl = '/contents/tags/reference?&referenceId=${referenceId}&tagContentId=${tagContentId}';
            var params = {
                referenceId: referenceId,
                tagContentId: tagContentId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsAll
         * @param {object} callback - function to call once async action complete
         */
        tagsAll: function(callback) {
            var reqUrl = '/contents/tags/all';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsPopular
         * @param {object} callback - function to call once async action complete
         */
        tagsPopular: function(callback) {
            var reqUrl = '/contents/tags/popular';
            var params = {};
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsGroups
         * @param {int} tagGroupId - undefined
         * @param {object} callback - function to call once async action complete
         */
        tagsGroups: function(tagGroupId, callback) {
            var reqUrl = '/contents/tags/groups/${tagGroupId}';
            var params = {
                tagGroupId: tagGroupId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsGroups
         * @param {int} tagId - undefined
         * @param {object} callback - function to call once async action complete
         */
        tagsGroups: function(tagId, callback) {
            var reqUrl = '/contents/tags/groups?&tagId=${tagId}';
            var params = {
                tagId: tagId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateTagsGroups
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateTagsGroups: function(requestObject, callback) {
            var reqUrl = '/contents/tags/groups';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsGroups
         * @param {int} tagGroupId - undefined
         * @param {object} callback - function to call once async action complete
         */
        tagsGroups: function(tagGroupId, callback) {
            var reqUrl = '/contents/tags/groups?&tagGroupId=${tagGroupId}';
            var params = {
                tagGroupId: tagGroupId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsAssociationsByTag
         * @param {int} tagId - undefined
         * @param {int} tagContentId - undefined
         * @param {object} callback - function to call once async action complete
         */
        tagsAssociationsByTag: function(tagId, tagContentId, callback) {
            var reqUrl = '/contents/tags/associationsByTag?&tagId=${tagId}&tagContentId=${tagContentId}';
            var params = {
                tagId: tagId,
                tagContentId: tagContentId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateTagsAssociationsByReference
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateTagsAssociationsByReference: function(requestObject, callback) {
            var reqUrl = '/contents/tags/associationsByReference';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateTagsAssociations
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateTagsAssociations: function(requestObject, callback) {
            var reqUrl = '/contents/tags/associations';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsAssociations
         * @param {intintstringintstringintstringint} tagAssociations - undefined
         * @param {int} tagContentId - undefined
         * @param {object} callback - function to call once async action complete
         */
        tagsAssociations: function(tagAssociations, tagContentId, callback) {
            var reqUrl = '/contents/tags/associations?&tagAssociations=${tagAssociations}&tagContentId=${tagContentId}';
            var params = {
                tagAssociations: tagAssociations,
                tagContentId: tagContentId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsAssociations
         * @param {int} tagContentId - undefined
         * @param {object} callback - function to call once async action complete
         */
        tagsAssociations: function(tagContentId, callback) {
            var reqUrl = '/contents/tags/associations?&tagContentId=${tagContentId}';
            var params = {
                tagContentId: tagContentId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsAssociations
         * @param {int} tagIds - undefined
         * @param {object} callback - function to call once async action complete
         */
        tagsAssociations: function(tagIds, callback) {
            var reqUrl = '/contents/tags/associations?&tagIds=${tagIds}';
            var params = {
                tagIds: tagIds
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsAssociations
         * @param {int} tagId - undefined
         * @param {object} callback - function to call once async action complete
         */
        tagsAssociations: function(tagId, callback) {
            var reqUrl = '/contents/tags/associations?&tagId=${tagId}';
            var params = {
                tagId: tagId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsAssociations
         * @param {int} tagAssociationId - undefined
         * @param {object} callback - function to call once async action complete
         */
        tagsAssociations: function(tagAssociationId, callback) {
            var reqUrl = '/contents/tags/associations/${tagAssociationId}';
            var params = {
                tagAssociationId: tagAssociationId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsAssociations
         * @param {int} tagAssociationId - undefined
         * @param {object} callback - function to call once async action complete
         */
        tagsAssociations: function(tagAssociationId, callback) {
            var reqUrl = '/contents/tags/associations/${tagAssociationId}';
            var params = {
                tagAssociationId: tagAssociationId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateTagsContents
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateTagsContents: function(requestObject, callback) {
            var reqUrl = '/contents/tags/contents';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsContents
         * @param {int} tagContentId - undefined
         * @param {object} callback - function to call once async action complete
         */
        tagsContents: function(tagContentId, callback) {
            var reqUrl = '/contents/tags/contents/${tagContentId}';
            var params = {
                tagContentId: tagContentId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tagsContents
         * @param {int} tagContentId - undefined
         * @param {object} callback - function to call once async action complete
         */
        tagsContents: function(tagContentId, callback) {
            var reqUrl = '/contents/tags/contents/${tagContentId}';
            var params = {
                tagContentId: tagContentId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * updateTags
         * @param {object} requestObject - object representing requestParameters
         * @param {object} callback - function to call once async action complete
         */
        updateTags: function(requestObject, callback) {
            var reqUrl = '/contents/tags';
            var params = {};
            buildApi.callApi('POST', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tags
         * @param {int} tagId - undefined
         * @param {object} callback - function to call once async action complete
         */
        tags: function(tagId, callback) {
            var reqUrl = '/contents/tags/${tagId}';
            var params = {
                tagId: tagId
            };
            buildApi.callApi('DELETE', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        },

        /**
         * tags
         * @param {int} tagId - undefined
         * @param {object} callback - function to call once async action complete
         */
        tags: function(tagId, callback) {
            var reqUrl = '/contents/tags/${tagId}';
            var params = {
                tagId: tagId
            };
            buildApi.callApi('GET', reqUrl, params, null, function(err, data) {
                callback(err, data);
            });
        }
    }
};
/**
 * Return contentsService object
 * @type {Object}
 */
module.exports = contentsService;
