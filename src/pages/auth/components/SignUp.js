import React from "react";
import SignUpImage from '../../../assets/images/svg/SignUpImage.svg'
import { LoginContainer,InputField,InputForm,FormContainer,RightPTagTwo,LeftHalf,PTagContainer,RightHalf,PagingButton } from "../styles/authentication.styled";

export const SignUp = () => {
    // const location =  
    return(
        <LoginContainer>
            <LeftHalf imgUrl={SignUpImage}></LeftHalf>
            <RightHalf>
                <PTagContainer>
                    <RightPTagTwo name={"one"}>Welcome!</RightPTagTwo>
                    <RightPTagTwo name={"two"}>Sign up by entering the information below</RightPTagTwo>
                </PTagContainer>
                <FormContainer>
                    <InputForm>
                        <InputField type="text" name="firstName" id="firstName" placeholder="First Name"/>
                        <InputField type="text" name="lastName" id="lastName" placeholder="Last Name"/>
                        <InputField type="email" name="email" id="email" placeholder="Email"/>
                        <InputField type="password" name="password" id="password" placeholder="Password"/>
                        <PTagContainer>
                            <PagingButton>Sign Up</PagingButton>
                        </PTagContainer>
                    </InputForm>
                </FormContainer>
            </RightHalf>
        </LoginContainer>
    )
}