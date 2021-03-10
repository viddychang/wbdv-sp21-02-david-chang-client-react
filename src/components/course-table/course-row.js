import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "../styles.css";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
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

    const deleteCourseTitle = () => {
        setEditing(false)
        deleteCourse(course)
    }

  return (
      <tr>
        <td>
            {
                !editing &&
                <Link to={`/courses/grid/edit/${course._id}`}>
                    <i className="fa fa-file fa-lg wbdv-icon-padding"></i>
                    <span className="color-black">
                        {title}
                    </span>
                </Link>
                
            }
            {
                editing &&
                <input
                    onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
            }
        </td>
        <td className="d-sm-table-cell d-none">{owner}</td>
        <td className="d-sm-none d-md-none d-lg-table-cell d-none">{lastModified}</td>
        <td>
            <span className="float-right">
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-lg wbdv-icon-padding color-blue"></i>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-check text-success fa-lg wbdv-icon-padding"></i>}
                {editing && <i onClick={() => deleteCourseTitle()} className="fas fa-times text-danger fa-lg wbdv-icon-padding"></i>}
            </span>
        </td>
      </tr>
  )
}
export default CourseRow