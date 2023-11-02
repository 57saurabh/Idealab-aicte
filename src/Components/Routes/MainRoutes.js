import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and update imports

import HomePage from "../pages/Homepage/HomePage";
import NavBar from "../pages/Navbar/NavBar";
import Footer from "../pages/Footer/Footer";
import Infrastructure from "../pages/Infrastructure/Infrastructure";
import OurServices from "../pages/Services/OurServices";
import Programmes from "../pages/Programmes/Programmes";
import Teams from "../pages/Team/Teams";
import Login from "../Portals/AdminAuthentication/Login/Login";
import JoinUs from "../Portals/AdminAuthentication/JoinUs/JoinUs";
import Dashboard from "../Portals/AdminAuthentication/AdminDashboard/AdminDashboard";
// import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";

import PrivateRoute from "./PrivateRouting";
import StudentDashboard from "../Portals/UserAuthentication/StudentDashboard/StudentDashboard";
import UserJoinUs from "../Portals/UserAuthentication/JoinUs/UserJoinUs";
import UserLogin from "../Portals/UserAuthentication/Login/UserLogin";
import UserContext from "../../Context/UserContext";

function MainRoutes() {
  const {userType} = useContext(UserContext);
  
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <HomePage />
            </>
          }
        />{" "}
        {/* 'element' instead of 'component' */}
        <Route
          path="/infrastructure"
          element={
            <>
              <NavBar />
              <Infrastructure />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <NavBar />
              <OurServices />
            </>
          }
        />
        <Route
          path="/programmes"
          element={
            <>
              <NavBar />
              <Programmes />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <NavBar />
              <Teams />
            </>
          }
        />
        <Route
          path="/admin/login"
          element={
            <>
              <NavBar />
              <Login />
            </>
          }
        />
        <Route
          path="/user/login"
          element={
            <>
              <NavBar />
              <UserLogin/>
            </>
          }
        />
        <Route
          path="/admin/joinus"
          element={
            <>
              <NavBar />
              <JoinUs />
            </>
          }
        />
        <Route
        path="/user/joinus"
        element={
          <>
          <NavBar/>
          <UserJoinUs/>
          </>
        }
        />
          <Route element={<PrivateRoute/>}>
          <Route path="/user/dashboard" element={<StudentDashboard />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>
        
        {/* <Route
          path="/dashboard"
          element={
            <>
              <Dashboard />
            </>
          }
        />
        <Route
          path="/Studentdashboard"
          element={
            <>
              <StudentDashboard/>
            </>
          }
        /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default MainRoutes;
