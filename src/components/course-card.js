import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({deleteCourse, updateCourse, course}) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="card">
          <div className="card-body">
          {
            editing && <div className="text-right">
                <i onClick={() => saveTitle()} className="fas fa-check color-green"></i>
                <i onClick={() => {setEditing(false) return deleteCourse(course)}}
                    className="fas fa-times color-red"></i>
             </div>
          }
          {
            !editing && <h5 className="card-title">{title}</h5>
          }
          {
            editing && <input onChange={(event => {setNewTitle(event.target.value)})}
                            className="form-control"
                            value={newTitle}/>
          }
          <p className="card-text">
            {course.description}
          </p>
          <Link to="/courses/editor" className="btn btn-primary">
            {course.title}
          </Link>
          <div className="card-foot">
            <div className="float-right">
                {!editing && <i onClick{() => setEditing(true)}
                    classname="fas fa-pencil-alt"></i>}
                }
            </div>
          </div>
        </div>
      </div>
    )
}


export default CourseCard