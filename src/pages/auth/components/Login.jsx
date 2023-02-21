import React, { useState, useEffect } from "react";
import LoginImage from "../../../assets/images/svg/LoginImage.svg";
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
  CardMainContainer,
} from "../styles/authentication.styled";
import Forgot_password from "../../../assets/images/svg/ForgotPassword.svg";
import PostCard from "../../resuableComponent/component/PostCard";
import { useNavigate, useParams} from "react-router-dom";

const Login = () => {
  const { id } = useParams();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const navigate = useNavigate();
  // const location = useLocation();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  async function fetchDataCall() {
    await fetch(url)
      .then((res) => res.json())
      .then((response) => setData(response))
      .catch((error) => console.log("Error -> ", error));
  }

  useEffect(() => {
    fetchDataCall();
  }, []);

  console.log("id --> ", id);
  // const fetchFakeData = useCallback(async() => {
  //   await fetch(url)
  //   .then((res) => res.json())
  //   .then((response)=> setData(response))
  //   .catch((error) => console.log("Error -> ",error))
  // }, [])

  // function dataConverter(p) {
  //   for (const data of p) {
  //     console.log("arr -->", arr.push(data));
  //   }
  // }

  // function controlError(err) {
  //   console.log(err);
  // }

  // function fetchCall() {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       dataConverter(data);
  //     })
  //     .catch((err) => controlError(err));
  // }

  return (
    <>
      <LoginContainer>
        <LeftHalf imgUrl={LoginImage}></LeftHalf>
        <RightHalf>
          <PTagContainer>
          <RightPTagTwo name={"two"}>{id}</RightPTagTwo>
            <RightPTagTwo name={"one"}>Welcome Back!</RightPTagTwo>
            <RightPTagTwo name={"two"}>Log in to your Dashboard</RightPTagTwo>
          </PTagContainer>
          <FormContainer>
            <InputForm>
              <InputField
                value={email}
                onChange={(e) => handleEmailChange(e)}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <InputField
                value={password}
                onChange={(e) => handlePasswordChange(e)}
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
              <PagingButton onClick={() => navigate("/Signup", "/id")}>
                Login
              </PagingButton>
            </InputForm>
          </FormContainer>
        </RightHalf>
      </LoginContainer>
      {/* <PTagContainer>{
      data.map((post) =>(
        <CardMainContainer key={post.id}>
          <PostCard
          userId={post.userId}
          id={post.id}
          title={post.title}
          body={post.body}
          />
        </CardMainContainer>
      ))
      }</PTagContainer> */}
    </>
  );
};

export default Login;
