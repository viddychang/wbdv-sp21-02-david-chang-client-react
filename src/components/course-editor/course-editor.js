import React, {useEffect} from 'react';
import './course-editor.css';
import '../styles.css';
import {Link} from "react-router-dom";

// const CourseEditor = ({props}) =>
const CourseEditor = ({history}) =>
<div>
    <h1>
            Course Editor
        <i className="fas fa-times float-right wbdv-padding-right"
            onClick={() => history.goBack()}></i>
    </h1>
<div class="wbdv-sticky-nav-bar">
    <div class="row">
        <div class="col-1">
            <a href="/home/home.template.client.html">
                <i class="fa fa-times fa-2x color-white"></i>
            </a>
        </div>
        <div class="col-2 d-none d-lg-block">
            <h4>
                CS5610 - WebDev
            </h4>
        </div>
        <div class="col-8">
            <ul class="nav nav-tabs nav-fill">
                <li class="nav-item">
                    <a class="nav-link nav-text-color" href="#">
                        Build
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                        Pages
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link nav-text-color" href="#">
                        Theme
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-text-color" href="#">
                        Store
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-text-color" href="#">
                        Apps
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-text-color" href="#">
                        Settings
                    </a>
                </li>
            </ul>
        </div>

        <div class="col-1">
            <a href="#">
                <i class="fa fa-plus fa-2x color-white wbdv-top-padding-icon"></i>
            </a>
        </div>
    </div>
</div>

        <div class="row wbdv-padding-top">
            <div class="col-4 left-bar" >
                <ul class="list-group">
                    <li class="list-group-item">
                        Module 1 - jQuery
                        <i class="float-right fa fa-times"></i>
                    </li>
                    <li class="list-group-item active">
                        Module 2 - React
                        <i class="float-right fa fa-times"></i>
                    </li>
                    <li class="list-group-item">
                        Module 3 - Redux
                        <i class="float-right fa fa-times"></i>
                    </li>
                    <li class="list-group-item">
                        Module 4 - Native
                        <i class="float-right fa fa-times"></i>
                    </li>
                    <li class="list-group-item">
                        Module 5 - Angular
                        <i class="float-right fa fa-times"></i>
                    </li>
                    <li class="list-group-item">
                        Module 6 - Node
                        <i class="float-right fa fa-times"></i>
                    </li>
                    <li class="list-group-item">
                        Module 7 - Mongo
                        <i class="float-right fa fa-times"></i>
                    </li>
                    <li class="list-add-item">
                        <a href="#">
                            <i class="float-right fa fa-plus color-white"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-8">
                <br/>
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item pill-style">
                        <a class="nav-link active active-tab" aria-current="page" href="#">Topic 1</a>
                    </li>
                    <li class="nav-item pill-style">
                        <a class="nav-link color-white" href="#">Topic 2</a>
                    </li>
                    <li class="nav-item pill-style">
                        <a class="nav-link color-white" href="#">Topic 3</a>
                    </li>
                    <li class="nav-item pill-style">
                        <a class="nav-link color-white" href="#">Topic 4</a>
                    </li>
                    <li class="nav-item pill-style">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                            <i class="fa fa-plus color-white"></i>
                        </a>
                    </li>

                </ul>
                <br/>
                content intentionally left blank
            </div>
        </div>
        </div>
export default CourseEditor;