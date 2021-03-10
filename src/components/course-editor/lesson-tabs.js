import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'

const LessonTabs = (
    {
        myLessons=[],
        findLessonsForModule,
        createLessonForModule,
        deleteLesson,
        updateLesson

    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    // console.log(moduleId)
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            // console.log("LOAD LESSONS FOR MODULE: " + moduleId)

            findLessonsForModule(moduleId)
            // console.log(myLessons)
        }
    }, [moduleId])
    return(
    <>
    
        <ul className="nav nav-tabs nav-fill">
            {
                myLessons.map(lesson =>
                    <li className="nav-item" key={lesson._id}>
                        <EditableItem
                            active={lesson._id === lessonId}
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            item={lesson}/>
                    </li>
                )
            }
             <i onClick={() => createLessonForModule(moduleId)} className="fa fa-plus fa-2x color-black wbdv-top-padding-icon float-right padding-left-10px"></i>


        </ul>
    </>)}

const stpm = (state) => {
    return {
        myLessons: state.lessonReducer.lessons
    }
}

const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        // console.log("LOAD LESSONS FOR MODULE:")
        // console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(theLessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons: theLessons
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