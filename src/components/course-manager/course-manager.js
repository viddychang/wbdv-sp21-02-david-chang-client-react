import React from 'react'
import CourseTable from "../course-table";
import CourseGrid from "../course-grid";
import CourseEditor from "../course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import "./course-manager.css";
import "../styles.css";
import courseService, {findAllCourses, deleteCourse} from "../../services/course-service";
import $ from "jquery";

class CourseManager extends React.Component {
  state = {
    courses: [],
    newCourse: {
      title: '',
      owner: "dc",
      lastModified:"2/20/2021"

    }
    
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



  onTitleChange = (e) => {
    this.setState({
      newCourse: {
        title: e.target.value,
        owner: 'dc',
        lastModified:"2/20/2021"
      }
    })


  }

  addCourse = () => {
    const newAddCourse = this.state.newCourse

    courseService.createCourse(newAddCourse)
        .then(course => this.setState(
            (prevState) => ({
              ...prevState,
              courses: [
                  ...prevState.courses,
                  course
              ]
            })))
    this.setState({newCourse: {title:'',
                                owner:'dc',
                                lastModified:'2/20/2021'

                }})

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

  updateCourse = (courseToUpdate) => {
    courseService.updateCourse(courseToUpdate._id, courseToUpdate)
      .then(() => {
        this.setState((prevState) => ({
          courses: prevState.courses.map(
            (c) => c._id === courseToUpdate._id ? courseToUpdate : c)

        }
        ))
      })
  }




  render() {
    return(
      <div>
        <Route path="/courses/table">
        <div class="wbdv-sticky-nav-bar-manager wbdv-padding-10px" >
                    <div class="row clone-bar">
              <div class="col-1">
                  <i className="fas fa-bars fa-2x wbdv-fa-icon-top-padding"></i>
              </div>
              <div class="wbdv-top-padding col-2 d-none d-lg-block">
                  <h5 class="color-black">Course Manager</h5>
              </div>
              <div class="col-7 wbdv-top-padding-input">
                  <input type="text" class="form-control" placeholder="New Course Title" 
                        id="courseNameInputFld" onChange={this.onTitleChange}
                        value={this.state.newCourse.title}/>
              </div>
              <div class="col">
                <span className="float-right">
                    <i onClick={this.addCourse} class="fas fa-plus-circle color-red fa-2x wbdv-icon-padding"></i>
                    <Link to="/">
                      <i className="fas fa-2x fa-home wbdv-icon-padding float-right wbdv-padding-sm-right"></i>
                    </Link>
                </span>
              </div>
        </div>
        <i class="fas fa-plus-circle color-red fa-2x wbdv-fa-icon-padding" id="fixed-button"
          onClick={this.addCourse}></i>
        </div>
        

        
        <CourseTable
            updateCourse={this.updateCourse}
            deleteCourse={this.deleteCourse}
            courses={this.state.courses}/>
      </Route>
      <Route path="/courses/grid">
      <div class="wbdv-sticky-nav-bar-manager wbdv-padding-10px" >
                    <div class="row clone-bar">
              <div class="col-1">
                  <i className="fas fa-bars fa-2x wbdv-fa-icon-top-padding"></i>
              </div>
              <div class="wbdv-top-padding col-2 d-none d-lg-block">
                  <h5 class="color-black">Course Manager</h5>
              </div>
              <div class="col-7 wbdv-top-padding-input">
                  <input type="text" class="form-control" placeholder="New Course Title" 
                        id="courseNameInputFld" onChange={this.onTitleChange}
                        value={this.state.newCourse.title}/>
              </div>
              <div class="col">
                <span className="float-right">
                    <i onClick={this.addCourse} class="fas fa-plus-circle color-red fa-2x wbdv-icon-padding"></i>
                    <Link to="/">
                      <i className="fas fa-2x fa-home wbdv-icon-padding float-right wbdv-padding-sm-right"></i>
                    </Link>
                </span>
              </div>
        </div>
          <i class="fas fa-plus-circle color-red fa-2x wbdv-fa-icon-padding" id="fixed-button"
          onClick={this.addCourse}></i>

        </div>

        <CourseGrid
            updateCourse={this.updateCourse}
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