import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SingupPage";
import Tasktable from "./components/tasktable";
import Welcome from "./components/welcome";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="">
          <div className="row">
            <div className="col-1"></div>

            <div className="container col-10 mt-5">
              <Routes>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/tasktable" element={<Tasktable />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
