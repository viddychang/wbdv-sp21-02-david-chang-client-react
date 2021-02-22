import React from 'react'
import CourseTable from "../course-table";
import CourseGrid from "../course-grid";
import CourseEditor from "../course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import "./course-manager.css";
import "../styles.css";
import courseService, {findAllCourses, deleteCourse} from "../../services/course-service";

class CourseManager extends React.Component {
  state = {
    courses: []
  }

  updateCourse = (course) => {
    console.log(course)
    courseService.updateCourse(course._id, course)
        .then(status => {
            this.setState((prevState) => {
                var nextState = {...prevState}
                nextState.courses = prevState.courses.map( c => {
                    if (c._id === course._id) {
                        return course
                    } else {
                        return c
                    }
                })
                return nextState
            })
        })
  }


  componentDidMount = () =>
    // findAllCourses()
    //     .then(actualCourses => this.setState({
    //       courses: actualCourses
    //     }))
    findAllCourses()
        .then(courses => this.setState({courses}))

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "New Owner",
      lastModified: "Never"
    }
    courseService.createCourse(newCourse)
        .then(course => this.setState(
            (prevState) => ({
              ...prevState,
              courses: [
                  ...prevState.courses,
                  course
              ]
            })))

    // this.state.courses.push(newCourse)
    // this.setState(this.state)
  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
        .then(status => {
          // const newCourses = this.state.courses
          //     .filter(course => course !== courseToDelete)
          // this.setState({
          //   courses: newCourses
          // })
          // this.setState((prevState) => {
          //   // let nextState = {...prevState}
          //   // nextState.courses =
          //   //     prevState
          //   //         .courses
          //   //         .filter(course => course !== courseToDelete)
          //
          //   let nextState = {
          //     ...prevState,
          //     courses: prevState.courses.filter
          //               (course => course !== courseToDelete)
          //   }
          //
          //   return nextState
          // })

          this.setState((prevState) => ({
              courses: prevState.courses.filter
                (course => course !== courseToDelete)
          }))
        })
  }




  render() {
    return(
        <div class="wbdv-sticky-nav-bar-manager wbdv-padding-10px" >
          <div class="row">
              <div class="col-1">
                  <i className="fas fa-bars fa-2x wbdv-fa-icon-top-padding"></i>
              </div>
              <div class="wbdv-top-padding col-2 d-none d-lg-block">
                  <h5 class="color-black">Course Manager</h5>
              </div>
              <div class="col-7 wbdv-top-padding-input">
                  <input class="form-control" placeholder="New Course Title"/>
              </div>
              <div class="col-2 wbdv-padding-right">
                <span className="float-right">
                    <i onClick={this.addCourse} class="fas fa-plus-circle color-red fa-2x wbdv-icon-padding"></i>
                    <Link to="/">
                      <i className="fas fa-2x fa-home wbdv-icon-padding"></i>
                    </Link>
                </span>
              </div>
        </div>
        <Route path="/courses/table">
        <CourseTable
            updateCourse={this.updateCourse}
            deleteCourse={this.deleteCourse}
            courses={this.state.courses}/>
      </Route>
      <Route path="/courses/grid">
        <CourseGrid
            deleteCourse={this.deleteCourse}
            courses={this.state.courses}/>
      </Route>
        {/*<Route path="/courses/editor">*/}
        {/*    <CourseEditor/>*/}
        {/*</Route>*/}
        {/*<Route path="/courses/editor"*/}
        {/*       render={(props) => <CourseEditor props={props}/>}>*/}
        {/*</Route>*/}
        <Route path="/courses/editor"
               render={(props) => <CourseEditor {...props}/>}>
        </Route>

      </div>
    )
  }
}

export default CourseManager