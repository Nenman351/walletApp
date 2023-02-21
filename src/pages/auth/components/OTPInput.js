import React from "react";
import OTPInputImage from '../../../assets/images/svg//OTPInputImage.svg';
import { FormContainer,RightHalf,RightPTagTwo, InputForm, LeftHalf, LoginContainer, PTagContainer, PagingButton } from "../styles/authentication.styled";

export const OTPInput = () => {
    return (
        <LoginContainer>
            <LeftHalf imgUrl={OTPInputImage}></LeftHalf>
            <RightHalf>
                <PTagContainer>
                <RightPTagTwo name={"one"}>Enter your OTP number</RightPTagTwo>
                </PTagContainer>
                <FormContainer>
                    <InputForm>
                    <button>-</button>
                    <button>-</button>
                    <button>-</button>
                    <button>-</button>
                    </InputForm>
                </FormContainer>
            </RightHalf>
        </LoginContainer>
    )
}