import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from"../../services/topic-service"

const TopicPills = (
    {
        topics=[],
        createTopic,
        findTopicsForLesson,
        deleteTopic,
        updateTopic,
        refreshTopics
    }) => {
        const {layout, courseId, moduleId, lessonId, topicId } = useParams();
        useEffect(() => {
            if (moduleId !== "undefined" 
            && typeof moduleId !== "undefined" 
            && lessonId !== "undefined" 
            && typeof lessonId !== "undefined") {
                findTopicsForLesson(lessonId)
            } else {
                refreshTopics()

            }

        }, [moduleId, lessonId])
    return(
        <div>
            <ul className="nav nav-pills nav-fill">
                {
                    topics.map(topic =>
                        <li className='nav-item' key={topic._id}>
                            <EditableItem
                                active={topic._id === topicId}
    
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                deleteItem={deleteTopic}
                                updateItem={updateTopic}
                                item={topic}
                            />
                        </li>

                        )
                }
                
            <i onClick={() => createTopic(lessonId)} className='fa fa-plus fa-2x color-black wbdv-top-padding-icon float-right padding-left-10px'></i>


            </ul>
        </div>
    )}
    
    const stpm = (state) => {
        return {
            topics: state.topicReducer.topics
        }   
    }
    const dtpm = (dispatch) => {
        return {
            createTopic: (lessonId) => {
                topicService.createTopic(lessonId, {title: "New Topic"})
                    .then(actualTopic => dispatch({
                        type: "CREATE_TOPIC",
                        topic: actualTopic
                    }))
            },
            deleteTopic: (item) =>
                topicService.deleteTopic(item._id)
                    .then(status => dispatch({
                        type: "DELETE_TOPIC",
                        topicToDelete: item
                    })),
            updateTopic: (topic) => 
                topicService.updateTopic(topic._id, topic)
                    .then(status => dispatch({
                        type: "UPDATE_TOPIC",
                        topic
                    })),
            findTopicsForLesson: (lessonId) => {
                topicService.findTopicsForLesson(lessonId)
                    .then(theTopics => dispatch({
                        type: "FIND_TOPICS_FOR_LESSON",
                        topics: theTopics
                    }))
            },
            refreshTopics: () => {
                dispatch({
                    type: "REFRESH_TOPICS"
                })
            }
        }
    }
    
    export default connect(stpm, dtpm)
            (TopicPills)