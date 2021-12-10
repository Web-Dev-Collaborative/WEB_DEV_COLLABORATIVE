export function formatDayMonthYear(dateParam){
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const date = new Date(dateParam)
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }

export function formatDayMonth(dateParam){
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const date = new Date(dateParam)
        return `${months[date.getMonth()]} ${date.getDate()}`
    }

export function sortByLastUptade(note1, note2){
    return note1.updated_at <= note2.updated_at ? 1 : -1;
}

export function sortNotebookByAlpha(notebook1, notebook2){
    return notebook1.name <= notebook2.name ? 1 : -1;
}