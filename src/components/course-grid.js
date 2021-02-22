import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, deleteCourse, addCourse, updateCourse}) =>
  <div>
    <div className="row"> 
      <div className="col-4 d-none d-sm-none d-md-block">
        <h4>
          Recent Documents  
        </h4> 
      </div>
      <div className="col-4 d-none d-sm-none d-md-block">
        <h4>
          Owned by me
        </h4>
      </div>
      <div className="col-4">
        <span className="float-right">
          <i className="fas fa-2x fa-folder"></i>
          <i className="fas fa-2x fa-sort"></i>
          <Link to="/courses/table">
            <i className="fas fa-list fa-2x"></i>
          </Link>
        </span>
      </div>
    </div>
    <div className="row">
      

    </div>
    <div className="row">
      {
        courses.map(course =>
          <CourseCard course={course}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                      title={course.title}/>
        )
      }
    </div>
  </div>

export default CourseGrid