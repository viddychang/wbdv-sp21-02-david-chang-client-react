import React, {useState} from 'react'
import {Link} from "react-router-dom";

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
            !editing && <h5 className="card-title">{title}</h5>
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
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-2x fa-edit"></i>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-2x fa-check"></i>}
                {editing && <i onClick={() => deleteTitle()} className="fas fa-2x fa-trash"></i>}
            </div>
            
          </div>
        </div>
      </div>
    )
}


export default CourseCard