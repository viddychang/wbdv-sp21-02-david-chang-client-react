const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
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
                    if(widget._id === action.widget._id) {
                        return action.widget
                    } else {
                        return widget
                    }
                })
            }
        case "DELETE_WIDGET":
            const newState1 = {
                widgets: state.widgets.filter(widget=> {
                    if (widget._id === action.widgetToDelete) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        
        default:
            return state
    }
}

export default widgetReducer