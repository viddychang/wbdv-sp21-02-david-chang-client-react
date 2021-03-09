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
        updateTopic
    }) => {
        const {layout, courseId, moduleId, lessonId, topicId } = useParams();
        useEffect(() => {
            findTopicsForLesson(lessonId)

        }, [])
    return(
        <div>
            <ul class="nav nav-pills nav-fill">
                {
                    topics.map(topic =>
                        <li className="nav-item pill-style">
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
                <li className="nav-item pill-style">
                    <i onClick={() => createTopic(lessonId)} className='fa fa-plus color-white'></i>

                </li>

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
                        type: "createTopic",
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
            }
        }
    }
    
    export default connect(stpm, dtpm)
            (TopicPills)