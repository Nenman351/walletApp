import styled  from "styled-components";

export const LoginButton = styled.button`
  display: inline-block;
  background-color: #55229e;
  color: #ffff;
  font-size: 15px;
  border: none;
  border-radius: 8px;
  height: 40px;
  width: 40%;
  cursor: pointer;
  margin-top: 15px;
`

export const TextInput = styled.input`
    width: 45%;
    border-width: 2px;
    margin-bottom: 10px;
    border-radius: 5px;
    height: 6vh;
    padding-left: 20px;
    padding-top: 7px;
`

export const RightHalf = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Container = styled.div`
    dislpay: grid;
` 

export const LeftHalf = styled.div`
background-image: url(${(props)=>props.imgUrl});
background-repeat: no-repeat;
background-size: contain;
height: 100%;
width: 100%;


`

export const Image = styled.img`
    width:100%;
    height:auto;
`

export const button = styled.div`
`
