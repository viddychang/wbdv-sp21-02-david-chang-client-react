import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import "../styles.css";

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
  <div >
    <div className="row pt-3"> 
      <div className="col-4 d-none d-sm-none d-md-block">
        <h5>
          Recent Documents  
        </h5> 
      </div>
      <div className="col-4 d-none d-sm-none d-md-block">
        <div className="row ">
          <h5>
            Owned by me
          </h5>
          <i className="fa fa-sort-down wbdv-icon-padding"></i>
        </div>
      </div>
      <div className="col-xs-4 col-lg-4 col-md-4 wbdv-padding-right">
          <span className="float-right">
            <i className="fas fa-lg fa-folder wbdv-icon-padding"></i>
            <i className="fas fa-lg fa-sort wbdv-icon-padding"></i>
            <Link to="/courses/table">
              <i className="fas fa-list fa-lg wbdv-icon-padding color-black"></i>
            </Link>
          </span>
      </div>
    </div>
   
    <div className="row wbdv-padding-sm-right">
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