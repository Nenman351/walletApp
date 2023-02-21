import React from "react";
import VerifyAccountImage from '../../../assets/images/svg/VerifyAccountImage.svg';
import { LoginContainer,InputField,InputForm,FormContainer,RightPTagTwo,LeftHalf,PTagContainer,RightHalf,PagingButton } from "../styles/authentication.styled";

export const VerifyAccount = () => {
    return(
        <LoginContainer>
            <LeftHalf imgUrl={VerifyAccountImage}></LeftHalf>
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