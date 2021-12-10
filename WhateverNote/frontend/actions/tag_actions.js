import * as TagApiUtil from '../util/tags_util';

export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS"
export const RECEIVE_TAG = "RECEIVE_TAG"
export const DELETE_TAG = "DELETE_TAG"

const receiveAllTags = tags => ({
    type: RECEIVE_ALL_TAGS,
    tags
})

const receiveTag = tag => ({
    type: RECEIVE_TAG,
    tag
})

const deleteTag = tagId => ({
    type: DELETE_TAG,
    tagId
})

export const fetchTags = () => dispatch => {
    TagApiUtil.fetchTags().then( tags => dispatch(receiveAllTags(tags)))
}

export const fetchTag = id => dispatch => {
    TagApiUtil.fetchTag(id).then( tag => dispatch(receiveTag(tag)))
}

export const destroyTag = id => dispatch => {
    TagApiUtil.destroyTag(id).then(() => dispatch(deleteTag(id)))
}

export const createTag = tag => dispatch => {
    TagApiUtil.createTag(tag).then( tag => dispatch(receiveTag(tag)))
}

export const updateTag = tag => dispatch => {
    TagApiUtil.updateTag(tag).then( tag => dispatch(receiveTag(tag)))
}

export const addTag = (tagId, noteId) => dispatch => {
    TagApiUtil.addTag(tagId, noteId).then( () => {
        TagApiUtil.fetchTag(tagId).then( tag => dispatch(receiveTag(tag)))
    })
}


export const removeTag = (tagId, noteId) => {
    TagApiUtil.removeTag(tagId, noteId).then( () => fetchTag(tagId))
}
