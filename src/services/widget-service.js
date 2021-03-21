const WIDGET_URL = process.env.REACT_APP_WIDGET_URL

export const createWidget = (tid, widget) =>
    fetch(`${WIDGET_URL}/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`${WIDGET_URL}/${tid}/widgets`)
        .then(response => response.json())



export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_URL}/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${WIDGET_URL}/${wid}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export default {
    createWidget,
    findWidgetsForTopic,
    updateWidget,
    deleteWidget
}