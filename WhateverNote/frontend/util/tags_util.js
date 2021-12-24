export const fetchTags = () => {
    return $.ajax({
        url: '/api/tags'
    })
}

export const fetchTag = tagId => {
    return $.ajax({
        url: `/api/tags/${tagId}`
    })
}

export const createTag = tag => {
    return $.ajax({
        method: "POST",
        url: `/api/tags/`,
        data: {tag}
    })
}

export const updateTag = tag => {
    return $.ajax({
        method: "PATCH",
        url: `/api/tags/${tag.id}`,
        data: {tag}
    })
}

export const destroyTag = tagId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/tags/${tagId}`
    })
}

export const addTag = (tagId, noteId) => {
    return $.ajax({
        method: "POST",
        url: `/api/taggings`,
        data: {tagging:{tag_id: tagId, note_id: noteId}}
    })
}

export const removeTag = (tagId, noteId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/taggings`,
        data: {tag_id: tagId, note_id: noteId}
    })
}