import "./App.css";
// import { Components } from "./pages/auth/ReducerComponent/ReducerComponentOne";
// import { ReducerComponent } from "./pages/auth/ReducerComponent/ReducerComponentTwo";
import LoginClass from "./pages/auth/components/LoginClass";
import LoginComponent from "./pages/auth/components/LoginComponent";
//  import { OTPInput } from "./pages/auth/components/OTPInput";
import Login from "./pages/auth/components/Login";
import { SignUp } from "./pages/auth/components/SignUp";
import { VerifyAccount } from "./pages/auth/components/VerifyAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Login/:id" element={<Login />} />
        {/* <Route path="Login/:id" element={<LoginClass/>}/> */}
        <Route path="LoginClass" element={<LoginComponent />} />
        <Route path="VerifyAccount" element={<VerifyAccount />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
      {/* <Login />
      <VerifyAccount/> 
      <LoginClass/> 
      <LoginComponent/> */}
    </Router>
  );
}

export default App;
