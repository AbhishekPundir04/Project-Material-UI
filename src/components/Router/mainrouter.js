import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import AboutUs from "../../Pages/AboutUs";
import ContactUs from "../../Pages/ContactUs";
import LoginForm from "../../LoginForm/LoginForm";
import SignUp from "../../LoginForm/SignUpForm";
import PrivateRouter from "./dashboardroutes";
import PublicRouter from "./publicRouter";
import MainDashboard from "../../Dashboard/mainDashboard";
import Feed from "../Feed";

const MainRouter = () => {
  console.log("router");

 
  return (
      <Routes>
         <Route path="/" element={<PublicRouter/>}>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/dashboard" element={<MainDashboard/>}></Route>
          <Route path="/homepage" element={<Feed/>}></Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>
  );
};

export default MainRouter;
