import * as React from "react";
import styled from "styled-components";

const SCarouselWrapper = styled.div`
  display: flex;
`;


const Carousel = ({ children }) => {
  const activeSlide = children?.map(slide => (
    <>
      {slide}
    </>
  ));

  return (
    <div>
      <SCarouselWrapper>
        {activeSlide}
      </SCarouselWrapper>
    </div>
  );
};

export default Carousel;