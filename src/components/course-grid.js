import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import "./styles.css";

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
  <div>
    <div className="row pt-3"> 
      <div className="col-4 d-none d-sm-none d-md-block">
        <h4>
          Recent Documents  
        </h4> 
      </div>
      <div className="col-4 d-none d-sm-none d-md-block">
        <div className="row ">
          <h4>
            Owned by me
          </h4>
          <i class="fa fa-sort-down wbdv-icon-padding"></i>
        </div>
      </div>
      <div className="col-xs-4 col-lg-4 col-md-4 wbdv-padding-right">
          <span className="float-right">
            <i className="fas fa-2x fa-folder wbdv-icon-padding"></i>
            <i className="fas fa-2x fa-sort wbdv-icon-padding"></i>
            <Link to="/courses/table">
              <i className="fas fa-list fa-2x wbdv-icon-padding color-black"></i>
            </Link>
          </span>
      </div>
    </div>
    <div className="row">
      

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