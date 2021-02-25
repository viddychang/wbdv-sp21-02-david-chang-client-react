import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
  extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
    
  }

  render() {
    return(
        <div>
        <table className="table">
          <thead>
            <tr>
              <th>
                Title
              </th>
              <th className="d-sm-table-cell d-none">
                Owned by
              </th>
              <th className="d-sm-none d-md-none d-lg-table-cell d-none">
                Last modified
              </th>
              <th className="wbdv-padding-right">
                <span className="float-right">
                  <i className="fas fa-lg fa-folder wbdv-icon-padding"></i>
                  <i className="fas fa-lg fa-sort wbdv-icon-padding"></i>
                  <Link to="/courses/grid">
                    <i className="fas fa-lg fa-th float-right color-black wbdv-icon-padding"></i>
                  </Link>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            

          {
            this.props.courses.map((course, ndx) =>
              <CourseRow
                  updateCourse={this.props.updateCourse}
                deleteCourse={this.props.deleteCourse}
                key={ndx}
                course={course}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}
              />)
          }
          </tbody>
        </table>
      </div>
    )
  }
}