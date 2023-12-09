import React, { useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import RegisterationForm from './Components/RegisterationForm';
import LoginForm from './Components/LoginForm';
import Courses from './Components/Courses';
import CourseDetails from './Components/CourseDetails';
import EnrollCourse from './Components/EnrollCourse';

function App() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (

    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg nav ">

          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNav}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <Link to="/courses" className="nav-link active" >Courses </Link>
                <Link to="/course_details" className="nav-link" >Course Details </Link>
                <Link to="/enroll_course" className="nav-link" >Enroll Course </Link>
                <Link to="/register" className="nav-link " aria-current="page">Register</Link>
                <Link to="/loginForm" className="nav-link" >LoginForm </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className={`offcanvas offcanvas-start ${isNavOpen ? 'show' : ''}`} id="offcanvas" tabIndex="-1" aria-labelledby="offcanvasLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasLabel">Menu</h5>
            <button
              type="button"
              className="btn-close text-reset"
              onClick={toggleNav}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="nav flex-column position-relative">
              <li className="nav-item " onClick={toggleNav}>
                <Link to="/register" className="nav-link active" >Register</Link>
              </li>
              <li className="nav-item" onClick={toggleNav}>
                <Link to="/loginForm" className="nav-link" >LoginForm </Link>
              </li>
              <li className="nav-item" onClick={toggleNav}>
              <Link to="/courses" className="nav-link" >Courses </Link>
              </li>
              <li className="nav-item" onClick={toggleNav}>
              <Link to="/course_details" className="nav-link" >Course Details </Link>
              </li>
              <li className="nav-item" onClick={toggleNav}>
              <Link to="/enroll_course" className="nav-link" >Enroll Course </Link>
              </li>
            </ul>

          </div>

        </div>

        <Routes>
          <Route path="/" element={<RegisterationForm />} />
          <Route path="/register" element={<RegisterationForm/>} />
          <Route path="/loginForm" element={<LoginForm/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/course_details" element={<CourseDetails/>} />
          <Route path="/enroll_course" element={<EnrollCourse/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;