import React, { Component } from "react";
import LoginImage from "../../../assets/images/svg/LoginImage.svg";
// import { PagingButton } from "../styles/authentication.styled";
import {
  LoginContainer,
  FormContainer,
  InputField,
  SmallInnerGrid,
  SmallGrid,
  CheckInputField,
  InputForm,
  SmallImage,
  RightHalf,
  RightPTagTwo,
  PTagContainer,
  LeftHalf,
  PagingButton,
} from "../styles/authentication.styled";
import Forgot_password from "../../../assets/images/svg/ForgotPassword.svg";

class LoginClass extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  // setIncrement(){
  //     this.state += 1
  // }
  // setDecrement(){
  //     this.state -=1
  // }
  // setReset(){
  //     this.state = 0
  // }

  handleEmailChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.email);
  };

  handlePasswordChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.password);
  };

  render() {
    return (
      <LoginContainer>
        <LeftHalf imgUrl={LoginImage}></LeftHalf>
        <RightHalf>
          <PTagContainer>
            <RightPTagTwo name={"one"}>Welcome Back!</RightPTagTwo>
            <RightPTagTwo name={"two"}>Log in to your Dashboard</RightPTagTwo>
          </PTagContainer>
          <FormContainer>
            <InputForm>
              <InputField
                value={this.state.email}
                onChange={this.handleEmailChange}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <InputField
                value={this.state.password}
                onChange={this.handlePasswordChange.bind(this)}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <SmallGrid>
                <SmallInnerGrid>
                  <CheckInputField
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />
                  <RightPTagTwo name={"two"}>Remember Me</RightPTagTwo>
                </SmallInnerGrid>
                <SmallInnerGrid>
                  <SmallImage src={Forgot_password} alt="Forgot password" />
                  <RightPTagTwo name={"two"}>Forgot Password</RightPTagTwo>
                </SmallInnerGrid>
              </SmallGrid>
              <PagingButton>Login</PagingButton>
            </InputForm>
          </FormContainer>
        </RightHalf>
      </LoginContainer>
    );
  }
}

export default LoginClass;
