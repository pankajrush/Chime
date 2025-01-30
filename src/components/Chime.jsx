import React from "react";
import Login from "./login/Login";
import StepTwoVerification from "./two_Step/StepTwoVerification";
import Important from './important/Important'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Chime = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/StepTwoVerification" element={<StepTwoVerification />} />
          <Route path="/important" element={<Important />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Chime;
