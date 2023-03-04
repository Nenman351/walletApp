import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ChakraProvider } from "@chakra-ui/react";
import Login0 from "./pages/auth/components/Login0";
import OTP from "./pages/auth/components/OTPpage";
import SignUp from "./pages/auth/components/SignUp";
import OTPAction from "./pages/auth/components/OtpActionPage";
import CompleteReg from "./pages/auth/components/CompleteReg";
import CompleteRegTwo from "./pages/auth/components/CompleteRegTwo";
import ForgotPasswordTwo from "./pages/auth/components/ForgotPassword";
import PasswordPage from "./pages/auth/components/ForgotPasswordPage";
import OTPINPUT from "./pages/auth/components/ForgotPasswordOtpInput";

// import ChakraCard from "./pages/resuableComponent/ChakraCard";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login0 />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="otp" element={<OTP />} />
          <Route path="otpAction" element={<OTPAction />} />
          <Route path="registration" element={<CompleteReg />} />
          <Route path="reg" element={<CompleteRegTwo />} />
          <Route path="forgotpassword" element={<ForgotPasswordTwo />} />
          <Route path="forgot" element={< PasswordPage/>}/>
          <Route path="input" element={<OTPINPUT/>}/>
        </Routes>
        {/* <Login />
      <VerifyAccount/> 
      <LoginClass/> 
      <LoginComponent/> */}
      </Router>
    </ChakraProvider>
  );
}

export default App;
