import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'

const LessonTabs = (
    {
        lessons=[],
        findLessonsForModule,
        createLessonForModule,
        deleteLesson,
        updateLesson

    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return(
    <div>
        <ul class="nav nav-tabs nav-fill">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <EditableItem
                            active={lesson._id === lessonId}
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            item={lesson}/>
                    </li>
                )
            }
            <li>
                <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => {
    return {
        lessons: state.lessonReducer.lessons
    }
}

const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        // console.log("LOAD LESSONS FOR MODULE:")
        // console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons
            }))
    },
    createLessonForModule: (moduleId) => {
        // console.log("CREATE LESSON FOR MODULE: " + moduleId)
        lessonService
            .createLesson(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    updateLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson
            })),
    deleteLesson: (item) =>
        lessonService.deleteLesson(item._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: item
            }))
})

export default connect(stpm, dtpm)(LessonTabs)