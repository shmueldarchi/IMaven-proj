import * as React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  align-items: center;
  display: flex;
  border: 2px black;
`;

const STextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
  border: 2px black;
`;

const SlideOne = (props) => (
  <SContainer>
    <STextWrapper>
    </STextWrapper>
    <img src={props.img} style={{width:"13vw",
    height: '52vh',
    top: '5vh',
    position: 'relative',
    "border-radius":'19px' }}/>
  </SContainer>
);

export default SlideOne;