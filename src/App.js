import React from "react";
import Navbar from "./component/layouts/Navbar";
import HomeSec from "./component/layouts/HomeSec";
import Resume from "./component/layouts/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/layouts/Home";
import Profile from "./component/layouts/Profile";
import Myprofile from "./component/layouts/Myprofile";

import LandingPage from "./component/layouts/LandingPage";
// import Landingpage from "./components/layouts/LandingPage";
import SignupForm1 from "./component/layouts/SignupForm1";
import { history } from "./History";
import MyApplication from "./component/layouts/MyApplication";
const App = () => {
  return (
    <>
      <BrowserRouter history={history}>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route
            exact
            path="/component/layouts/Resume"
            element={<Resume />}
          ></Route>
          <Route
            exact
            path="/component/layouts/Home"
            element={<Home />}
          ></Route>
          <Route
            exact
            path="/component/layouts/HomeSec/:id"
            element={<HomeSec />}
          ></Route>
          <Route
            exact
            path="/component/layouts/SignupForm1"
            element={<SignupForm1 />}
          ></Route>
          <Route
            exact
            path="/component/layouts/LandingPage"
            element={<LandingPage />}
          ></Route>
          <Route
           exact
           path = "/component/layouts/Profile"
           element = {<Profile/>}
           >
           </Route>
           <Route
           exact
           path = "/component/layouts/MyApplication"
           element = {<MyApplication/>}
           >
           </Route>
           <Route
           exact
           path = "/component/layouts/Myprofile"
           element = {<Myprofile/>}
           >
           </Route>

         
          
         
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;