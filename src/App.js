import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ChakraProvider } from "@chakra-ui/react";
import Login0 from "./pages/auth/components/Login0";
import OTP from "./pages/auth/components/OTPpage";
import SignUp from "./pages/auth/components/Sign-up";
import OTPAction from "./pages/auth/components/OtpActionPage";
import CompleteReg from "./pages/auth/components/CompleteReg";
import CompleteRegTwo from "./pages/auth/components/CompleteRegTwo";
import ForgotPasswordTwo from "./pages/auth/components/ForgotPassword";
import PasswordPage from "./pages/auth/components/ForgotPasswordPage";
import OTPINPUT from "./pages/auth/components/ForgotPasswordOtpInput";
import DashBoardPage from "./pages/dashboard/components/DashBoardPage";
import AccountVerification from "./pages/auth/components/VerifyAccount";
import OTPInput from "./pages/auth/components/OtpInputActionPage";
import RegistrationModal from "./pages/auth/components/RegistrationModal";
import ForgotPasswordModal from "./pages/auth/components/ForgotPasswordModal";
import NewPassword from "./pages/auth/components/NewPassword";
import NewPasswordModal from "./pages/auth/components/NewPasswordModal";

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
          <Route path="otpinputmodal" element={<OTPInput />} />
          <Route path="registration" element={<CompleteReg />} />
          <Route path="reg" element={<CompleteRegTwo />} />
          <Route path="forgotpassword" element={<ForgotPasswordTwo />} />
          <Route path="password" element={<ForgotPasswordModal />} />
          <Route path="forgot" element={< PasswordPage/>}/>
          <Route path="newpassword" element={< NewPassword/>}/>
          <Route path="passwordmodal" element={< NewPasswordModal/>}/>
          <Route path="input" element={<OTPINPUT/>}/>
          <Route path="verify" element={<AccountVerification/>}/>
          <Route path="regmodal" element={<RegistrationModal/>}/>
          <Route path="dashboard" element={<DashBoardPage/>}/>
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
