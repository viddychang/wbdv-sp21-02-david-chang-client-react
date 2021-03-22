import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from '../../services/widget-service';

const WidgetList = (
    {
        widgets=[],
        createWidget,
        findWidgetsForTopic,
        updateWidget,
        deleteWidget,
        refreshWidgets
    }
    ) => {
    const {topicId} = useParams();
    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        } else {
            refreshWidgets()
        }
        
    }, [topicId])
    // console.log(widgets);

    return (
        <div>
            <div className="text-right"> 
                <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x align-right"></i>
            </div>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>

                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                widget={widget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                widget={widget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}/>
                        }
                    </li>
                    )
                }
            </ul>
        </div>
    )}

const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => ({
    findWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(theWidgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: theWidgets
            }))
    },
    createWidget: (tid) => {
        widgetService.createWidget(tid, 
            {type:"HEADING", size: 1, text: "New Widget"})
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget
            }))
    },
    updateWidget: (updatedWid, updatedWidget) => {
        widgetService.updateWidget(updatedWid, updatedWidget)
            .then(widget => dispatch ({
                type: "UPDATE_WIDGET",
                widget: updatedWidget,
                wid: updatedWid
            }))
    },
    deleteWidget: (wid) => {
        widgetService.deleteWidget(wid)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: wid
            }))
    },
    refreshWidgets: () => {
        dispatch({
            type: "REFRESH_WIDGETS"
        })
    }

})


export default connect(stpm, dtpm) 
    (WidgetList);