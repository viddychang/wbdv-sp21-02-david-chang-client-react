const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            console.log(action.widget)
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
                
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(widget => {
                    // console.log(action.widget)
                    if(widget.id === action.widget.id) {
                        return action.widget
                    } else {
                        return widget
                    }
                })
            }
        case "DELETE_WIDGET":
            const newState1 = {
                widgets: state.widgets.filter(widget=> {
                    if (widget.id === action.widgetToDelete.id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "REFRESH_WIDGETS":
            const widgetRefreshState = {
                ...state,
                widgets: []
            }
            return widgetRefreshState
        default:
            return state
    }
}

export default widgetReducer