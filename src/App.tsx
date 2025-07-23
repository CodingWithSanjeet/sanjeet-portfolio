import React, { CSSProperties } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import HashLoader from "react-spinners/HashLoader";
import {
  Home,
  About,
  Contact,
  Skills,
  Work,
  Experience,
  ExperienceDetails,
  Resume,
} from "./components/pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const override: CSSProperties = {
  left: "45%",
  top: "50vh",
};
function App() {
  return (
    <div className="App">
      <React.Suspense
        fallback={
          <HashLoader color="#08FDD8" size={50} cssOverride={override} />
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route
              path="/skills/:companyName"
              element={<ExperienceDetails />}
            />
            <Route path="/work" element={<Work />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </React.Suspense>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          backgroundColor: "#2a2a2a",
          color: "#fff",
          border: "1px solid #08fdd8",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}

export default App;
