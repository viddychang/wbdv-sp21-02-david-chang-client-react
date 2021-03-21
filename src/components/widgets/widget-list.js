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
        deleteWidget
    }
    ) => {
    const {topicId} = useParams();
    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])

    return (
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
            
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
            {type:"PARAGRAPH", size: 1, text: "New Widget", widgetOrder: "1"})
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget
            }))
    },
    updateWidget: (wid, widget) => {
        widgetService.updateWidget(wid, widget)
            .then(widget => dispatch ({
                type: "UPDATE_WIDGET",
                wid,
                widget
            }))
    },
    deleteWidget: (wid) => {
        widgetService.deleteWidget(wid)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: wid
            }))
    }

})


export default connect(stpm, dtpm) 
    (WidgetList);