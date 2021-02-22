import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./styles.css";

const CourseCard = ({deleteCourse, updateCourse, course, title}) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    const deleteTitle = () => {
        setEditing(false)
        deleteCourse(course)
    }

    return (
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className="card">
          <div className="card-body">
          {
            !editing && <Link to="/courses/editor">
              <h5 className="card-title color-black">{course.title}</h5>
              </Link>
          }
          {
            editing && <input onChange={(event) => setNewTitle(event.target.value)}
                              value={newTitle}
                              className="form-control"/>
          }

          <p className="card-text">
            {course.description}
          </p>
          <Link to="/courses/editor" className="btn btn-primary">
            {course.title}
          </Link>
            <div className="float-right">
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-lg fa-edit color-blue "></i>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-lg fa-check wbdv-icon-padding text-success"></i>}
                {editing && <i onClick={() => deleteTitle()} className="fas fa-lg fa-times wbdv-icon-padding text-danger"></i>}
            </div>
            
          </div>
        </div>
      </div>
    )
}


export default CourseCard