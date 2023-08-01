import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import SignUp from "./components/reg_log_components/Signup";
import SignIn from "./components/reg_log_components/Signin";


function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;


