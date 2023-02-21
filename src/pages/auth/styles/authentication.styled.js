import styled from "styled-components";

export const LoginContainer = styled.div`
    display : grid;
    grid-template-columns: 50% 50%;
    height:inherit  
   ` ;

    export const LeftHalf = styled.div`
    background-image: url(${(props)=>props.imgUrl});
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
   ` ;

   export const RightHalf = styled.div`
     height: 100%;
     width: 100%;
     margin-top: 30%;
   `;

   export const PagingButton = styled.button`
   display:inline-block;
   background-color:#55229E;
   color:#ffffff;
   font-size:18px;
   border:none;
   border-radius: 8px
   height:50px;
   width:300px;
   cursor:pointer;
   &:hover{
    background-color:#334296;
   }
   `;

   export const PTagContainer = styled.div`
    text-align: center;
    width: 100%
    height: 10%
   `;


   export const RightPTagTwo = styled.p`
   font-size:${props => props.name=== "one" ? '16px' : '15px'};
   font-weight:${props => props.name === "two" ? '400' : '700'};
   `

   export const InputForm = styled.form`
     width: 100%;
     height: 100%;
   `

   export const FormContainer = styled.div`
     height: 50%;

   `

   export const InputField = styled.input`
     width: 50%;
     height: 10%;
     border-radius: 4px;
     margin-bottom: 2%;
     padding:0% 2%
   `

   export const CheckInputField = styled.input`
     height: 100%;
     border-radius: 4px;
     &:checked{
      color:white;
      background-color:#55229E
     }
   `

   export const SmallImage = styled.img`
   `

   export const SmallGrid = styled.div`
     display: grid;
     grid-template-columns: 50% 50%;
     height: 10%;
     width: 50%;
     margin: auto;
   `

   export const SmallInnerGrid = styled.div`
     display: grid;
     grid-template-columns: 10% 90%;
     height: 30%;
     width: 100%
   `

   export const CardContainer = styled.div`
      width:70%;
      height:100%;
      display:grid;
      grid-template-rows:20% 20% 60%;
      grid-row-gap:10% 10% 10%;
      padding:5% 5%;
   `

   export const SmallerPTag = styled.p`
      font-size: 16px;
      font-weight:400;
      color:black
   `

   export const CardMainContainer = styled.div`
      width:100%;
      height:100%
   `