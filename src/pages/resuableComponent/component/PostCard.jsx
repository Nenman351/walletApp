import React from "react";
import { CardContainer, PTagContainer, SmallGrid, SmallerPTag } from "../../auth/styles/authentication.styled";

const PostCard = (props) => {
    return(
        <CardContainer>
            <SmallGrid>
                <SmallerPTag>{props.userId}</SmallerPTag>
                <SmallerPTag>{props.id}</SmallerPTag>
            </SmallGrid>
            <PTagContainer>
                <SmallerPTag>{props.title}</SmallerPTag>
            </PTagContainer>
            <PTagContainer>
                <SmallerPTag>{props.body}</SmallerPTag>
            </PTagContainer>
        </CardContainer>
    )
}

export default PostCard