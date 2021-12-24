export const fetchNotebooks = () => (
    $.ajax({
        url: `/api/notebooks`
    })
)

export const fetchNotebook = id => (
    $.ajax({
        url: `/api/notebooks/${id}`
    })
)

export const createNotebook = notebook => (
    $.ajax({
        url: `/api/notebooks`,
        method: "POST",
        data: {notebook}
    })
)

export const updateNotebook = notebook => (
    $.ajax({
        url: `/api/notebooks/${notebook.id}`,
        method: "PATCH",
        data: {notebook}
    })
)

export const deleteNotebook = id => (
    $.ajax({
        url: `/api/notebooks/${id}`,
        method: "DELETE"
    })
)