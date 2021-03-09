import React, {useState} from 'react';
import './course-editor.client.style.css';
import '../styles.css';
import {Link, useParams} from "react-router-dom";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from './topic-pills';
import courseService from '../../services/course-service';
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer);


// const CourseEditor = ({props}) =>
const CourseEditor = ({history}) => {
    const { courseId } = useParams();
    const [courseTitle, setCourseTitle] = useState(" ")
    courseService.findCourseById(courseId)
        .then(status => setCourseTitle(status.title)) 

    return (
    <Provider store={store}>
        <div className="editor-shift-left"> 

        <div class="wbdv-sticky-nav-bar">
            <div class="row">
                <div class="col-1">
                        <i class="fa fa-times fa-2x color-white" onClick={() => history.goBack()}></i>
                </div>
                <div class="col-2 d-none d-lg-block">
                    <h4>
                        {courseTitle}
                    </h4>
                </div>
                <div class="col-8">
                    <LessonTabs/>
                </div>

{/*                 <div class="col-1">
                    <a href="#">
                        <i class="fa fa-plus fa-2x color-white wbdv-top-padding-icon"></i>
                    </a>
                </div> */}
            </div>
        </div>

                <div class="row wbdv-padding-top">
                    <div class="col-4 left-bar" >
                        <ModuleList/>

                    </div>
                    <div class="col-8">
                        <br/>
                        <TopicPills/>
                        <br/>
                        content intentionally left blank
                    </div>
                </div>
                </div>
                </Provider>
        )}
export default CourseEditor;